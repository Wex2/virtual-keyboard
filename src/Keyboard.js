import createDomElement from './createDomElement';
import keyData from './keyData.json';

export default class Keyboard {
  constructor() {
    this.lang = 'en';
    this.caps = 'off';
    this.shift = false;
  }

  pressKey(event, button, code) {
    let text = '';
    const textarea = document.querySelector('textarea');
    event.preventDefault();
    textarea.focus();
    if (!button.dataset.noType) text = button.textContent;
    if (code === 'CapsLock') this.changeCapsLock(event);
    if ((code === 'AltLeft' && (event.ctrlKey))
      || (code === 'AltRight' && (event.ctrlKey))
      || (code === 'ControlLeft' && event.altKey)
      || (code === 'ControlRight' && event.altKey)) {
      this.changeLanguage(event);
    }
    if (code === 'ShiftLeft' || code === 'ShiftRight') this.updateKeyboard(event);
    if (code === 'Tab') text = '\t';
    if (code === 'Backspace') text = '-1';
    if (code === 'Delete') text = '+1';
    if (code === 'Enter') text = '\n';
    if (text) {
      let cursor = textarea.selectionStart;
      let textBeforeCursor = textarea.value.substring(0, cursor);
      let textAfterCursor = textarea.value.substring(textarea.selectionEnd);
      if (text === '-1') {
        text = '';
        textBeforeCursor = textBeforeCursor.slice(0, -1);
        cursor -= (cursor > 0) ? 2 : 1;
      }
      if (text === '+1') {
        text = '';
        textAfterCursor = textAfterCursor.slice(1);
        cursor -= 1;
      }
      textarea.value = textBeforeCursor + text + textAfterCursor;
      textarea.setSelectionRange(cursor + 1, cursor + 1);
    }
  }

  languageCheck() {
    if (localStorage.getItem('language')) {
      this.lang = localStorage.getItem('language');
    } else {
      localStorage.setItem('language', this.lang);
    }
  }

  changeLanguage(event) {
    if (this.lang === 'en') {
      this.lang = 'ru';
    } else {
      this.lang = 'en';
    }
    localStorage.setItem('language', this.lang);
    this.updateKeyboard(event);
  }

  changeCapsLock(event) {
    const caps = document.querySelector('.capslock');
    if (this.caps === 'on') {
      this.caps = 'off';
      caps.classList.remove('caps');
    } else {
      this.caps = 'on';
      caps.classList.add('caps');
    }
    this.updateKeyboard(event);
  }

  updateKeyboard(event) {
    const { lang } = this;
    if (event.shiftKey || this.shift) {
      document.querySelectorAll('.key').forEach((e) => {
        if (e.dataset[`${lang}Shift`]) {
          if (this.caps === 'on') {
            e.innerHTML = e.dataset[`${lang}Shift`].toLowerCase();
          } else e.innerHTML = e.dataset[`${lang}Shift`];
        } else if (e.dataset[lang]) e.innerHTML = e.dataset[lang];
      });
    } else {
      document.querySelectorAll('.key').forEach((e) => {
        if (e.dataset[lang]) {
          if (this.caps === 'on' && !(event.shiftKey || this.shift)) {
            e.innerHTML = e.dataset[lang].toUpperCase();
          } else e.innerHTML = e.dataset[lang];
        }
      });
    }
  }

  createKeyboard() {
    const keyboard = createDomElement('div', '', 'keyboard');
    this.languageCheck();
    for (let i = 0; i < keyData.length; i += 1) {
      const row = createDomElement('div', '', 'row');
      keyData[i].forEach((e) => {
        const keyLabel = (e.key.ru && e.key.en) ? e.key[this.lang] : e.key;
        const key = createDomElement('div', keyLabel, 'key');
        if (e.class) key.classList.add(e.class);
        key.dataset.code = e.code;
        if (e.key.ru && e.key.en) {
          key.dataset.ru = e.key.ru;
          key.dataset.en = e.key.en;
        }
        if (e.shift) {
          key.dataset.ruShift = e.shift.ru;
          key.dataset.enShift = e.shift.en;
        }
        if (e.noType) {
          key.dataset.noType = 'true';
        }
        row.append(key);
      });
      keyboard.append(row);
    }
    return keyboard;
  }

  removeShiftStyle(event) {
    if (this.shift) {
      this.shift = !this.shift;
      document.querySelector('.ShiftLeft').classList.remove('active');
      document.querySelector('.ShiftRight').classList.remove('active');
      this.updateKeyboard(event);
    }
  }
}
