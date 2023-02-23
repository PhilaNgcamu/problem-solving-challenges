let countDown = function f(n) {
  let nextNumber = n - 1;
  if (nextNumber === 1) {
    console.log(nextNumber);
  } else {
    console.log(nextNumber);
    countDown(nextNumber);
  }
};
let newYearCountDown = countDown;
countDown = null;
newYearCountDown(10);
