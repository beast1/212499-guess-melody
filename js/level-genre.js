import {createElementByTemplate, insertInterface} from './util';
import resultWinElement from './result-win';
import resultLostTimeElement from './result-lost-time';
import resultLostTryElement from './result-lost-try';

const html = `
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
const levelGenreElement = createElementByTemplate(html);
const btnsAnswer = Array.from(levelGenreElement.querySelectorAll(`.genre-answer-check`));
const btnsAnswerInputs = Array.from(levelGenreElement.querySelectorAll(`.genre-answer input[name='answer']`));
const btnAnswerConfirm = levelGenreElement.querySelector(`.genre-answer-send`);

function validateBtnsAnswer() {
  btnAnswerConfirm.setAttribute(`disabled`, ``);
  const btnsAnswerInputsChecked = btnsAnswerInputs.filter((btnsAnswerInput) => btnsAnswerInput.checked !== false ? true : false);
  if (btnsAnswerInputsChecked.length > 0) {
    btnAnswerConfirm.removeAttribute(`disabled`);
  }
//  for (let i = 0; i < btnsAnswer.length; i++) {
//    console.log(btnsAnswerInput[i].checked);
//    if (btnsAnswerInputs[i].checked !== false) {
//      btnAnswerConfirm.removeAttribute(`disabled`);
//    }
//  }
}

function getRandomResult() {
  const RANDOM_RESULT_INDEX = Math.floor(Math.random() * (3 - 0) + 0);
  const RESULTS = [resultWinElement, resultLostTimeElement, resultLostTryElement];
  return RESULTS[RANDOM_RESULT_INDEX];
}

validateBtnsAnswer();

btnsAnswer.forEach(function (btnAnswer) {
  btnAnswer.addEventListener(`click`, validateBtnsAnswer);
});
btnAnswerConfirm.addEventListener(`click`, () => insertInterface(getRandomResult()));

export default levelGenreElement;
