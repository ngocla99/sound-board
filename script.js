'use strict';
const sound = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

const stopPlaySound = function () {
  sound.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
};
sound.forEach((sound) => {
  const btn = document.createElement('button');
  btn.classList.add('btn');
  btn.innerHTML = sound;

  btn.addEventListener('click', function () {
    stopPlaySound();
    document.getElementById(sound).play();
  });
  document.querySelector('.buttons').append(btn);
});
