/**
 * @param {string} template разметка интерфейса
 * @return {Element} интерфейс в виде ноды
 */
const createElementByTemplate = (template) => {
  const temporaryWrap = document.createElement(`template`);
  temporaryWrap.innerHTML = template;
  return temporaryWrap.content.cloneNode(true);
};


const createInsertInterface = () => {
  const app = document.querySelector(`.app`);
  return (element) => {
    app.innerHTML = ``;
    app.appendChild(element);
  };
};
const insertInterface = createInsertInterface();

export {createElementByTemplate, insertInterface};
