// Codewars > DNA to RNA Conversion
function DNAtoRNA(dna) {
  //split the dna
  const array = dna.split("");
  //map over the dna and each element should have a complementary then join the elements and return them
  return array.reduce((result, letter) => {
    if (letter === "T") result += "U";
    else result += letter;
    return result;
  }, "");
}

console.log(DNAtoRNA("GCAT"));
