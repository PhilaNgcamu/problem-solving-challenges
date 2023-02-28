// -- Reduce()
// const customers = [
//   ["Mark Johansson", "waffle iron", 80, 2],
//   ["Mark Johansson", "blender", 200, 1],
//   ["Mark Johansson", "knife", 10, 4],
//   ["John Doe", "waffle iron", 80, 1],
//   ["John Doe", "knife", 10, 2],
//   ["John Doe", "pot", 20, 3],
// ];
// // The task is to convert the customers array to an object using reduce. Each array contains item, price and quantity where, customer[i], i = 0 (name), i = 1 (item), i = 2 (price), i = 3 (quantity)
// const obj = customers.reduce((customerObj, currentValue) => {
//   if (!customerObj[currentValue[0]]) customerObj[currentValue[0]] = [];
//   customerObj[currentValue[0]].push({
//     item: currentValue[1],
//     price: currentValue[2],
//     quantity: currentValue[3],
//   });
//   return { ...customerObj };
// }, {});
// console.log(obj);
// {
//   "Mark ...": [{"item": .."price":.., "quantity":... }, {"item": .."price":.., "quantity":... }... ],
//   "John Doe": [{"item": .."price":.., "quantity":... }]
// }

// Find the sum of the values below using reduce:
// const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
// const sum = objects.reduce((sum, obj) => sum + obj.x, 0);
// console.log(sum);

// Flatten the this array below using reduce:
// const twoDarray = [
//   [0, 1],
//   [2, 3],
//   [4, 5],
// ];
// const flattened = twoDarray.reduce((array, eachArray) => {
//   array.push(...eachArray);
//   return array;
// }, []);

// console.log(flattened);

// Count How many instances of values(names) are there by using reduce:
// const names = ["Alice", "Bob", "Tiff", "Bruce", "Alice"];

// const obj = names.reduce((allNames, eachName) => {
//   console.log(allNames);
//   return {
//     ...allNames,
//     [eachName]: (allNames[eachName] ?? 0) + 1,
//   };
// }, {});
//console.log(obj);

//Sort This By Age using reduce:
const people = [
  { name: "Alice", age: 21 },
  { name: "Max", age: 20 },
  { name: "Jane", age: 20 },
];

const sortedByAge = people.reduce((ages, eachAge) => {
  if (!ages[eachAge.age]) {
    ages[eachAge.age] = [];
  }
  ages[eachAge.age].push(eachAge);
  return ages;
}, {});

console.log(sortedByAge);
