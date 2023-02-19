// Hackerrank > bill dicision

function bonAppetit(bill, k, b) {
  // bill = [portions, ....], k = bill[index] = cost of portion
  // calculate the bill of Anna, where we remove bill[k] from the array
  let array = [...bill];
  array.splice(k, 1);

  // find the difference between the bill contributed and bill of Anna
  let difference = b - Math.floor(array.reduce((a, b) => a + b) / 2);
  // if the difference > 0, print the difference else print "Bon Appetit"
  console.log(difference > 0 ? difference : "Bon Appetit");
}

bonAppetit([3, 10, 2, 9], 1, 12);
