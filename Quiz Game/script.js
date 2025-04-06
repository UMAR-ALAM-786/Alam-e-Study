const questions =[
    {
        question: "The full form of KMCLU",
        answers:[
            {text: " Khawaja Moinuddin Chishti land Unity", correct: false},
            {text: "Khawaja Moinuddin Chishti Language University ", correct: true},
            {text: "Kaka mama chote lala uncle", correct: false},
            {text: "Korian morning cool land unity", correct: false},
        ]
    },
    {
        question: "An optical input device that interprets pencil marks on paper media is",
        answers:[
            {text: " magnetic tape", correct: false},
            {text: " O.M.R.", correct: true},
            {text: "optical scanners", correct: false},
            {text: "punch card reader", correct: false},
        ]
    },
    {
        question: "Which of the following is still useful for adding numbers?",
        answers:[
            {text: " UNIVAC", correct: false}, 
            {text: "Abacus", correct: true},
            {text: "EDSAC", correct: false},
            {text: "ENIAC", correct: false},
        ]
    },

{
    question: "The process of writing computer instructions in a programming language is known as",
    answers:[
        {text: "file", correct: false},
        {text: " programming", correct:false },
        {text: "processing", correct: false},
        {text: "coding", correct: true},
    ]
},
{
    question: "The personal computer industry was started by",
    answers:[
        {text: "IBM", correct: true},
        {text: "HCL", correct: false},
        {text: "Compaq", correct: false},
        {text: "Apple", correct: false},
    ]
},
{
    question: "Which device can sense inventory data specified in bar codes?",
    answers:[
        {text: " joystick", correct: false},
        {text: "holographs", correct: true},
        {text: "light pens", correct: false},
        {text: "mouse", correct: false},
    ]
},
{
    question: "Punched cards use",
    answers:[
        {text: "ASCII code", correct: false},
        {text: "Alphanumeric code", correct:false },
        {text: " EBCDIC code", correct: false},
        {text: " Hollerith code", correct: true},
    ]
},
{
    question: "The two basic types of record access methods are",
    answers:[
        {text: "online and real time", correct: false},
        {text: "sequential and indexed", correct: false},
        {text: " sequential and random", correct: true},
        {text: "direct and immediate", correct: false},
    ]
},
{
    question: "The planning and control of data to support organisational objectives",
    answers:[
        {text: "Field", correct: false},
        {text: "Data modeling", correct: false},
        {text: "Data planning", correct: false},
        {text: " Data administration", correct: true},
    ]
},
{
    question: "What is the language used by most of the DBMS for helping their users to access data?",
    answers:[
        {text: "SQL", correct: false},
        {text: "Query language", correct: true},
        {text: "4GL", correct: false},
        {text: "High level language", correct: false},
    ]
},
{
    question: "Large collection of files are called",
    answers:[
        {text: "File system", correct: false},
        {text: "Databases", correct: true},
        {text: "Records", correct: false},
        {text: "Fields", correct: false},
    ]
},
{
    question: "A union consists of a number of elements that",
    answers:[
        {text: "must be structures", correct: false},
        {text: " are grouped next to each other in memory", correct: false},
        {text: "all have the same type", correct: false},
        {text: "occupy the same space in memory", correct: true},
    ]
},
{
    question: "A(n) _____ is an example of a contiguous structure.",
    answers:[
        {text: "array", correct: true},
        {text: "data", correct: false},
        {text: "pointer", correct: false},
        {text: "linked list", correct: false},
    ]
},
{
    question: "A(n) ______ is an example of a non contiguous data structure.",
    answers:[
        {text: "array", correct: false},
        {text: "data", correct: false},
        {text: "pointer", correct: false},
        {text: "linked list", correct: true},
    ]
},
{
    question: "A string is lie an array because",
    answers:[
        {text: "an array is a kind of string", correct: false},
        {text: "they are both character arrays", correct: false},
        {text: " a string is a kind of array", correct: true},
        {text: " both of them access functions the same way", correct: false},
    ]
},


{
    question: "_____ is the term used to insert an element into stack.",
    answers:[
        {text: "Pop", correct: false},
        {text: "Pump", correct: false},
        {text: "Pull", correct: false},
        {text: "Push", correct: true},
    ]
}
];

const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach( answer =>{
        const button =document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButton.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    
    });


}
function resetState(){
    nextButton.style.display = "none";
    while(answerButton.firstChild){
        answerButton.removeChild(answerButton.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct==="true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display= "block";
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "play Again";
    nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex< questions.length){
        showQuestion();
    }else{
        showScore();
    }
    }

nextButton.addEventListener("click",()=>{
    if(currentQuestionIndex< questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();