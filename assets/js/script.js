var timerCount = 0;
var scoreCount = 0;
var timeLeftEl = document.querySelector('#time-counter');
var startBtn = document.querySelector('#start-btn');
var timeLeft = 75


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
});


