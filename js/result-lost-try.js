import {createElementByTemplate, insertInterface} from './util';
import WELCOME_ELEMENT from './welcome';

const HTML = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Какая жалость!</h2>
    <div class="main-stat">У вас закончились все попытки.<br>Ничего, повезёт в следующий раз!</div>
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;

const RESULT_LOST_TRY_ELEMENT = createElementByTemplate(HTML);
const BTN_RESTART = RESULT_LOST_TRY_ELEMENT.querySelector(`.main-replay`);

BTN_RESTART.addEventListener(`click`, () => insertInterface(WELCOME_ELEMENT));

export default RESULT_LOST_TRY_ELEMENT;
