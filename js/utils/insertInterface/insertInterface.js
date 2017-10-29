const insertInterface = (element, selector = `.app`) => {
  document.querySelector(selector).appendChild(element);
};

export default insertInterface;
