'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseWindow = document.querySelector('.close-modal');
const btsOpenModal = document.querySelectorAll('.show-modal');
console.log(btsOpenModal);
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btsOpenModal.length; i++) {
  console.log();
  // btsOpenModal[i].addEventListener('click', function () {
  //   console.log('Button Clicked');
  //   modal.classList.remove('hidden');
  //   overlay.classList.remove('hidden');
  // })
  btsOpenModal[i].addEventListener('click', openModal);
}

btnCloseWindow.addEventListener('click', closeModal);
// btnCloseWindow.addEventListener('click', function () {
//   modal.classList.add('hidden');
//   overlay.classList.add('hidden');
// });

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //console.log(event.key);

  if (event.key === 'Escape') {
    if (!modal.classList.contains('hidden')) {
      closeModal();
    }
  }
  if (event.key === 'Enter') {
    if (modal.classList.contains('hidden')) {
      openModal();
    }
  }
});
