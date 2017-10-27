const getUserResult = (otherGamesResults, currentGameResult) => {
  if (currentGameResult.REST_ATTEMPTS === 0) {
    return `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`;
  } else if (currentGameResult.REST_TIME === 0) {
    return `«Время вышло! Вы не успели отгадать все мелодии»`;
  } else {
    const getUserPlace = () => {
      const reverseOtherGamesResults = otherGamesResults.sort((a, b) => b - a);
      for (let i = 0; i < reverseOtherGamesResults.length; i++) {
        if (reverseOtherGamesResults[i] <= currentGameResult.POINTS) {
          return i + 1;
        }
      }
      return otherGamesResults.length + 1;
    };
    const getUsersNumber = () => {
      return otherGamesResults.length + 1;
    };
    const getUserRateSuccess = () => {
      const number = getUsersNumber();
      const place = getUserPlace();
      return `${(number - place) / number * 100}%`;
    };
    return `«Вы заняли ${getUserPlace()} место из ${getUsersNumber()} игроков. Это лучше чем у ${getUserRateSuccess()}»`;
  }
};

export default getUserResult;
