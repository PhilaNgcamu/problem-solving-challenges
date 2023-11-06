// A function is a set of statements/procedure to perform certain tasks. It should have a relationship between an input and the output
function fn(carArr) {
  if (typeof carArr[0][1] === "number") {
    console.log(carArr[0][1]);
    return;
  }
  console.log(carArr[0][1]);
  const input = carArr.slice(1);
  fn(input);
}

const carObj = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

const arr = Object.entries(carObj);

fn(arr);
