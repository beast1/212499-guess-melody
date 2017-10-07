const TEMPLATE = document.querySelector(`#templates`).content;
const INTERFACES = Array.from(TEMPLATE.querySelectorAll(`.main`));
const PREV_INTERFACE_KEYCODE = 37;
const NEXT_INTERFACE_KEYCODE = 39;

/**
 * Смена действующего интерфейса по переданному направлению
 * @param {string} direction направление в которм измениться интерфейс
 */
function createInsertNextInterface() {
  const APP = document.querySelector(`.app`);
  const len = INTERFACES.length - 1;
  let num = 0;
  return function (direction) {
    switch (direction) {
      case `next`:
        num += 1;
        break;
      case `prev`:
        num -= 1;
        break;
    }

    if (num < 0) {
      num = 0;
    }
    if (num > len) {
      num = len;
    }

    APP.innerHTML = INTERFACES[num].outerHTML;
  };
}

const insertNextInterface = createInsertNextInterface();

/**
 * Переключение между интерфейсами по нажатию на клавиши
 * @param {object} e событие
 */
function switchInterface(e) {
  if (e.keyCode === PREV_INTERFACE_KEYCODE && e.altKey) {
    insertNextInterface(`prev`);
    return;
  }
  if (e.keyCode === NEXT_INTERFACE_KEYCODE && e.altKey) {
    insertNextInterface(`next`);
  }
}

insertNextInterface(0);

document.addEventListener(`keydown`, switchInterface);

