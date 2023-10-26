function points(games) {
  // -- Create an "totalPoints" variable
  let totalPoints = 0;
  // -- Map and split by colon for each element
  games.forEach((points) => {
    // -- While on each element, add check if x > y, x < y or x === y, then perfom relevant actions
    const arrayOfXAndY = points.split(":");
    const pointX = parseInt(arrayOfXAndY[0]);
    const pointY = parseInt(arrayOfXAndY[1]);
    if (pointX > pointY) totalPoints += 3;
    else if (pointX === pointY) totalPoints += 1;
  });
  return totalPoints;
}
// 1. How can we restate the problem, in your own words?
// -- x - team's score, y - opponents score

// 2. What are the inputs that go into the problem?
// -- Array

// 3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)
// -- Input: ["3:1", "2:2", "0:1", ...] --> Output: return number of x points

// 4. Break down the problem (pseudocode)
// -- Create an "totalPoints" variable
// -- Map and split by colon for each element
// -- While on each element, add check if x > y, x < y or x === y, then perform relevant actions

// 5. refactor the solved problem (if possible)
