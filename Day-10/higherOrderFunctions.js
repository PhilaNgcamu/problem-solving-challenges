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
  return "Harry Potter";
};

const b = (favourite = (callback) => {
  console.log(`My favourite movie is ${callback()}`);
});

let c = b(a);

console.log(`c = ${c}`);
