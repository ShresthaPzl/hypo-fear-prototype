const video = document.getElementById("treadmill-video");

const answersContainer =
    document.getElementById("answers-container");

const promptModal =
    document.getElementById("medication-prompt-modal");

const questionText =
    promptModal.querySelector(".question-text");

const ignoreButton =
    document.getElementById("ignore-btn");

const answerButtons =
    document.querySelectorAll(".answer-btn");


// -----------------------------------------
// Scenario prompts
// -----------------------------------------

const prompts = [
    {
        time: 3,
        triggered: false,
        question: "Have you packed hypo food?",
        options: ["Yes", "No", "Not sure"]
    },

    {
        time: 4,
        triggered: false,
        question: "Did you eat before setting off?",
        options: ["Yes", "No", "Not sure"]
    },

    {
        time: 12,
        triggered: false,
        question: "Do you feel like sitting? Do you have insulin with you?",
        options: ["Yes", "No", "Not sure"]
    },

    {
        time: 18,
        triggered: false,
        question: "How are you feeling about starting the hike?",
        options: [
            "Comfortable",
            "A little anxious",
            "Very anxious",
            "Not sure"
        ]
    },

    {
        time: 25,
        triggered: false,
        question: "How is your glucose trending?",
        options: [
            "Stable",
            "Rising",
            "Falling",
            "Not sure"
        ]
    },

    {
        time: 35,
        triggered: false,
        question: "Do you want to drink water now?",
        options: ["Yes", "No", "Not sure"]
    }
];


// -----------------------------------------
// Watch video time
// -----------------------------------------

video.addEventListener("timeupdate", () => {

    const currentTime = video.currentTime;

    prompts.forEach(prompt => {

        if (
            !prompt.triggered &&
            currentTime >= prompt.time
        ) {

            prompt.triggered = true;

            video.pause();

            showPrompt(prompt);

        }

    });

});


// -----------------------------------------
// Show prompt
// -----------------------------------------

function showPrompt(prompt) {

    questionText.innerText = prompt.question;

    // Remove previous options
    answersContainer.innerHTML = "";
    prompt.options.push("Ignore"); 
    // Create buttons based on the current prompt
    prompt.options.forEach(option => {

        const button = document.createElement("button");

        button.classList.add("answer-btn");

        button.innerText = option;

        button.addEventListener("click", () => {

            recordResponse(
                prompt.question,
                option
            );

            closePromptAndResume();

        });

        answersContainer.appendChild(button);
    });

    promptModal.style.display = "flex";
}

// -----------------------------------------
// User selects an answer
// -----------------------------------------

answerButtons.forEach(button => {

    button.addEventListener("click", () => {

        const answer = button.dataset.answer;

        recordResponse(
            questionText.innerText,
            answer
        );

        closePromptAndResume();

    });

});


// -----------------------------------------
// Ignore prompt
// -----------------------------------------

ignoreButton.addEventListener("click", () => {

    recordResponse(
        questionText.innerText,
        "Ignored"
    );

    closePromptAndResume();

});


// -----------------------------------------
// Close prompt
// -----------------------------------------

function closePromptAndResume() {

    promptModal.style.display = "none";

    video.play();

}


// -----------------------------------------
// Record response
// -----------------------------------------

function recordResponse(question, answer) {

    console.log({
        question: question,
        answer: answer,
        timestamp: video.currentTime
    });

}