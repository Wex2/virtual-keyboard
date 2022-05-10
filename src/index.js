import './style.css';
import createDomElement from './createDomElement';
import Keyboard from './Keyboard';

const TITLE = 'Виртуальная клавиатура';
const DESCRIPTION = 'Клавиатура создана в операционной системе Windows';
const LANGUAGE = 'Для переключения языка комбинация: ctrl + alt';
const keyboard = new Keyboard();

const container = createDomElement('div', '', 'container');
container.append(createDomElement('h1', TITLE, 'title'));
container.append(createDomElement('textarea', '', 'textarea'));
container.append(keyboard.createKeyboard());
container.append(createDomElement('p', DESCRIPTION, 'description'));
container.append(createDomElement('p', LANGUAGE, 'language'));
document.body.append(container);

document.addEventListener('keydown', (event) => {
  const button = document.querySelector(`[data-code=${event.code}]`);
  if (button) {
    button.classList.add('active');
    keyboard.pressKey(event, button, event.code);
  }
});

document.addEventListener('keyup', (event) => {
  const button = document.querySelector(`[data-code=${event.code}]`);
  if (button) {
    button.classList.remove('active');
    if (event.code === 'ShiftLeft' || event.code === 'ShiftRight') {
      keyboard.removeShiftStyle(event);
      keyboard.updateKeyboard(event);
    }
  }
});

document.querySelector('.keyboard').addEventListener('mousedown', (event) => {
  if (event.target.closest('.key')) {
    const button = event.target.closest('.key');
    if (button.dataset.code === 'ShiftLeft'
      || button.dataset.code === 'ShiftRight') {
      keyboard.shift = !keyboard.shift;
    }
    button.classList.add('active');
    keyboard.pressKey(event, button, button.dataset.code);
  }
});
document.querySelector('.keyboard').addEventListener('mouseup', (event) => {
  if (event.target.closest('.key')) {
    const button = event.target.closest('.key');
    button.classList.remove('active');
    if (button.dataset.code === 'ShiftLeft'
      || button.dataset.code === 'ShiftRight') {
      keyboard.shift = !keyboard.shift;
      keyboard.pressKey(event, button, button.dataset.code);
    }
  }
});
document.querySelector('.keyboard').addEventListener('mouseover', (event) => {
  if (event.target.closest('.key')) {
    const button = event.target.closest('.key');
    button.classList.add('hover');
  }
});
document.querySelector('.keyboard').addEventListener('mouseout', (event) => {
  if (event.target.closest('.key')) {
    const button = event.target.closest('.key');
    button.classList.remove('hover', 'active');
  }
});
