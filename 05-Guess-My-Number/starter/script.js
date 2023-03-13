'use strict';
//DOM - Document Object Model
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';

document.querySelector('.score').textContent = 25;
document.querySelector('.number').textContent = 13;

document.querySelector('.guess').value = 23;

console.log(document.querySelector('.guess').value);
