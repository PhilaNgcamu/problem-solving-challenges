function main(input) {
  let array = input.split("\n");
  let reversed = array[1].split("").reverse().join("").split(".");
  let words = [];
  for (let i = 1; i < array.length; i++) {
    words.push(
      array[i].split("").reverse().join("").split(".").reverse().join(".")
    );
  }
  return words.join("\n");
}
console.log(
  main("2" + "\n" + "i.like.this.program.very.much" + "\n" + "pqr.mno")
);
("i.ekil.siht.margorp.yrev.hcum");
