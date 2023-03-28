const array1 = [1, 2, 3, 4, 5];

function number(accumulator, value, index) {
  console.log(
    `Accumulator: ${accumulator} at index ${index} and the current value ${value}`
  );
  const a = accumulator + value;
  return a;
}

const reduce = array1.reduce(number, 0);
console.log(reduce);
