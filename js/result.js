import createElementByTemplate from './utils/createElementByTemplate/createElementByTemplate';
import resetWindow from './utils/resetWindow/resetWindow';
import insertInterface from './utils/insertInterface/insertInterface';
import getUserResult from './utils/getUserResult/getUserResult';
import createWelcomeElement from './welcome';

const otherGamesResults = [4, 5, 8, 10, 11, 12, 14, 15, 19];
const currentGameResult3 = {
  POINTS: -19,
  REST_ATTEMPTS: 2,
  REST_TIME: 0
};


const createResult = () => {
  const html = `
  <section class="main main--result">
    <section class="logo" title="Угадай мелодию"><h1>Угадай мелодию</h1></section>
    <!--IF ATTEMPTS-->
    <h2 class="title">Какая жалость!</h2>
    <!--IF TIME-->
    <!--<h2 class="title">Увы и ах!</h2>-->
    <!--IF WIN-->
    <!--<h2 class="title">Вы настоящий меломан!</h2>-->
    <!--<div class="main-stat">За 3 минуты и 25 секунд-->
      <!--<br>вы набрали 12 баллов (8 быстрых)-->
      <!--<br>совершив 3 ошибки-->
    <!--</div>-->
    <div class="main-stat">${getUserResult(otherGamesResults, currentGameResult3)}</div>
    <!--IF WIN-->
    <!--<span role="button" tabindex="0" class="main-replay">Сыграть ещё раз</span>-->
    <!--ELSE-->
    <span role="button" tabindex="0" class="main-replay">Попробовать ещё раз</span>
  </section>`;
  const resultLostTryElement = createElementByTemplate(html);
  const btnRestart = resultLostTryElement.querySelector(`.main-replay`);

  btnRestart.addEventListener(`click`, () => {
    resetWindow();
    insertInterface(createWelcomeElement());
  });

  return resultLostTryElement;
};

export default createResult;
