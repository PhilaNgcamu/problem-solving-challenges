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
    if (action === "hello") {
      console.log("Cashier: hello");
      console.log("Customer: hi");
    } else if (action === "smartshopper") {
      console.log("Cashier: Swipes the discount card (shopper)");
    } else if (action === "plastic") {
      console.log("Cashier: Do you need a plastic?");
      console.log("Customer: Yes, please");
    } else controller(controllerArr, idx);
  });
}

const controller = (arr, idx) => {
  switch (arr[idx]) {
    case "add items":
      items.push("eggs");
      console.log(`Cashier: Added eggs in the basket, ${items}`);
      break;
    case "void":
      items.shift();
      console.log(`Cashier: Remove soap. Now left with ${items}`);
      break;
    case "smartshopper":
      console.log("Cashier: Swipes the discount card (shopper)");
      break;
    case "plastic":
      console.log("Cashier: Do you need a plastic?");
      console.log("Customer: Yes, please");
      break;
    default:
      console.log("have a nice day");
  }
};

cashier(controllerArr);
