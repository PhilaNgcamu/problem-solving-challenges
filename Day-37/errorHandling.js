// try {
//   console.error("This might be an error");
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   throw new Error("This might be an error");
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   function error(name) {
//     if (!name) throw new Error("There's no name");
//     return name;
//   }
//   throw name("Alice");
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   try {
//     throw "Throw the error";
//   } catch (error) {
//     console.error("Yes, the error is thrown");
//     console.log("Execution on this block scope is done");
//     throw new Error("Many errors being thown");
//   } finally {
//     console.log("Finally! I guess");
//   }
//   throw new Error("This is error");
//   console.log("Execution on this block scope is done");
// } catch (error) {
//   console.error(error.message);
// }

// try {
//   try {
//     throw "Throw the error";
//   } catch (error) {
//     console.error("Yes, the error is thrown");
//     console.log("Execution on this block scope is done");
//     throw new Error("Many errors being thown");
//   } finally {
//     console.log("Finally! I guess");
//   }
//   throw new Error("This is error");
//   console.log("Execution on this block scope is done");
// } catch (error) {
//   console.error(error.message);
// }

// console.log(
//   (() => {
//     try {
//       try {
//         throw new Error("oops");
//       } catch (ex) {
//         console.error("inner", ex.message);
//         throw ex;
//       } finally {
//         console.log("finally");
//         return "Phila";
//       }
//     } catch (ex) {
//       console.error("outer", ex.message);
//     }
//   })()
// );

// function main() {
//   print(1);
// }

// function print(num) {
//   if (num === 5) console.log(num);
//   else {
//     console.log(num);
//     print(num + 1);
//   }
// }

// main();

// function main() {
//   print1(1);
// }

// function print1(num) {
//   console.log(num);
//   print2(2);
// }

// function print2(num) {
//   console.log(num);
//   print3(3);
// }

// function print3(num) {
//   console.log(num);
//   print4(4);
// }

// function print4(num) {
//   console.log(num);
//   print5(5);
// }

// function print5(num) {
//   console.log(num);
// }

// main();
