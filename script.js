// =====================================================
// ELEMENTS
// =====================================================

const landingPage = document.getElementById("landingPage");
const scenarioView = document.getElementById("scenarioView");

const tileContainer = document.getElementById("tileContainer");
const backToTilesBtn = document.getElementById("backToTilesBtn");

const video = document.getElementById("scenarioVideo");

const promptModal = document.getElementById("promptModal");
const questionText = document.getElementById("questionText");
const answersContainer = document.getElementById("answersContainer");
const ignoreBtn = document.getElementById("ignoreBtn");

const scenarioTitle = document.getElementById("scenarioTitle");


// =====================================================
// SCENARIO CONFIGURATION
// =====================================================

const scenarios = {

    hiking: {
        title: "Hiking Scenario",
        video: "videos/hiking.mp4",

        prompts: [

            {
                id: "H01",
                time: 5,

                question: "Have you prepared hypo food for the hike?",

                options: [
                    "Yes",
                    "No / Not sure"
                ],

                branches: {
                    "Yes": "H01a",
                    "No / Not sure": "H01b"
                }
            },

            {
                id: "H01a",
                time: 12,

                question: "Do you feel you have enough hypo food for this activity?",

                options: [
                    "Yes",
                    "No",
                    "Not sure"
                ],

                isBranch: true
            },

            {
                id: "H01b",
                time: 12,

                question: "What is the main reason you haven't prepared hypo food?",

                options: [
                    "Forgot",
                    "Didn't think I needed it",
                    "Don't want to carry extra food",
                    "Unsure what to bring"
                ],

                isBranch: true
            },

            {
                id: "H02",
                time: 20,

                question: "Have you eaten before starting the hike?",

                options: [
                    "Yes",
                    "No / Not sure"
                ],

                branches: {
                    "Yes": "H02a",
                    "No / Not sure": "H02b"
                }
            },

            {
                id: "H02a",
                time: 30,

                question: "How do you feel about what you've eaten before starting?",

                options: [
                    "Comfortable",
                    "Might have eaten too much",
                    "Might not have eaten enough",
                    "Unsure"
                ],

                isBranch: true
            },

            {
                id: "H02b",
                time: 30,

                question: "How do you feel about starting the hike without eating?",

                options: [
                    "Comfortable",
                    "Slightly concerned",
                    "Very concerned",
                    "Would prefer to eat first"
                ],

                isBranch: true
            },

            {
                id: "H03",
                time: 45,

                question: "Are you concerned about insulin being on board during the hike?",

                options: [
                    "Yes",
                    "No",
                    "Not sure"
                ],

                branches: {
                    "Yes": "H03a"
                }
            },

            {
                id: "H03a",
                time: 55,

                question: "How does this concern affect how you feel about starting the hike?",

                options: [
                    "Comfortable managing it",
                    "Slightly concerned",
                    "Very concerned",
                    "Would rather change my plans",
                    "Not sure what to do"
                ],

                isBranch: true
            }

        ]
    },

    presentation: {

        title: "Oral Presentation Scenario",
        video: "videos/presentation.mp4",

        prompts: [

            {
                id: "P01",
                time: 5,

                question:
                    "You are getting ready for your presentation. How are you feeling about presenting today?",

                options: [
                    "Comfortable",
                    "Slightly anxious",
                    "Moderately anxious",
                    "Very anxious",
                    "Considering not presenting"
                ]
            },

            {
                id: "P02",
                time: 12,

                question:
                    "Have you prepared everything you need for your presentation?",

                options: [
                    "Yes",
                    "No",
                    "Not sure"
                ],

                branches: {
                    "Yes": "P02a",
                    "No": "P02b",
                    "Not sure": "P02b"
                }
            },
            {
                id: "P02a",
                time: 18,
                question:
                    "Do you feel confident that you have everything you need to manage your diabetes during the presentation?",
                
                options: [
                    "Yes",
                    "No",
                    "Not sure"
                ],
                isBranch: true
            },
            {
                id: "P02b",
                time: 18,

                question:
                    "What are you most concerned about not having with you?",

                options: [
                    "Presentation materials",
                    "Hypo food",
                    "Glucose management supplies",
                    "Something else",
                    "Not sure"
                ],

                isBranch: true
            },

            {
                id: "P03",
                time: 28,

                question:
                    "Have you eaten before leaving for your presentation?",

                options: [
                    "Yes",
                    "No",
                    "Not sure"
                ],

                branches: {
                    "Yes": "P03a",
                    "No": "P03b",
                    "Not sure": "P03b"
                }
            },

            {
                id: "P03a",
                time: 30,

                question:
                    "How do you feel about what you've eaten before the presentation?",

                options: [
                    "Comfortable",
                    "Might have eaten too much",
                    "Might not have eaten enough",
                    "Unsure"
                ],

                isBranch: true
            },

            {
                id: "P03b",
                time: 30,

                question:
                    "How do you feel about starting the presentation without eating?",

                options: [
                    "Comfortable",
                    "Slightly concerned",
                    "Very concerned",
                    "Would prefer to eat first"
                ],

                isBranch: true
            },

            {
                id: "P04",
                time: 33,

                question:
                    "Are you concerned about insulin being on board during the presentation?",

                options: [
                    "Yes",
                    "No",
                    "Not sure"
                ],

                branches: {
                    "Yes": "P04a"
                }
            },

            {
                id: "P04a",
                time: 36,

                question:
                    "How does this concern affect how you feel about giving the presentation?",

                options: [
                    "Comfortable managing it",
                    "Slightly concerned",
                    "Very concerned",
                    "Would rather change my plans",
                    "Not sure what to do"
                ],

                isBranch: true
            },
            {
                id: "P05",
                time: 40,

                question:
                    "You arrive at the presentation room and see the audience. How are you feeling now?",

                options: [
                    "Comfortable",
                    "Slightly anxious",
                    "Moderately anxious",
                    "Very anxious",
                    "Considering leaving"
                ],

                isBranch: false
            },

            {
                id: "P06",
                time: 46,

                question:
                    "Do you feel prepared to start your presentation?",

                options: [
                    "Yes",
                    "No",
                    "Not sure"
                ],

                branches: {
                    "Yes":"P07",
                    "No":"P06a",
                    "Not sure":"P06a"
                }
            },
            {
                id: "P06a",
                time: 50,

                question:
                    "What is making you feel less prepared?",

                options: [
                    "Concern about the presentation",
                    "Speaking in front of people",
                    "Concern about glucose",
                    "Concern about going low",
                    "Forgetting what to say",
                    "Other"
                ],
                isbranch: true
            },
            {
                id: "P07",
                time: 71,

                question:
                    "You have started presenting. How comfortable do you feel continuing?",

                options: [
                    "Comfortable",
                    "Slightly anxious",
                    "Moderately anxious",
                    "Very anxious",
                    "I would prefer to stop"
                ],
                
                branches: {
                    "Very anxious": "P07a",
                    "I would prefer to stop": "P07a"
                }
            },

            {
                id: "P07a",
                time: 72,

                question:
                    "What is your main concern while presenting?",

                options: [
                    "Going low",
                    "Difficulty concentrating",
                    "Audience noticing something is wrong",
                    "Not being able to manage my glucose",
                    "Forgetting what I want to say",
                    "Other"
                ],
                
                isBranch: true
            },
            

            
            // ==========================================
            // UNEXPECTED AUDIENCE QUESTION
            // ==========================================
{
                id: "P08",
                time: 151,

                question:
                    "An audience member asks an unexpected question. How comfortable are you with continuing?",

                options: [
                    "Comfortable",
                    "Slightly anxious",
                    "Moderately anxious",
                    "Not sure",
                    "Very anxious",
                    "I would prefer to stop"
                ],

                branches: {
                    "Very anxious": "P08a",
                    "I would prefer to stop": "P08a"
                },  
            },
            {
                id: "P08a",
                time: 155,

                question:
                    "What would you be most concerned about in this situation?",

                options: [
                    "Forgetting what to say",
                    "Difficulty concentrating",
                    "Audience noticing my anxiety",
                    "Concern about my glucose",
                    "Not being able to continue",
                    "Other"
                ],

                isBranch: false 
            },
            {
                id: "P09",
                time: 110,

                question:
                    "If you became concerned about your glucose during the presentation, how comfortable would you feel managing the situation?",

                options: [
                    "Very comfortable",
                    "Somewhat comfortable",
                    "Not sure",
                    "Slightly uncomfortable",
                    "Very uncomfortable"
                ],

                branches: {
                    "Slightly uncomfortable": "P09a",
                    "Very uncomfortable": "P09a"
                }
            },

            {
                id: "P09a",
                time: 115,

                question:
                    "What would concern you most about managing your glucose during the presentation?",

                options: [
                    "Having to leave the presentation",
                    "The audience noticing",
                    "Not having what I need",
                    "Not knowing what my glucose is doing",
                    "Being unable to finish",
                    "Other"
                ],

                isBranch: true
            },

            {
                id: "P10",
                time: 120,

                question:
                    "If you became worried during the presentation, what would you be most likely to do?",

                options: [
                    "Continue presenting",
                    "Take a moment to compose myself",
                    "Check my glucose",
                    "Use hypo food",
                    "Ask someone for help",
                    "Stop the presentation",
                    "Not sure"
                ],
                isBranch: false
            },

            {
                id: "P011",
                time: 160,

                question:
                    "Do you feel that your concern about hypoglycaemia could affect your willingness to give presentations in the future?",

                options: [
                    "No",
                    "A little",
                    "Moderately",
                    "A lot",
                    "Not sure"
                ],

                isBranch: false
            },
            {
                id: "P12",
                time: 165,

                question:
                    "How confident do you feel about giving a similar presentation in the future?",

                options: [
                    "1",
                    "2",
                    "3",
                    "4",
                    "5"
                ]
            },
            {
                id: "P13",
                time: 160,

                question:
                    "What was the biggest concern for you during this scenario?",

                options: [
                    "Managing glucose",
                    "Going low",
                    "Food preparation",
                    "Insulin",
                    "Speaking in front of people",
                    "Audience reaction",
                    "Unexpected questions",
                    "Something else",
                    "No major concern"
                ]
            },

        ]
    },

    sickday: {

        title: "Sick Day Management Scenario",
        video: "videos/sickday.mp4",

        prompts: [

            {
                id: "S01",
                time: 5,

                question:
                    "How confident do you feel managing your diabetes while you are unwell?",

                options: [
                    "Very confident",
                    "Somewhat confident",
                    "Slightly unsure",
                    "Very unsure"
                ]
            }

        ]
    }
};


