//global variables
var viewHighScoresEl = document.querySelector('#view-high-scores');
var scoreCount = 0;
var timeLeftEl = document.querySelector('#time-counter');
var startBtn = document.querySelector('#start-btn');
var timeLeft = 75;
var questionEl = document.querySelector('#question-text');
var openingTextEl = document.querySelector('#opening-text');
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

//view high scores event listener
viewHighScoresEl.addEventListener('click', function() {
  startBtn.remove();
  displayHighScores();
});

// start timer function
var timeCountDown = function() {
  var timerInterval = setInterval(function() {
    if (timeLeft >= 1) {
      timeLeftEl.textContent = 'Time: ' + timeLeft;
      timeLeft--;
    }
    //refresh page, gameover when timer reaches 0
    else if (timeLeft === 0) {
      timeLeftEl.textContent = 'Time: 0';
      clearInterval(timerInterval);
      window.location.reload();
    }
    else {
      timeLeftEl.textContent = 'Time: 0';
      clearInterval(timerInterval);
    }
    console.log(timeLeft);
  }, 1000);
};
//remove buttons function
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

  //append buttons to page
  answerContainerEl.appendChild(answersUl);
  answersUl.appendChild(answersLi1);
  answersUl.appendChild(answersLi2);
  answersUl.appendChild(answersLi3);
  answersUl.appendChild(answersLi4);

  question1();
});

// question #1 function expression
var question1 = function() {
  //insert question text
  questionEl.textContent = questionsArr[0].q;

  //insert answer text into buttons 
  answerBtn.textContent = questionsArr[0].a;
  wrongABtn1.textContent = questionsArr[0].wrongA1;
  wrongABtn2.textContent = questionsArr[0].wrongA2;
  wrongABtn3.textContent = questionsArr[0].wrongA3;
  
  //append buttons to page
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
};

// question #2 function expression
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
    timeLeft - 10;
    removeButtons();
    question3();
    })
  })  
};

// question #3 function expression
var question3 = function() {
  //insert question text
  questionEl.textContent = questionsArr[2].q;
  //insert answer text into buttons 
  answerBtn.textContent = questionsArr[2].a;
  wrongABtn1.textContent = questionsArr[2].wrongA1;
  wrongABtn2.textContent = questionsArr[2].wrongA2;
  wrongABtn3.textContent = questionsArr[2].wrongA3;
  //append buttons to page
  answersLi4.appendChild(answerBtn);
  answersLi2.appendChild(wrongABtn1);
  answersLi1.appendChild(wrongABtn2);
  answersLi3.appendChild(wrongABtn3);
  //event listener for correct answer
  answerBtn.addEventListener('click', function() {
    answerFeedbackEl.textContent = 'Correct!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    removeButtons();
    question4();
  });
  //event listener for wrong answer
  document.querySelectorAll('.wrong-a').forEach(item => {
    item.addEventListener('click', function(){  
    answerFeedbackEl.textContent = 'Wrong!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    timeLeft - 10;
    removeButtons();
    question4();
    })
  })  
};

// question #4 function expression
var question4 = function() {
  //insert question text
  questionEl.textContent = questionsArr[3].q;
  //insert answer text into buttons 
  answerBtn.textContent = questionsArr[3].a;
  wrongABtn1.textContent = questionsArr[3].wrongA1;
  wrongABtn2.textContent = questionsArr[3].wrongA2;
  wrongABtn3.textContent = questionsArr[3].wrongA3;
  //append buttons to page
  answersLi3.appendChild(answerBtn);
  answersLi4.appendChild(wrongABtn1);
  answersLi2.appendChild(wrongABtn2);
  answersLi1.appendChild(wrongABtn3);
  //event listener for correct answer
  answerBtn.addEventListener('click', function() {
    answerFeedbackEl.textContent = 'Correct!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    removeButtons();
    question5();
  });
  //event listener for wrong answer
  document.querySelectorAll('.wrong-a').forEach(item => {
    item.addEventListener('click', function(){  
    answerFeedbackEl.textContent = 'Wrong!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    timeLeft - 10;
    removeButtons();
    question5();
    })
  })
  scoreCount = timeLeft;
  console.log('score is ', scoreCount);
};

