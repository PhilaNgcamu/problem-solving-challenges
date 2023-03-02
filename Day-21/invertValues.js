function invert(array) {
  return array.reduce((invert, number) => {
    invert.push(number * -1);
    return invert;
  }, []);
}
console.log(invert([-1, -2, -3, -4, -5]));
