/**
 * @param {string} template разметка интерфейса
 * @return {Element} интерфейс в виде ноды
 */
const createElementByTemplate = (template) => {
  const temporaryWrap = document.createElement(`template`);
  temporaryWrap.innerHTML = template;
  return temporaryWrap.content.cloneNode(true);
};

export default createElementByTemplate;
