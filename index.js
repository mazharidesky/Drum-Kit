/* eslint-disable no-use-before-define */
/* eslint-disable no-case-declarations */
// const numberOfDrumButtons = document.querySelectorAll('.drum').length;

// for (let i = 0; i < numberOfDrumButtons; i++) {
//   const drum = document.querySelectorAll('.drum')[i];
//   const audio = new Audio();

//   drum.addEventListener('click', () => {
//     if (i === 4) {
//       audio.src = 'sounds/snare.mp3';
//     } else if (i === 5) {
//       audio.src = 'sounds/crash.mp3';
//     } else if (i === 6) {
//       audio.src = 'sounds/kick-bass.mp3';
//     } else {
//       audio.src = `sounds/tom-${i + 1}.mp3`;
//     }
//     audio.play();
//   });

//   drum.addEventListener('keydown', (event) => {
//     if (event.key === 'w') {
//       audio.src = 'sounds/tom-1.mp3';
//     } else if (event.key === 'a') {
//       audio.src = 'sounds/tom-2.mp3';
//     } else if (event.key === 's') {
//       audio.src = 'sounds/tom-3.mp3';
//     } else if (event.key === 'd') {
//       audio.src = 'sounds/tom-4.mp3';
//     } else if (event.key === 'j') {
//       audio.src = 'sounds/snare.mp3';
//     } else if (event.key === 'k') {
//       audio.src = 'sounds/crash.mp3';
//     } else if (event.key === 'l') {
//       audio.src = 'sounds/kick-bass.mp3';
//     } else {
//       return;
//     }
//     audio.play();
//   });
// }

const numberOfDrumButtons = document.querySelectorAll('.drum').length;

for (let i = 0; i < numberOfDrumButtons; i++) {
  const drum = document.querySelectorAll('.drum')[i];

  // eslint-disable-next-line func-names
  drum.addEventListener('click', () => {
    const buttonInnerHTML = drum.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
document.addEventListener('keypress', (e) => {
  makeSound(e.key);
  buttonAnimation(e.key);
});

// eslint-disable-next-line no-inner-declarations
function makeSound(key) {
  switch (key) {
    case 'w':
      const tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;
    case 'a':
      const tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;
    case 's':
      const tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;
    case 'd':
      const tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;
    case 'j':
      const snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;
    case 'k':
      const crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;
    case 'l':
      const kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;
    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  const activeButton = document.querySelector(`.${currentKey}`);
  activeButton.classList.add('pressed');
  activeButton.style.color = 'white';
  setTimeout(() => {
    activeButton.classList.remove('pressed');
    activeButton.style.color = '#DA0463';
  }, 100);
}