import {createElementByTemplate, insertInterface} from './util';
import levelArtistElement from './level-artist';

const html = `
  <template class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты&nbsp;— за&nbsp;5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </template>`;
const welcomeElement = createElementByTemplate(html);
const btnPlay = welcomeElement.querySelector(`.main-play`);

btnPlay.addEventListener(`click`, () => insertInterface(levelArtistElement));

export default welcomeElement;
