// let countDown = function f(n) {
//   let nextNumber = n - 1;
//   if (nextNumber === 1) {
//     console.log(nextNumber);
//   } else {
//     console.log(nextNumber);
//     countDown(nextNumber);
//   }
// };
// let newYearCountDown = countDown;
// countDown = null;
// newYearCountDown(10);

// 10 + 9 + 8 + ... + 1 = sum
// n - 1 if n === 1
// function sum(n) {
//   let nextNumber = n;
//   if (nextNumber === 1) return nextNumber;
//   else return n + sum(n - 1);
// }

// let s = sum;
// console.log(s(10));

// find the answer of given X raised to the power N using recursion. X = 5 and N = 3
// 5 * 5 * 5 === 125
// function power(X, N) {
//   let pow = X;
//   if (N === 1) return pow;
//   else {
//     return pow * power(pow, N - 1); // pow * (pow *( pow) N times
//     //X^N = X * X^N-1
//   }
// }
// console.log(power(5, 3));

//Recursive traversals examples:
const company = {
  sales: [
    {
      name: "John",
      salary: 1000,
    },
    {
      name: "Alice",
      salary: 1600,
    },
  ],

  development: {
    sites: [
      {
        name: "Peter",
        salary: 2000,
      },
      {
        name: "Alex",
        salary: 1800,
      },
    ],

    internals: [
      {
        name: "Jack",
        salary: 1300,
      },
    ],
  },
};

//The first memory should except the first initial variable in sumSalaries(), company
// function sumSalaries(department) {
//   //if the department == an array then add all salaries of that department
//   if (Array.isArray(department)) {
//     return department.reduce((acc, curr) => acc + curr.salary, 0);
//   } else {
//     //traverse through the array for departments(array)
//     //let sum = 0;
//     let sum = 0;
//     for (const subdep of Object.values(department)) {
//       //the subcall should except the sub department(array)
//       sum += sumSalaries(subdep);
//     }
//     return sum;
//   }
// }

// console.log(sumSalaries(company));

// sum = 1 + 2 + ... + n
// write the funtion productTo(n)
// function sumTo(n) {
//   // let sum = n
//   let sum = n;
//   // if n === 1 then return sum
//   if (n === 1) return sum;
//   //else sum + sumTo(n - 1)
//   else return sum + sumTo(n - 1);
// }
// console.log(sumTo(10));
//write the function factorial(n)
// function factorial(n) {
//   //let product = 0;
//   let product = n;
//   // if n >= 1 then return n
//   if (product === 0) return 1;
//   else return product * factorial(product - 1);
//   //else n * n - 1
// }
// console.log(factorial(10));
