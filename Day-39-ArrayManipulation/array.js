const cars = ["Polo", "Volvo", "BMW", "Uno", "Lambo"];

for (const index in cars) {
  console.log(cars[index]);
}

console.log(cars.join(" ").replace(/BMW/, /Isuzu Jeep Toyota/));
