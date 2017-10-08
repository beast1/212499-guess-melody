import {createElementByTemplate, insertInterface} from './util';
import RESULT_WIN_ELEMENT from './result-win';
import RESULT_LOST_TIME_ELEMENT from './result-lost-time';
import RESULT_LOST_TRY_ELEMENT from './result-lost-try';

const HTML                = `
<section class="main main--level main--level-genre">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">05</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">00</span>
      </div>
    </svg>
    <div class="main-mistakes">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
      <img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">
    </div>

    <div class="main-wrap">
      <h2 class="title">Выберите инди-рок треки</h2>
      <form class="genre">
        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--pause"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-1">
          <label class="genre-answer-check" for="a-1"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-2">
          <label class="genre-answer-check" for="a-2"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-3">
          <label class="genre-answer-check" for="a-3"></label>
        </div>

        <div class="genre-answer">
          <div class="player-wrapper">
            <div class="player">
              <audio></audio>
              <button class="player-control player-control--play"></button>
              <div class="player-track">
                <span class="player-status"></span>
              </div>
            </div>
          </div>
          <input type="checkbox" name="answer" value="answer-1" id="a-4">
          <label class="genre-answer-check" for="a-4"></label>
        </div>

        <button class="genre-answer-send" type="submit">Ответить</button>
      </form>
    </div>
  </section>`;
const LEVEL_GENRE_ELEMENT = createElementByTemplate(HTML);
const BTNS_ANSWER          = Array.from(LEVEL_GENRE_ELEMENT.querySelectorAll(`.genre-answer-check`));
const BTNS_ANSWER_INPUT    = Array.from(LEVEL_GENRE_ELEMENT.querySelectorAll(`.genre-answer input[name='answer']`));
const BTNS_ANSWER_CONFIRM    = LEVEL_GENRE_ELEMENT.querySelector(`.genre-answer-send`);

function validateBtnsAnswer() {
  const BTNS_ANSWER_INPUT_CHECKED = BTNS_ANSWER_INPUT.filter((BTN_ANSWER_INPUT) => BTN_ANSWER_INPUT.checked !== false ? true : false);
  console.log(BTNS_ANSWER_INPUT_CHECKED);
  if (BTNS_ANSWER_INPUT_CHECKED.length > 0) {
    BTNS_ANSWER_CONFIRM.removeAttribute(`disabled`);
  } else {
    BTNS_ANSWER_CONFIRM.setAttribute(`disabled`, ``);
  }
//  for (let i = 0; i < BTNS_ANSWER.length; i++) {
//    console.log(btnsAnswerInput[i].checked);
//    if (BTNS_ANSWER_INPUT[i].checked !== false) {
//      BTNS_ANSWER_CONFIRM.removeAttribute(`disabled`);
//    }
//  }
}

function getRandomResult() {
  const RANDOM_RESULT_INDEX = Math.floor(Math.random() * (3 - 0) + 0);
  const RESULTS = [RESULT_WIN_ELEMENT, RESULT_LOST_TIME_ELEMENT, RESULT_LOST_TRY_ELEMENT];
  return RESULTS[RANDOM_RESULT_INDEX];
}

validateBtnsAnswer();

BTNS_ANSWER.forEach(function (BTN_ANSWER) {
  BTN_ANSWER.addEventListener(`click`, validateBtnsAnswer);
});
BTNS_ANSWER_CONFIRM.addEventListener(`click`, () => insertInterface(getRandomResult()));

export default LEVEL_GENRE_ELEMENT;
