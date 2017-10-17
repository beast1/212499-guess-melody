import {createElementByTemplate, insertInterface} from './util';
import createWelcomeElement from './welcome';

const createResultLostTimeElement = () => {
  const html = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;
  const resultLostTimeElement = createElementByTemplate(html);
  const btnRestart = resultLostTimeElement.querySelector(`.main-replay`);

  btnRestart.addEventListener(`click`, () => insertInterface(createWelcomeElement()));

  return resultLostTimeElement;
};
export default createResultLostTimeElement;
