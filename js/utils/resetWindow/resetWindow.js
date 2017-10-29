const resetWindow = (selector = `.app`) => {
  document.querySelector(selector).innerHTML = ``;
};

export default resetWindow;
