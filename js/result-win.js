import {createElementByTemplate, insertInterface} from './util';
import WELCOME_ELEMENT from './welcome';

const HTML = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>

    <h2 class="title">Вы настоящий меломан!</h2>
    <div class="main-stat">За&nbsp;3&nbsp;минуты и 25&nbsp;секунд
      <br>вы&nbsp;набрали 12 баллов (8 быстрых)
      <br>совершив 3 ошибки</div>
    <span class="main-comparison">Вы заняли 2 место из 10. Это&nbsp;лучше чем у&nbsp;80%&nbsp;игроков</span>
    <span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>
  </section>`;

const RESULT_WIN_ELEMENT = createElementByTemplate(HTML);
const BTN_RESTART         = RESULT_WIN_ELEMENT.querySelector(`.main-replay`);

BTN_RESTART.addEventListener(`click`, () => insertInterface(WELCOME_ELEMENT));

export default RESULT_WIN_ELEMENT;