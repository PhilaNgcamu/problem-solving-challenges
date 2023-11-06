function factorial(input) {
  if (input === 1) {
    console.log(input);
    return;
  }
  console.log(input);
  factorial(input - 1);
}
function factorial2(input) {
  console.log(input);
  factorial3(input - 1);
}
function factorial3(input) {
  console.log(input);
  factorial4(input - 1);
}
function factorial4(input) {
  console.log(input);
  factorial5(input - 1);
}
function factorial5(input) {
  console.log(input);
  factorial6(input - 1);
}
function factorial6(input) {
  console.log(input);
  factorial7(input - 1);
}
function factorial7(input) {
  console.log(input);
  factorial8(input - 1);
}
function factorial8(input) {
  console.log(input);
  factorial9(input - 1);
}
function factorial9(input) {
  console.log(input);
  factorial10(input - 1);
}
function factorial10(input) {
  console.log(input);
}

factorial(10);
