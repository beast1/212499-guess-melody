import createElementByTemplate from './utils/createElementByTemplate/createElementByTemplate';
import insertInterface from './utils/insertInterface/insertInterface';
import createGame from './game/game';
import createHeader from './game/header';
import createLevel from './game/level';
import resetWindow from './utils/resetWindow/resetWindow';

import {initialState, levels} from './data';

const createWelcomeElement = () => {
  const html = `
  <section class="main main--welcome">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <button class="main-play">Начать игру</button>
    <h2 class="title main-title">Правила игры</h2>
    <p class="text main-text">
      Правила просты — за 5 минут ответить на все вопросы.<br>
      Ошибиться можно 3 раза.<br>
      Удачи!
    </p>
  </section>`;
  const welcomeElement = createElementByTemplate(html);
  const btnPlay = welcomeElement.querySelector(`.main-play`);

  btnPlay.addEventListener(`click`, () => {
    resetWindow();
    insertInterface(createGame(initialState, levels[initialState.level]));
    insertInterface(createHeader(initialState), `.main--level`);
    insertInterface(createLevel(levels), `.main--level`);
  });

  return welcomeElement;
};

export default createWelcomeElement;
