/**
 * @param {string} template разметка интерфейса
 * @return {Element} интерфейс в виде ноды
 */
const createElementByTemplate = (template) => {
  const temporaryWrap = document.createElement(`div`);
  temporaryWrap.innerHTML = template;
  return temporaryWrap.querySelector(`template`);
};


function createInsertInterface() {
  const app = document.querySelector(`.app`);
  return function (element) {
    app.innerHTML = ``;
    app.appendChild(element);
  };
}
const insertInterface = createInsertInterface();

export {createElementByTemplate, insertInterface};
