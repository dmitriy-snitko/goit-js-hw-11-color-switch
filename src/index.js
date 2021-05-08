import './sass/main.scss';
import colors from '../colors.json';

const refs = {
  body: document.querySelector('body'),
  startBtn: document.querySelector('button[data-action = start]'),
  stopBtn: document.querySelector('button[data-action = stop]'),
};

let timerId = null;

refs.startBtn.addEventListener('click', () => {
  toggleDisabledAttribute();
  bodyColorSwitcher();

  timerId = setInterval(() => {
    bodyColorSwitcher();
  }, 1000);
});


refs.stopBtn.addEventListener('click', () => {
  toggleDisabledAttribute();
  clearInterval(timerId);
});

const bodyColorSwitcher = () => {
  const randomColor = randomIntegerFromInterval(0, colors.length - 1);
  refs.body.style.backgroundColor = colors[randomColor];
};

const toggleDisabledAttribute = () => {
  refs.startBtn.toggleAttribute('disabled');
  refs.stopBtn.toggleAttribute('disabled');  
};

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};