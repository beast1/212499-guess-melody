import createElementByTemplate from './../utils/createElementByTemplate/createElementByTemplate';
import resetWindow from './../utils/resetWindow/resetWindow';
import insertInterface from './../utils/insertInterface/insertInterface';
import createResult from './../result';
import {initialState, levels} from './../data';

const levelTemplate = (level) => `
  <div class="main-wrap">
    <h2 class="title main-title">Кто исполняет эту песню?</h2>
    <div class="player-wrapper">
      <div class="player">
        <audio src="${level.audioSrc}"></audio>
        <button class="player-control player-control--play"></button>
        <div class="player-track">
          <span class="player-status"></span>
        </div>
      </div>
    </div>
    <form class="main-list">
      ${Array.from(level.answers).map((answer, i) => {
        return `
          <div class="main-answer-wrapper">
            <input class="main-answer-r" type="radio" id="answer-${i}" name="answer" value="val-${i}"/>
            <label class="main-answer" for="answer-${i}">
              <img class="main-answer-preview" src="${answer.img}"
                   alt="${answer.artist}" width="134" height="134">
              ${answer.artist}
            </label>
          </div>`;
      }).join(``)}
    </form>
  </div>`;

const createLevel = (screens, LEVEL_COUNT = initialState.level) => {
  const levelElement = createElementByTemplate(levelTemplate(screens[LEVEL_COUNT]));
  const btnPlay = levelElement.querySelector(`.player-control--play`);
  const audio = levelElement.querySelector(`audio`);
  let isAudioPlayed = false;
  const btnsAnswer = Array.from(levelElement.querySelectorAll(`.main-answer`));
  const toogleAudio = () => {
    if (isAudioPlayed) {
      audio.pause();
    } else {
      audio.play();
    }
    btnPlay.classList.toggle(`player-control--play`);
    btnPlay.classList.toggle(`player-control--pause`);
    isAudioPlayed = !isAudioPlayed;
  };
  btnPlay.addEventListener(`click`, () => toogleAudio());
  btnsAnswer.forEach((btnAnswer) => btnAnswer.addEventListener(`click`, () => {
    LEVEL_COUNT++;
    if (LEVEL_COUNT < screens.length) {
      const oldLevel = document.querySelector(`.main-wrap`);
      oldLevel.parentNode.replaceChild(createLevel(levels, LEVEL_COUNT), oldLevel);
    } else {
      resetWindow();
      insertInterface(createResult());
    }
  }));

  return levelElement;
};

export default createLevel;
