function DNAStrand(dna) {
  //split the dna
  const array = dna.split("");
  //map over the dna and each element should have a complementary then join the elements and return them
  return array.reduce((result, letter) => {
    if (letter === "A") result += "T";
    else if (letter === "T") result += "A";
    else if (letter === "G") result += "C";
    else if (letter === "C") result += "G";
    return result;
  }, "");
}
console.log(DNAStrand("TAACG"));
