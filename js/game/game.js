import createElementByTemplate from './../utils/createElementByTemplate/createElementByTemplate';

const createGame = () => {
  const gameHtml = `
    <section class="main main--level main--level-artist"></section>`;
  const game = createElementByTemplate(gameHtml);
  return game;
};

export default createGame;
