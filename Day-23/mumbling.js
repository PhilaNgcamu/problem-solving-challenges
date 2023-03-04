function accum(s) {
  //split the string
  let arr = s.split("");
  //map over the letters and add additional letters according to index + 1 and capitalize the first letter
  return arr
    .map(
      (letter, index) =>
        letter[0].toUpperCase() + letter.repeat(index).toLowerCase()
    )
    .join("-");
}
