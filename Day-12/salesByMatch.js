function sockMerchant(ar, n) {
  // arr[i] = color of each sock
  // compare each sock with another sock
  let count = 0;
  let array = [...ar];
  for (let i = 0; i < n; i++) {
    let socks = [];
    for (let j = 0; j < n; j++) {
      if (j === i) continue;
      else if (ar[i] === ar[j]) {
        socks.push(ar[i]);
        array.splice(i, 1);
      }
    }
    console.log(socks);

    count += Math.trunc(socks.length / 2);
  }

  // return count
  return count;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20], 9));
