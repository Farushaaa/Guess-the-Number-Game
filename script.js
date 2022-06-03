'use strict';

let randomNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayNumber = function (number) {
  document.querySelector('.number').textContent = number;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (sc) {
  document.querySelector('.score').textContent = sc;
};

const displayHighScore = function (hg) {
  document.querySelector('.highscore').textContent = hg;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  //If no number entered
  if (!guess) {
    displayMessage('⛔ No number!');
  }

  //if number is guessed
  else if (guess === randomNum) {
    displayMessage('✅ You guessed the number!');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '30rem';
    displayNumber(randomNum);

    if (score > highScore) {
      highScore = score;
      displayHighScore(highScore);
    }
  }

  //if number is not as secertnum
  else if (guess !== randomNum) {
    if (score > 1) {
      displayMessage(
        guess > randomNum ? '📈 Number is too high' : '📉 Number is too low'
      );
      score--;
      displayScore(score);
    } else {
      displayMessage('🆘 You lost the game!');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayNumber('?');
  displayScore(score);
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  randomNum = Math.trunc(Math.random() * 20) + 1;
});
