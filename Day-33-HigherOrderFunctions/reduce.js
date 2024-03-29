const array1 = [1, 2, 3, 4, 5];

function number(accumulator, value, index) {
  console.log(
    `Accumulator: ${accumulator} at index: ${index} and the current value: ${value}`
  );
  const result = accumulator + value;
  return result;
}

const reduce = array1.reduce(number, 0);
console.log(reduce);

const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
const sum = objects.reduce(
  (accumulator, currentValue) => accumulator + currentValue.x,
  0
);
console.log(sum);

const friends = [
  {
    name: "Anna",
    books: ["The War Story", "Harry Potter"],
    age: 21,
  },
  {
    name: "Bob",
    books: ["War and peace", "Romeo and Juliet"],
    age: 26,
  },
  {
    name: "Alice",
    books: ["The Lord of the Rings", "The Shining"],
    age: 18,
  },
];
const result = friends.reduce((array, obj) => {
  const res = [];
  res.push(obj.name);
  array.push(...res);
  return array;
}, []);

console.log(result);
