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
  let jumps;

  for (let i = 0; i < c.length; i++) {
    if (c[i] === 1) {
      jumps = c[(i + k) % c.length];
      e = e - 1 - 2;
    } else {
      jumps = c[(i + k) % c.length];
      e = e - 1;
    }
  }
}

console.log(jumpingOnClouds([0, 0, 1, 0], 2));
