//Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there. (As continued on Hackerrank)

function breakingRecords(scores) {
  let lowest = [scores[0]];
  let highest = [scores[0]];
  let highCount = 0;
  let lowCount = 0;

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > highest[highest.length - 1]) {
      highest.push(scores[i]);
      highCount++;
    } else if (scores[i] < lowest[lowest.length - 1]) {
      lowest.push(scores[i]);
      lowCount++;
    }
  }
  return [highCount, lowCount];
}
