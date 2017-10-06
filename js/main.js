const TEMPLATE = document.querySelector(`#templates`).content;
const WINDOWS = Array.from(TEMPLATE.querySelectorAll(`.main`));
const APP = document.querySelector(`.app`);
const PREV = 37;
const NEXT = 39;
let curWindowNum = 0;

function replaceWindows(num) {
  APP.innerHTML = WINDOWS[num].outerHTML;
  curWindowNum = num;
}

function switchWindow(e) {
  if (e.keyCode === PREV && e.altKey) {
    if (curWindowNum !== 0) {
      replaceWindows(curWindowNum - 1);
      return;
    }
  }
  if (e.keyCode === NEXT && e.altKey) {
    if (curWindowNum !== WINDOWS.length - 1) {
      replaceWindows(curWindowNum + 1);
      return;
    }
  }
}

replaceWindows(0);

document.addEventListener(`keydown`, switchWindow);