// question #5 function expression
var question5 = function() {
  //insert question text
  questionEl.textContent = questionsArr[4].q;
  //insert answer text into buttons 
  answerBtn.textContent = questionsArr[4].a;
  wrongABtn1.textContent = questionsArr[4].wrongA1;
  wrongABtn2.textContent = questionsArr[4].wrongA2;
  wrongABtn3.textContent = questionsArr[4].wrongA3;
  //append buttons to page
  answersLi3.appendChild(answerBtn);
  answersLi2.appendChild(wrongABtn1);
  answersLi4.appendChild(wrongABtn2);
  answersLi1.appendChild(wrongABtn3);
  //event listener for correct answer
  answerBtn.addEventListener('click', function() {
    answerFeedbackEl.textContent = 'Correct!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    removeButtons();
    yourScorePage();
  });
  //event listener for wrong answer
  document.querySelectorAll('.wrong-a').forEach(item => {
    item.addEventListener('click', function(){  
    answerFeedbackEl.textContent = 'Wrong!';
    answerFeedbackContainerEl.appendChild(answerFeedbackEl);
    timeLeft - 10;
    answerFeedbackEl.remove();
    removeButtons();
    yourScorePage();

    })
  })
};

//submit your score function expression
var yourScorePage = function() {
  questionEl.textContent = 'All Done';
  openingTextEl.textContent = 'Your final score is ' + scoreCount;
  // create elements for the submit score form
  answerContainerEl.appendChild(openingTextEl);
  var submitContainerEl = document.createElement('div');
  submitContainerEl.classList.add('submit-container')
  answerContainerEl.appendChild(submitContainerEl);
  var scoreSubmitEl = document.createElement('span');
  scoreSubmitEl.textContent = 'Enter Initials:';
  submitContainerEl.appendChild(scoreSubmitEl);
  var submitInputEl = document.createElement('input');
  submitInputEl.setAttribute('id', 'name-input');
  submitContainerEl.appendChild(submitInputEl);
  var submitButtonEl = document.createElement('button');
  submitButtonEl.textContent = 'Submit!';
  submitButtonEl.setAttribute('id', 'submit-btn')
  submitContainerEl.appendChild(submitButtonEl);
  //submit score event & save to localStorage
  submitButtonEl.addEventListener('click', function(){
    var highScore = scoreCount;
    var initials = document.getElementById('name-input').value;
    localStorage.setItem('highscore', highScore);
    localStorage.setItem('name', initials);
    openingTextEl.remove();
    submitContainerEl.remove();
    displayHighScores();
  })
};

//display highscores function expression
var displayHighScores = function() {
  //create elements to display the highscore
  questionEl.textContent = 'High Scores';
  var goBackBtnEl = document.createElement('button');
  var clearHighScoreBtnEl = document.createElement('button');
  goBackBtnEl.textContent = 'Go Back';
  clearHighScoreBtnEl.textContent = 'Clear High Scores';
  answerFeedbackContainerEl.appendChild(goBackBtnEl);
  answerFeedbackContainerEl.appendChild(clearHighScoreBtnEl);
  var highScoreBoardEl = document.createElement('ol');
  var highScoreLi = document.createElement('li');
  // get scores from localStorage
  var name = localStorage.getItem('name');
  var highScore = localStorage.getItem('highscore');
  highScoreLi.textContent = name + '-' + highScore;
  // append scores to the page
  answerContainerEl.appendChild(highScoreBoardEl);
  highScoreBoardEl.appendChild(highScoreLi);
  // refresh page on button click
  goBackBtnEl.addEventListener('click', function() {
    window.location.reload();
  })
  //clear scores on button click
  clearHighScoreBtnEl.addEventListener('click', function() {
    localStorage.clear();
    highScoreBoardEl.remove();
  })
};