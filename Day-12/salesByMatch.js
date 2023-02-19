function sockMerchant(ar, n) {
  // arr[i] = color of each sock
  let count = 0;
  let socks = {};

  for (let i = 0; i < n; i++) {
    //store socks
    if (socks.hasOwnProperty(ar[i])) {
      socks[ar[i]]++;
    } else socks[ar[i]] = 1;
  }
  //Count How many pairs
  for (let pairs in socks) {
    count += Math.floor(socks[pairs] / 2);
  }
  return count;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20], 9));
