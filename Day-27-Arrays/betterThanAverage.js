// Codewars > How good are you really?
function betterThanAverage(classPoints, yourPoints) {
  const average =
    classPoints.reduce((sum, point) => sum + point, 0) / classPoints.length;
  return yourPoints > average;
}
