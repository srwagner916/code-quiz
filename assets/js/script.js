var timerCount = 0;
var scoreCount = 0;
var timeLeftEl = document.querySelector('#time-counter');
var startBtn = document.querySelector('#start-btn');
var timeLeft = 75
var questionEl = document.querySelector('#question-text')
var answerContainerEl = document.querySelector('#answer-container');
var questionsArr = [
  {q: 'Commonly used data types do not include:', a: 'alerts', wrongA1: 'booleans', wrongA2: 'strings', wrongA3: 'numbers' },
  {q: 'The condition in an if/else statement is enclosed in:', a: 'parentheses', wrongA1: 'curly brackets', wrongA2: 'quotations', wrongA3: 'square brackets'}
];


// start timer function
var timeCountDown = function() {
  var timerInterval = setInterval(function() {
    if (timeLeft >= 0) {
      timeLeftEl.textContent = 'Time: ' + timeLeft;
      timeLeft--;
    }
    else {
      clearInterval(timerInterval);
    }
    console.log(timeLeft);
  }, 1000);
};

//start button event listener
startBtn.addEventListener('click', function() {
  timeCountDown();
  var openingText = document.getElementById("opening-text");
  openingText.remove();
  startBtn.remove();

  
    questionEl.textContent = questionsArr[0].q;
    //create answer buttons
    var answersUl = document.createElement('ul');
    var answersLi1 = document.createElement('li');
    var answersLi2 = document.createElement('li');
    var answersLi3 = document.createElement('li');
    var answersLi4 = document.createElement('li');
    var answerBtn = document.createElement('button');
    var wrongABtn1 = document.createElement('button');
    var wrongABtn2 = document.createElement('button');
    var wrongABtn3 = document.createElement('button');
    
    answerBtn.textContent = questionsArr[0].a;
    wrongABtn1.textContent = questionsArr[0].wrongA1;
    wrongABtn2.textContent = questionsArr[0].wrongA2;
    wrongABtn3.textContent = questionsArr[0].wrongA3;
    
    answerContainerEl.appendChild(answersUl);
    answersUl.appendChild(answersLi1);
    answersUl.appendChild(answersLi2);
    answersUl.appendChild(answersLi3);
    answersUl.appendChild(answersLi4);
    answersLi1.appendChild(answerBtn);
    answersLi2.appendChild(wrongABtn1);
    answersLi3.appendChild(wrongABtn2);
    answersLi4.appendChild(wrongABtn3);


  });


var nextQuestion = function() {
  
    
}