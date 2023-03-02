function abbrevName(name) {
  //split the name by space
  let array = name.split(" ");
  //take the letter of the first and second element
  return array[0][0].toUpperCase() + "." + array[1][0].toUpperCase();
}
