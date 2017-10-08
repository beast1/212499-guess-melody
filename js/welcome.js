import {createElementByTemplate, insertInterface} from './util';
import LEVEL_ARTIST_ELEMENT from './level-artist';

const HTML            = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;
const WELCOME_ELEMENT = createElementByTemplate(HTML);
const BTN_PLAY         = WELCOME_ELEMENT.querySelector(`.main-play`);

BTN_PLAY.addEventListener(`click`, () => insertInterface(LEVEL_ARTIST_ELEMENT));

export default WELCOME_ELEMENT;
