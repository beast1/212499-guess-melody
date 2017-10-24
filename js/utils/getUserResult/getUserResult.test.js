import assert from 'assert';
import getUserResult from './getUserResult';

const otherGamesResults = [];
const currentGameResult1 = {
  POINTS: 20,
  REST_ATTEMPTS: 3,
  REST_TIME: 100
};
const currentGameResult2 = {
  POINTS: -19,
  REST_ATTEMPTS: 1,
  REST_TIME: 0
};
const currentGameResult3 = {
  POINTS: -19,
  REST_ATTEMPTS: 0,
  REST_TIME: 150
};

describe(`getUserScore на выходе отдаёт кол-во набранных очков`, () => {
  it(`Если игрок выиграл, то его результат должен быть выведен в виде фразы: Вы заняли 1-ое место из 10 игроков. Это лучше чем у 100%`, () => {
    assert(getUserResult(otherGamesResults, currentGameResult1) === `«Вы заняли 1-ое место из 10 игроков. Это лучше чем у 100%»`);
  });

  it(`Если игрок проиграл и у него закончилось время, то должна быть выведена фраза: «Время вышло! Вы не успели отгадать все мелодии»`, () => {
    assert(getUserResult(otherGamesResults, currentGameResult2) === `«Время вышло! Вы не успели отгадать все мелодии»`);
  });

  it(`Если игрок проиграл и у него закончились попытки, то должна быть выведена фраза: «У вас закончились все попытки. Ничего, повезёт в следующий раз!»`, () => {
    assert(getUserResult(otherGamesResults, currentGameResult3) === `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`);
  });
});
