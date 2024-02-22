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
    console.log(`Cashier: ${action}`);
    if (action === "add items") {
      items.push("eggs");
    } else if (action === "void") {
      console.log(arr.pop());
      controller();
    }
  });
}

function controller(arr, idx) {
  if (arr[idx] === "smartshopper") {
    console.log("Swipe the discount card (shopper)");
  } else if (arr[idx] === "plastic") {
    console.log("Cashier: Do you need a plastic?");
    console.log("Yes, please");
  } else "have a nice day";
}

cashier(controllerArr);
