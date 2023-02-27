const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

const dogs = [];
for (let i = 0; i < animals.length; i++) {
  //turn the if statement as filter condition in the .filter
  if (animals[i].species === "dog") dogs.push(animals[i]);
}

console.log(dogs);
