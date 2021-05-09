import './sass/main.scss';
import colors from '../colors.json';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action = start]'),
  stopBtn: document.querySelector('button[data-action = stop]'),
  resetBtn: document.querySelector('button[data-action = reset]'),
};

const buttons = [
  refs.startBtn,
  refs.stopBtn,
  refs.resetBtn
];

let timerId = null;

window.onload = () => {
  refs.stopBtn.disabled = true;

  refs.startBtn.addEventListener('click', onStart);
  refs.stopBtn.addEventListener('click', onStop);
  refs.resetBtn.addEventListener('click', onReset);
};

const onStart = () => {
  toggleDisabledAttribute(buttons);
  bodyColorSwitch();

  timerId = setInterval(() => {
    bodyColorSwitch();
  }, 1000);
};

const onStop = () => {
  toggleDisabledAttribute(buttons);
  clearInterval(timerId);
};

const onReset = () => refs.body.style.backgroundColor = 'white';

const bodyColorSwitch = () => {
  const randomIndex = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[randomIndex];
};

const toggleDisabledAttribute = (buttons) => {
  buttons.forEach(btn => btn.toggleAttribute('disabled'));
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
