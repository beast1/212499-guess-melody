import {createElementByTemplate, insertInterface} from './util';
import createLevelArtistElement from './level-artist';

const createWelcomeElement = () => {
  const html = `
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
  const welcomeElement = createElementByTemplate(html);
  const btnPlay = welcomeElement.querySelector(`.main-play`);

  btnPlay.addEventListener(`click`, () => insertInterface(createLevelArtistElement()));

  return welcomeElement;
};

export default createWelcomeElement;
