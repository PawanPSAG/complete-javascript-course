'use strict';
//select element using id
const diceElement = document.querySelector('.dice');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
let current0Element = document.getElementById('current--0');
let current1Element = document.getElementById('current--1');

//hide dice
diceElement.classList.add('hidden');
//set score to 0
score0Element.textContent = 0;
score1Element.textContent = 0;

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//roll dice
btnRoll.addEventListener('click', function () {
  //generate random number between 1- 6
  const dice = Math.trunc(Math.random() * 6) + 1;

  //display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  //check dice is not equals to 1
  if (dice !== 1) {
    //add dice to current score
    currentScore += dice;
    document.getElementById();
    current0Element.textContent = currentScore;
  } else {
    //switch player
  }
});
