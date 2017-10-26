const getTimer = (value) => {
  return {
    value: value,
    tick() {
      if (value - 1 === 0) {
        return `Время вышло`;
      } else {
        return getTimer(value - 1);
      }
    }
  };
};

export default getTimer;
