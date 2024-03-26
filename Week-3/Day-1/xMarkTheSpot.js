const xMarksTheSpot = (input) => {
  let flattenedArr = input.flat();
  let moreThanOneX =
    flattenedArr.filter((element) => element === "x").length > 1;

  if (input.length === 0 || !flattenedArr.includes("x") || moreThanOneX)
    return [];

  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === "x") return [i, j];
    }
  }
};
