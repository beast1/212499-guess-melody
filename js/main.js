const TEMPLATE = document.querySelector(`#templates`).content;
const INTERFACES = Array.from(TEMPLATE.querySelectorAll(`.main`));
const APP = document.querySelector(`.app`);
const PREV_INTERFACE_KEYCODE = 37;
const NEXT_INTERFACE_KEYCODE = 39;
let curWindowNum = 0;

/**
 * Переключение между игровыми интерфейсами
 * @param {number} num порядковый номер интерфейса
 */
function replaceWindows(num) {
  APP.innerHTML = INTERFACES[num].outerHTML;
  curWindowNum = num;
}

/**
 * Переключение между интерфейсами по нажатию на клавиши
 * @param {object} e событие
 */
function switchWindow(e) {
  if (e.keyCode === PREV_INTERFACE_KEYCODE && e.altKey) {
    if (curWindowNum !== 0) {
      replaceWindows(curWindowNum - 1);
      return;
    }
  }
  if (e.keyCode === NEXT_INTERFACE_KEYCODE && e.altKey) {
    if (curWindowNum !== INTERFACES.length - 1) {
      replaceWindows(curWindowNum + 1);
    }
  }
}

replaceWindows(0);

document.addEventListener(`keydown`, switchWindow);

