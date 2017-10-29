import createElementByTemplate from './utils/createElementByTemplate/createElementByTemplate';
import resetWindow from './utils/resetWindow/resetWindow';
import insertInterface from './utils/insertInterface/insertInterface';
import createResult from './result';

const createLevelArtistElement = (headerState, levelState) => {
  const html = `
  <section class="main main--level main--level-artist">
    <svg xmlns="http://www.w3.org/2000/svg" class="timer" viewBox="0 0 780 780">
      <circle
        cx="390" cy="390" r="370"
        class="timer-line"
        style="filter: url(.#blur); transform: rotate(-90deg) scaleY(-1); transform-origin: center"></circle>

      <div class="timer-value" xmlns="http://www.w3.org/1999/xhtml">
        <span class="timer-value-mins">0</span><!--
        --><span class="timer-value-dots">:</span><!--
        --><span class="timer-value-secs">${headerState.time}</span>
      </div>
    </svg>
    <div class="main-mistakes">
      ${new Array(3 - headerState.lives)
      .fill(`<img class="main-mistake" src="img/wrong-answer.png" width="35" height="49">`)
      .join(``)}
    </div>

    <div class="main-wrap">
      <h2 class="title main-title">Кто исполняет эту песню?</h2>
      <div class="player-wrapper">
        <div class="player">
          <audio src="${levelState.audioSrc}"></audio>
          <button class="player-control player-control--play"></button>
          <div class="player-track">
            <span class="player-status"></span>
          </div>
        </div>
      </div>
      <form class="main-list">
        ${Array.from(levelState.answers).map((answer, i) => {
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
    </div>
  </section>`;
  const levelArtistElement = createElementByTemplate(html);
  const btnPlay = levelArtistElement.querySelector(`.player-control--play`);
  const audio = levelArtistElement.querySelector(`audio`);
  let isAudioPlayed = false;
  const btnsAnswer = Array.from(levelArtistElement.querySelectorAll(`.main-answer`));
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
    resetWindow();
    insertInterface(createResult());
  }));

  return levelArtistElement;
};

export default createLevelArtistElement;
