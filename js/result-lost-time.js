import {createElementByTemplate, insertInterface} from './util';
import WELCOME_ELEMENT from './welcome';

const HTML = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Увы и ах!</h2>
    <div class="main-stat">Время вышло!<br>Вы не успели отгадать все мелодии</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const RESULT_LOST_TIME_ELEMENT = createElementByTemplate(HTML);
const BTN_RESTART = RESULT_LOST_TIME_ELEMENT.querySelector(`.main-replay`);

BTN_RESTART.addEventListener(`click`, () => insertInterface(WELCOME_ELEMENT));

export default RESULT_LOST_TIME_ELEMENT;
