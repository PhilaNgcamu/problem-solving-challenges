// Hackerrank > Jumping On The Clouds
function jumpingOnClouds(c, k) {
  // c === array of clouds
  // e === energy level === 100
  // e === e - c[position]
  // k === jump size
  // if thundercloud then c[i] = 1 and e === 100 - 2
  // game ends when character lands back on cloud 0 at the start
  // return the energy remaining, e

  let e = 100;
  let position = 0;
  let i = 0;
  while (i === 0 || position !== 0) {
    position = (position + k) % c.length;
    if (c[position] === 1) {
      e = e - 2;
    } else {
      e = e - 1;
    }
    i++;
  }
  return e;
}

console.log(jumpingOnClouds([0, 0, 1, 0], 2));
