const quizData = [
    {
      question: "What is the result of the following expression?",
        a: "5 + 3",
        b: "10 - 2",
        c: "2 * 4",
        d: "20 / 5",
      correct: "a",
    },
    {
      question: "How do you declare a variable in JavaScript?",
        a: "variable x;",
        b: "var x;",
        c: "x = var;",
        d: "declare x;",
      correct: "b",
    },
    {
      question: "What is the purpose of the `typeof` operator in JavaScript?",
        a: "Returns the type of a variable",
        b: "Declares a new variable",
        c: "Checks if a variable is defined",
        d: "Converts a variable to a string",
      correct: "a",
    },
    {
      question: "Which of the following is not a valid way to create a function in JavaScript?",
        a: "function myFunction() {}",
        b: "var myFunction = function() {}",
        c: "() => {}",
        d: "myFunction = {}",
      correct: "d",
    },
    {
      question: "What does the `JSON` acronym stand for in JavaScript?",
        a: "JavaScript Object Notation",
        b: "Java Standard Object Notation",
        c: "JSON Oriented Navigation",
        d: "JavaScript Oriented Nodes",
      correct: "a",
    },
    {
      question: "What is the purpose of the `addEventListener` method in JavaScript?",
        a: "Adds a new HTML element",
        b: "Attaches an event handler to an HTML element",
        c: "Removes an event handler from an HTML element",
        d: "Creates a new event in the DOM",
      correct: "b",
    },
    {
      question: "How would you access the second element in an array called `myArray`?",
        a: "myArray(1)",
        b: "myArray[2]",
        c: "myArray.1",
        d: "myArray[1]",
      correct: "d",
    },
    {
      question: "What is the purpose of the `setTimeout` function in JavaScript?",
        a: "Pauses the execution of the script",
        b: "Sets a timer to execute a function after a specified delay",
        c: "Determines the current time",
        d: "Clears a timer set by `setInterval`",
      correct: "b",
    },
    {
      question: "What is the result of `5 + '5'` in JavaScript?",
        a: "10",
        b: "'55'",
        c: "'10'",
        d: "NaN",
      correct: "b",
    },
    {
      question: "Which statement is used to exit a loop in JavaScript?",
        a: "stop",
        b: "exit",
        c: "break",
        d: "finish",
      correct: "c",
    }
  ];
  
const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz(){

    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers(){
    answerEls.forEach((answerEl) => {
            answerEl.checked = false;
    });
}


submitBtn.addEventListener("click", () => {
    
    const answer = getSelected();

    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }

        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }
        else{
            quiz.innerHTML = `
            <h2>
                You scored answer correctly ${score}/${quizData.length} questions.
            </h2>
            
            <button onclick="location.reload()">Reload</button>`
        }
    }

});

