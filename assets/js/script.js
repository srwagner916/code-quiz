var timerCount = 0;
var scoreCount = 0;
var timeLeftEl = document.querySelector('#time-counter');
var startBtn = document.querySelector('#start-btn');
var timeLeft = 10;
var questionEl = document.querySelector('#question-text')
var answerContainerEl = document.querySelector('#answer-container');
var questionsArr = [
  {q: 'Commonly used data types do not include _______.', a: 'alerts', wrongA1: 'booleans', wrongA2: 'strings', wrongA3: 'numbers' },
  {q: 'The condition in an if/else statement is enclosed in _______.', a: 'parentheses', wrongA1: 'curly brackets', wrongA2: 'quotations', wrongA3: 'square brackets'},
  {q: 'Arrays in javascript can be used to store_______.', a: 'all of the above', wrongA1: 'numbers and strings', wrongA2: 'booleans', wrongA3: 'other arrays'},
  {q: 'String values must be contained within _______ when being assigned to variables.', a: 'quotes', wrongA1: 'commas', wrongA2: 'curly brackets', wrongA3: 'parentheses'},
  {q: 'A very useful tool used during development and debugging for printing content to the debugger is _______.', a: 'console.log', wrongA1: 'JavaScript', wrongA2: 'terminal/bash', wrongA3: 'for loops'}
];

//answer buttons
var answersUl = document.createElement('ul');
var answersLi1 = document.createElement('li');
var answersLi2 = document.createElement('li');
var answersLi3 = document.createElement('li');
var answersLi4 = document.createElement('li');
var answerBtn = document.createElement('button');
var wrongABtn1 = document.createElement('button');
wrongABtn1.classList.add('wrong-a');
var wrongABtn2 = document.createElement('button');
wrongABtn2.classList.add('wrong-a');
var wrongABtn3 = document.createElement('button');
wrongABtn3.classList.add('wrong-a');

//answer feedback
var answerFeedbackEl = document.createElement('span');
answerFeedbackEl.classList.add('answer-feedback');
var answerFeedbackContainerEl = document.querySelector('#answer-feedback-container');


// start timer function
var timeCountDown = function() {
  var timerInterval = setInterval(function() {
    if (timeLeft >= 1) {
      timeLeftEl.textContent = 'Time: ' + timeLeft;
      timeLeft--;
    }
    else if (timeLeft === 0) {
      timeLeftEl.textContent = 'Time: 0';
      clearInterval(timerInterval);
    }
    else {
      timeLeftEl.textContent = 'Time: 0';
      clearInterval(timerInterval);
    }
    console.log(timeLeft);
  }, 1000);
};

var removeButtons = function(){
  answerBtn.remove();
  wrongABtn1.remove();
  wrongABtn2.remove();
  wrongABtn3.remove();
};

//start button event listener
startBtn.addEventListener('click', function() {
  timeCountDown();
  var openingText = document.getElementById("opening-text");
  openingText.remove();
  startBtn.remove();

  //first question
  //insert question text
  questionEl.textContent = questionsArr[0].q;
  //insert answer text into buttons  
  answerBtn.textContent = questionsArr[0].a;
  wrongABtn1.textContent = questionsArr[0].wrongA1;
  wrongABtn2.textContent = questionsArr[0].wrongA2;
  wrongABtn3.textContent = questionsArr[0].wrongA3;
  //append buttons to page
  answerContainerEl.appendChild(answersUl);
  answersUl.appendChild(answersLi1);
  answersUl.appendChild(answersLi2);
  answersUl.appendChild(answersLi3);
  answersUl.appendChild(answersLi4);
  answersLi1.appendChild(answerBtn);
  answersLi2.appendChild(wrongABtn1);
  answersLi3.appendChild(wrongABtn2);
  answersLi4.appendChild(wrongABtn3);
    //event listener for correct answer
  answerBtn.addEventListener('click', function() {
    answerFeedbackEl.textContent = 'Correct!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    removeButtons();
    question2();
  });
    //event listener for wrong answer
  document.querySelectorAll('.wrong-a').forEach(item => {
    item.addEventListener('click', function(){  
    answerFeedbackEl.textContent = 'Wrong!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    timeLeft = timeLeft - 10;
    removeButtons();
    question2();
    })
  })    
});


var question2 = function() {
  //insert question text
  questionEl.textContent = questionsArr[1].q;

  //insert answer text into buttons 
  answerBtn.textContent = questionsArr[1].a;
  wrongABtn1.textContent = questionsArr[1].wrongA1;
  wrongABtn2.textContent = questionsArr[1].wrongA2;
  wrongABtn3.textContent = questionsArr[1].wrongA3;
  
  //append buttons to page
  answersLi4.appendChild(answerBtn);
  answersLi2.appendChild(wrongABtn1);
  answersLi3.appendChild(wrongABtn2);
  answersLi1.appendChild(wrongABtn3);

  //event listener for correct answer
  answerBtn.addEventListener('click', function() {
    answerFeedbackEl.textContent = 'Correct!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    removeButtons();
    question3();
  });

  //event listener for wrong answer
  document.querySelectorAll('.wrong-a').forEach(item => {
    item.addEventListener('click', function(){  
    answerFeedbackEl.textContent = 'Wrong!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    timeLeft = timeLeft - 10;
    removeButtons();
    question3();
    })
  })  
};

var question3 = function() {
  //insert question text
  questionEl.textContent = questionsArr[2].q;

  //insert answer text into buttons 
  answerBtn.textContent = questionsArr[2].a;
  wrongABtn1.textContent = questionsArr[2].wrongA1;
  wrongABtn2.textContent = questionsArr[2].wrongA2;
  wrongABtn3.textContent = questionsArr[2].wrongA3;
   
  //append buttons to page
  answersLi2.appendChild(answerBtn);
  answersLi4.appendChild(wrongABtn1);
  answersLi1.appendChild(wrongABtn2);
  answersLi3.appendChild(wrongABtn3);
 
  //event listener for correct answer
  answerBtn.addEventListener('click', function() {
    answerFeedbackEl.textContent = 'Correct!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    removeButtons();

  });
 
  //event listener for wrong answer
  document.querySelectorAll('.wrong-a').forEach(item => {
    item.addEventListener('click', function(){  
    answerFeedbackEl.textContent = 'Wrong!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    timeLeft = timeLeft - 10;
    removeButtons();
     
    })
  })  
};