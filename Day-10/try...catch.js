const foo = (hello = (callback) => {
  console.log("hello, " + callback());
});

try {
  foo();
} catch (error) {
  console.error("Hello, this is an error");
}
