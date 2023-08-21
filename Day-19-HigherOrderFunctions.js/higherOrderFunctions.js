const animals = [
  { name: "Fluffykins", species: "rabbit" },
  { name: "Caro", species: "dog" },
  { name: "Hamilton", species: "dog" },
  { name: "Harold", species: "fish" },
  { name: "Ursula", species: "cat" },
  { name: "Jimmy", species: "fish" },
];

//filter

const arr = [];

for (let i = 0; i < animals.length; i++) {
  arr.push(animals[i].name);
}
console.log(arr);

// // const isDog = function (animal) {
// //   return animal.species === "dog";
// // };

// // const dogs = animals.filter(isDog);

// // console.log(dogs);

// //--Map
// // const names = [];
// // for (let i = 0; i < animals.length; i++) {
// //   names.push(animals[i].name);
// // }

// // console.log(names);

// // const names = animals.map((animal) => animal.name);

// // console.log(names);

// //--Reduce
// const orders = [
//   { amount: 250 },
//   { amount: 400 },
//   { amount: 100 },
//   { amount: 325 },
// ];

// // let totalAmount = 0;
// // for (let i = 0; i < orders.length; i++) {
// //   totalAmount += orders[i].amount;
// // }
// // console.log(totalAmount);

// // const totalAmount = orders.reduce((sum, order) => sum + order.amount, 0);
// // console.log(totalAmount);

// //The task is to convert the customers array to an object using reduce. Each array contains item, price and quantity where, customer[i], i = 0 (name), i = 1 (item), i = 2 (price), i = 3 (quantity)
// const customers = [
//   ["Mark Johansson", "waffle iron", 80, 2],
//   ["Mark Johansson", "blender", 200, 1],
//   ["Mark Johansson", "knife", 10, 4],
//   ["John Doe", "waffle iron", 80, 1],
//   ["John Doe", "knife", 10, 2],
//   ["John Doe", "pot", 20, 3],
// ];

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
// // {
// //   "Mark ...": [{"item": .."price":.., "quantity":... }, {"item": .."price":.., "quantity":... }... ],
// //   "John Doe": [{"item": .."price":.., "quantity":... }]
// // }
