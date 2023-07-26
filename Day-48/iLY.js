function howMuchILoveYou(nbPetals) {
  const obj = {
    1: "I love you",
    2: "a little",
    3: "a lot",
    4: "passionately",
    5: "madly",
    6: "not at all",
  };
  const num = ((nbPetals - 1) % Object.keys(obj).length) + 1;
  return obj[num];
}

console.log(howMuchILoveYou(6));
//1.How can we restate the problem, in your own words?

//2. What are the inputs that go into the problem?

//3. What should the output look like from the inputs we have? (Do we understand how the solution would look like?)

//4. Break down the problem (pseudocode)

//5. refactor the solved problem (if possible)
