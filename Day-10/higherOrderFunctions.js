const foo = (callback) => {
  console.log("Hello, " + callback());
};

let x = function bar() {
  console.log("JavaScript");
  console.log("Phila");

  return "World";
};
//foo(x);

const a = function movies() {
  console.log("Harry Potter");
};

const b = function favourite(callback) {
  console.log(`My favorite is ${callback}`);
};

let c = b(x);

console.log(`c = ${c}`);
