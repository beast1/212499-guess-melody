const getUserResult = (otherGamesResults, currentGameResult) => {
  if (currentGameResult.REST_ATTEMPTS === 0) {
    return `«У вас закончились все попытки. Ничего, повезёт в следующий раз!»`;
  } else if (currentGameResult.REST_TIME === 0) {
    return `«Время вышло! Вы не успели отгадать все мелодии»`;
  } else {
    return `«Вы заняли ${getUserPlace()} место из ${getUsersNumber()} игроков. Это лучше чем у ${getUserRateSucess()}»`;
  }
};

export default getUserResult;
