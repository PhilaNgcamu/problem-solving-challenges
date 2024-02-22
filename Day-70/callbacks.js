// cashier
// there on we to call controller
// you're at till
// converse between me and cashier
// array of ["hello","add items"
// "void", "smartshopper", "plastic", "have a nice day"]
// ----------
// ["soap", "tomato"]
// remove "soap" from the basket
// come input the pin when they call him/her;

const controllerArr = [
  "hello",
  "add items",
  "void",
  "smartshopper",
  "plastic",
  "have a nice day",
];

const items = ["soap", "tomato"];

function cashier(arr) {
  arr.forEach((action, idx) => {
    // console.log(`Cashier: ${action}`);
    if (action === "hello") {
      console.log("Cashier: hello");
      console.log("Customer: hi");
    } else controller(controllerArr, idx);
  });
}

function controller(arr, idx) {
  if (arr[idx] === "add items") {
    items.push("eggs");
    console.log(`Cashier: Added eggs in the basket, ${items}`);
  } else if (arr[idx] === "void") {
    items.shift();
    console.log(`Cashier: Remove soap. Now left with ${items}`);
  }
  if (arr[idx] === "smartshopper") {
    console.log("Cashier: Swipes the discount card (shopper)");
  } else if (arr[idx] === "plastic") {
    console.log("Cashier: Do you need a plastic?");
    console.log("Customer: Yes, please");
  } else "have a nice day";
}

cashier(controllerArr);
