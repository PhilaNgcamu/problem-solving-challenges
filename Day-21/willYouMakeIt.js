//Codewars > Will You Make It?
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  //return true if distanceToPump <= mpg * fuelLeft
  return distanceToPump <= mpg * fuelLeft;
};

console.log(zeroFuel(100, 50, 1));