// =====================================================
// CURRENT SCENARIO STATE
// =====================================================

let currentScenario = null;

let triggeredPrompts = new Set();

let activatedBranches = new Set();

let responses = [];


// =====================================================
// SELECT SCENARIO
// =====================================================

tileContainer.addEventListener("click", function(event) {

    const tile = event.target.closest(".scenario-tile");

    if (!tile) {
        return;
    }

    const scenarioName = tile.dataset.scenario;

    startScenario(scenarioName);
});


// =====================================================
// START SCENARIO
// =====================================================

function startScenario(scenarioName) {

    currentScenario = scenarios[scenarioName];

    if (!currentScenario) {
        console.error("Scenario not found:", scenarioName);
        return;
    }

    // Reset scenario state

    triggeredPrompts = new Set();

    activatedBranches = new Set();

    responses = [];


    // Set video

    video.src = currentScenario.video;

    video.load();


    // Set title

    scenarioTitle.innerHTML =
        `<i class="fas fa-play-circle" style="color:#1f688b;"></i> ${currentScenario.title}`;


    // Show scenario page

    landingPage.style.display = "none";

    scenarioView.style.display = "block";


    // Hide prompt

    closePrompt();
}


// =====================================================
// VIDEO TIMEUPDATE
// =====================================================

video.addEventListener("timeupdate", function() {

    if (!currentScenario) {
        return;
    }

    const currentTime = video.currentTime;

    currentScenario.prompts.forEach(prompt => {

        // Already shown?
        if (triggeredPrompts.has(prompt.id)) {
            return;
        }


        // Is this a branch question?
        if (prompt.isBranch) {

            // Branch hasn't been activated
            if (!activatedBranches.has(prompt.id)) {
                return;
            }
        }


        // Has video reached the question time?
        if (currentTime >= prompt.time) {

            triggeredPrompts.add(prompt.id);

            showPrompt(prompt);

        }

    });

});


