// const foo = (hello = (callback, name1) => {
//   console.log("hello, " + callback(name1));
// });

// const a = (bar = (arg1) => {
//   console.log("Hello there, " + arg1);
//   return arg1;
// });

// try {
//   try {
//     throw new Error("oops");
//   } finally {
//     console.log("Finally");
//   }
// } catch (error) {
//   console.log("Hello, this is an error: " + error.message);
// }

const b = (func = (arg) => {
  if (arg) return arg;
  else throw new Error("This is an error");
});

try {
  (() => {
    try {
      console.log(b("This is a valid value"));
      try {
        b();
      } finally {
        console.log("Execution done!");
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      console.log("Execution done!");
    }
  })();
} catch (error) {
  console.log(error);
}
