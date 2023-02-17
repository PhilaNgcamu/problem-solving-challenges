const foo = (callback) => {
  console.log("Hello, " + callback());
};

let x = function bar() {
  console.log("JavaScript");
  console.log("Phila");

  return "World";
};
//foo(x);

const a = function movies(callback) {
  console.log("Harry Potter " + callback);
  return "Harry Potter";
};

const b = (favourite = (callback) => {
  console.log(`My favourite movie is ${callback}`);
});

let c = b(foo(x));

console.log(`c = ${c}`);
