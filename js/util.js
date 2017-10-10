/**
 * @param {string} template разметка интерфейса
 * @return {Element} интерфейс в виде ноды
 */
const createElementByTemplate = (template) => {
  const TEMPORARY_WRAP = document.createElement(`div`);
  TEMPORARY_WRAP.innerHTML = template;
  return TEMPORARY_WRAP.querySelector(`template`);
};


function createInsertInterface() {
  const APP = document.querySelector(`.app`);
  return function (element) {
    APP.innerHTML = ``;
    APP.appendChild(element);
  };
}
const insertInterface = createInsertInterface();

export {createElementByTemplate, insertInterface};
