const foo = (callback) => {
  console.log("Hello, " + callback());
};

let x = function bar() {
  console.log("JavaScript");
  console.log("Phila");

  return "World";
};
foo(x);
