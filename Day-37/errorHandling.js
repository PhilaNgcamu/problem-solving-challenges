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

try {
  try {
    throw "Throw the error";
  } catch (error) {
    console.error("Yes, the error is thrown");
    console.log("Execution on this block scope is done");
    throw new Error("Many errors being thown");
  } finally {
    console.log("Finally! I guess");
  }
  throw new Error("This is error");
  console.log("Execution on this block scope is done");
} catch (error) {
  console.error(error.message);
}
