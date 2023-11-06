// A function is a set of statements/procedure to perform certain tasks. It should have a relationship between an input and the output
function fn(obj) {
  return {
    ...obj,
    make: "Toyota",
  };
}

const carObj = {
  make: "Honda",
  model: "Accord",
  year: 1998,
};

console.log(fn(carObj));
