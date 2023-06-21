let str = "Hello, world! How are you?";

console.log(
  str.replace(/[a-z]+/gi, (matched, value1, value2, offset, input) => {
    return matched.split("").reverse().join("");
  })
);
