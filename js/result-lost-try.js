import createElementByTemplate from './utils/createElementByTemplate/createElementByTemplate';
import insertInterface from './utils/insertInterface/insertInterface';
import createWelcomeElement from './welcome';

const createResultLostTryElement = () => {
  const html = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;
  const resultLostTryElement = createElementByTemplate(html);
  const btnRestart = resultLostTryElement.querySelector(`.main-replay`);

  btnRestart.addEventListener(`click`, () => insertInterface(createWelcomeElement()));

  return resultLostTryElement;
};

export default createResultLostTryElement;