// =====================================================
// SHOW PROMPT
// =====================================================

function showPrompt(prompt) {

    video.pause();

    questionText.textContent = prompt.question;

    answersContainer.innerHTML = "";


    prompt.options.forEach(option => {

        const button = document.createElement("button");

        button.className = "answer-btn";

        button.textContent = option;


        button.addEventListener("click", function() {

            handleAnswer(prompt, option);

        });


        answersContainer.appendChild(button);

    });


    promptModal.style.display = "flex";
}


// =====================================================
// HANDLE ANSWER
// =====================================================

function handleAnswer(prompt, answer) {

    console.log(
        `${prompt.id} → ${answer}`
    );


    // -----------------------------------------------
    // SAVE RESPONSE
    // -----------------------------------------------

    responses.push({

        scenario: currentScenario.title,

        questionId: prompt.id,

        question: prompt.question,

        answer: answer,

        videoTime: video.currentTime,

        timestamp: new Date().toISOString()

    });
console.log("Responses:", responses);

    // -----------------------------------------------
    // BRANCHING
    // -----------------------------------------------

    if (prompt.branches) {

        const nextQuestion =
            prompt.branches[answer];


        if (nextQuestion) {

            activatedBranches.add(nextQuestion);

            console.log(
                `Branch activated: ${nextQuestion}`
            );
        }
    }


    // -----------------------------------------------
    // CLOSE PROMPT
    // -----------------------------------------------

    closePrompt();


    // -----------------------------------------------
    // CONTINUE VIDEO
    // -----------------------------------------------

    video.play();
}


// =====================================================
// IGNORE
// =====================================================

ignoreBtn.addEventListener("click", function() {

    const currentQuestion =
        questionText.textContent;


    const prompt =
        currentScenario.prompts.find(
            p => p.question === currentQuestion
        );


    if (prompt) {

        responses.push({

            scenario: currentScenario.title,

            questionId: prompt.id,

            question: prompt.question,

            answer: "Ignore",

            videoTime: video.currentTime,

            timestamp: new Date().toISOString()

        });

    }


    closePrompt();

    video.play();
});


// =====================================================
// CLOSE PROMPT
// =====================================================

function closePrompt() {

    promptModal.style.display = "none";

    answersContainer.innerHTML = "";
}


// =====================================================
// BACK TO SCENARIOS
// =====================================================

backToTilesBtn.addEventListener("click", function() {

    video.pause();

    video.removeAttribute("src");

    video.load();

    currentScenario = null;

    closePrompt();

    scenarioView.style.display = "none";

    landingPage.style.display = "block";

});
