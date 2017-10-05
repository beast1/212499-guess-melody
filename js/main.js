const t = document.querySelector(`#templates`).content;
const windows = [...Array.from(t.querySelectorAll(`section`))];
let curWindowNum = 0;

function replaceWindows(num) {
  const app = document.querySelector(`.app`);
  app.innerHTML = windows[num].outerHTML;
  curWindowNum = num;
}

replaceWindows(0);

const prev = 37;
const next = 39;

function switchWindow(e) {
  if (e.keyCode === prev && e.altKey) {
    if (curWindowNum !== 0) {
      replaceWindows(curWindowNum - 1);
    }
  }
  if (e.keyCode === next && e.altKey) {
    if (curWindowNum !== windows.length) {
      replaceWindows(curWindowNum + 1);
    }
  }
}
document.addEventListener(`keydown`, switchWindow);

