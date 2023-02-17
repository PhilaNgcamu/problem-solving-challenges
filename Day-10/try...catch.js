const foo = (hello = (callback, name1) => {
  console.log("hello, " + callback(name1));
});

const a = (bar = (arg1) => {
  console.log("Hello there, " + arg1);
  return arg1;
});

try {
  foo(a, "Phila");
} catch (error) {
  console.log("Hello, this is an error");
}
