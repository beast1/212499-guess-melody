import assert from 'assert';
import getTimer from './getTimer';

const valueForMyTimer = 5;
const myTimer = getTimer(valueForMyTimer);

describe(`getUserScore на выходе отдаёт кол-во набранных очков`, () => {
  it(`При вызове метода tick() возвращает новый объект с value меньше на 1`, () => {
    assert(myTimer.tick().value === valueForMyTimer - 1);
  });
});
