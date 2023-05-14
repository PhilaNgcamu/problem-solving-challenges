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
  function error(name) {
    if (!name) throw new Error("There's no name");
    return name;
  }
  throw boo("Alice");
} catch (error) {
  console.error(error.message);
}
