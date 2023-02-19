function sockMerchant(ar, n) {
  // arr[i] = color of each sock
  // compare each sock with another sock
  let count = 0;
  let array = [...ar];

  for (let i = 0; i < array.length - 1; i++) {
    let socks = [];
    let sock = array[i];
    for (let j = 0; j < array.length - 1; j++) {
      if (sock === array[j]) {
        socks.push(sock);
        array.splice(j, 1);
      }
    }
    count += Math.floor(socks.length / 2);
    console.log(socks);
  }
  return count;
}

console.log(sockMerchant([10, 20, 20, 10, 10, 30, 50, 10, 20], 9));
