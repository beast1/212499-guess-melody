const getUserPoints = (answers) => {
  let USER_POINTS = answers.reduce((previousValue, currentValue) => {
    let getAnswerPoints = () => {
      if (currentValue.passed === true) {
        if (currentValue.time < 30) {
          return 2;
        } else {
          return 1;
        }
      } else {
        return -2;
      }
    };
    return previousValue + getAnswerPoints();
  }, 0);
  return USER_POINTS;
};

export default getUserPoints;
