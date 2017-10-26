import assert from 'assert';
import getUserPoints from './getUserPoints';

const answers1 = [
  {passed: false, time: 35},
  {passed: false, time: 45},
  {passed: false, time: 35},
  {passed: false, time: 35},
  {passed: false, time: 45},
  {passed: false, time: 45},
  {passed: false, time: 32},
  {passed: false, time: 35},
  {passed: false, time: 35},
  {passed: false, time: 35}
];
const answers2 = [
  {passed: true, time: 25},
  {passed: true, time: 25},
  {passed: true, time: 25},
  {passed: true, time: 25},
  {passed: true, time: 25},
  {passed: true, time: 25},
  {passed: true, time: 12},
  {passed: true, time: 25},
  {passed: true, time: 25},
  {passed: true, time: 25}
];
const answers3 = [
  {passed: true, time: 35},
  {passed: true, time: 45},
  {passed: true, time: 35},
  {passed: true, time: 35},
  {passed: true, time: 45},
  {passed: true, time: 45},
  {passed: true, time: 32},
  {passed: true, time: 35},
  {passed: true, time: 35},
  {passed: false, time: 25}
];

describe(`getUserScore на выходе отдаёт кол-во набранных очков`, () => {
  it(`Если игрок ответил неправильно на первые три вопроса, Ф вернет -4 или меньше(т.к. остальные автоматически неправильные)`, () => {
    assert(getUserPoints(answers1, 0) <= -4);
  });

  it(`Если игрок ответил на все вопросы правильно и потратил на каждый меньше 30 сек, Ф вернет 20`, () => {
    assert(getUserPoints(answers2, 3) === 20);
  });

  it(`Если игрок ответил на 9 вопросов правильно и потратил больше 30 сек, Ф вернет 7`, () => {
    assert(getUserPoints(answers3, 3) === 7);
  });
});
