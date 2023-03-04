const { companies, characters, ages, words1, words } = require("./dataObj");
//Map
//  1. Get array of all names
//  2. Get array of all heights
//  3. Get array of objects with just name and height properties
const nameHeight = characters.map((v) => {
  return { name: v.name, height: v.height };
});
console.log(nameHeight);
//4. Get array of all first names
const firstNames = characters.map((v) => v.name.split(" ")[0]);
console.log(firstNames);

//  ***REDUCE***
//  1. Get total mass of all characters
//  calling reduce on this array u can just use t + v because its just an
//  array of numbers
const arr = [1, 2, 3];
console.log(arr.reduce((prev, curr, i, arr) => prev + curr));

//   this reduce acc(t) needs initial val of zero because by default acc is
//   the 1st object of characters array
const totalMass = characters.reduce((t, v) => t + v.mass);
console.log(totalMass);
//2. Get total height of all characters
const totalHeight = characters.reduce((t, v) => {
  console.log(t);
  return t + v.height;
}, 0);
console.log(totalHeight);

//3. Get total number of characters by eye color
const charactersByEyeColor = characters.reduce((obj, v) => {
  if (obj[v.eye_color]) obj[v.eye_color]++;
  else obj[v.eye_color] = 1;
  return obj;
}, {});
console.log(charactersByEyeColor);
//  4. Get total number of characters in all the character names
const characterNameLengths = characters.reduce((obj, v) => {
  obj[v.name] = v.name.length;
  return obj;
}, {});
console.log(characterNameLengths);

const characterNameLengths2 = characters.reduce(
  (obj, v) => ({ ...obj, [v.name]: v.name.length }),
  {}
);
console.log(characterNameLengths2);

const names = characters.reduce((arr, v) => {
  arr.push(v.name);
  return arr;
}, []);
console.log(names);
const names1 = characters.reduce((arr, v) => [...arr, v.name], []);
console.log(names1);

const names2 = characters.reduce((arr, obj) => [...arr, obj.height + 2], []);
console.log(names2);

const alpha = Array.from(Array(26)).map((_, i) =>
  String.fromCharCode(i + 65).toLowerCase()
);
const obj1 = alpha.reduce((o, v, i) => ({ ...o, [v]: i + 1 }), {});
const obj2 = alpha.reduce((o, v, i) => {
  o[v] = i + 1;
  return o;
}, {});
console.log(obj1, obj2);

const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
function encode(str) {
  return str
    .split("")
    .map((v, i) => {
      if (vowels.hasOwnProperty(v)) return vowels[v];
      return v;
    })
    .join("");
}
function encode(str) {
  return str.split("").reduce((a, b, i) => {
    if (vowels.hasOwnProperty(b)) a += vowels[b];
    else a += b;
    return a;
  }, "");
}

//  ***FILTER***
//  1. Get characters with mass greater than 100
//  const mass = characters.filter((v) => v.mass > 100);
//  console.log(mass);
//  2. Get characters with height less than 200
//  3. Get all male characters
const males = characters.filter((v) => v.gender === "male");
console.log(males);
//  4. Get all female characters

//   ***SORT***
//   1. Sort by mass
//   2. Sort by height
//   3. Sort by name
//   4. Sort by gender

//   ***EVERY***
//   1. Does every character have blue eyes?
//   2. Does every character have mass more than 40?
//   3. Is every character shorter than 200?
//   4. Is every character male?

//   ***SOME***
//   1. Is there at least one male character?
//   2. Is there at least one character with blue eyes?
//   3. Is there at least one character taller than 210?
//   4. Is there at least one character that has mass less than 50?

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// ForEach
companies.forEach(function (company) {
  console.log(company.start + 10);
});

// Filter()
const over30 = ages.filter(function (i) {
  return i > 30;
});
console.log(over30);

const diff = companies.filter(
  (company) => company.start >= 1990 && company.end <= 2009
);
console.log(diff);

// Map()
let a = companies.map(
  (company) => `${company.category} [${company.start} - ${company.end}]`
);
console.log(a);
//    Sort()
//    Reduce()
//    combine all 4 methods

str = "bye";
obj = { a: 1, b: 2, c: 3, d: 4 };
console.log({ ...obj, y: 7 });
matrix = [
  ["a", "b"],
  ["c", "d"],
];

const i = Object.keys(obj).findIndex((v) => obj[v] === 4);
const i = matrix.findIndex((v) => v.includes("c"));
console.log(i);

arr = str.split("");
arr.forEach((i) => {
  arr.forEach((e) => {
    console.log(i, e);
  });
});

Object.keys(obj).forEach((k) => {
  obj[k]++;
});
console.log(obj);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
arr1.forEach(() => {
  arr2.forEach((e) => {
    console.log(e);
  });
});

arr1.forEach(() => {
  arr2.forEach((e) => {
    console.log(e);
  });
});

const every = ages.every((v) => v > 0);
console.log(every);

const some = ages.some((v) => v > 50);
console.log(some);

const a = ages.sort((a, b) => a - b);
console.log(a);

const s = companies.filter(
  (v) => v.start === Math.max(...companies.map((v) => v.start))
);
console.log(s);

const f = ages.find((v) => v % 2 === 0);
console.log(f);

const t = [].reduce((t, v) => t + v);
console.log(t);
