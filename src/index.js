import './style/style.css';
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

