'use strict';
//DOM - Document Object Model
//get data from HTML and manipulate it - using class name
// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number';

// document.querySelector('.score').textContent = 25;
// document.querySelector('.number').textContent = 13;

//document.querySelector('.guess').value = 23;

//math function in javascript
const secretNumber = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = secretNumber;
let score = document.querySelector('.score').textContent;
console.log(secretNumber);
//hanlde button click
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent =
      'Congratulation Correct Number !';
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To High !';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game !';
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'To low !';
      score--;
    } else {
      document.querySelector('.message').textContent = 'You Lost the game !';
    }
  }
  document.querySelector('.score').textContent = score;
});

// document.querySelector('.guess').addEventListener('change', function () {
//   console.log(document.querySelector('.guess').value);
// });
