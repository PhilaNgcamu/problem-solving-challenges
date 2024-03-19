// Problem: Counting Ways to Reach Nth Stair

// You are climbing a staircase that has n steps. You can take either one step or two steps at a time. In how many distinct ways can you climb to the top?
// We know that: there's 1 step to the 0th stair, 1 step to the 1st stair

function countWays(n) {
  let tab = [0, 1];
  for (let i = 2; i <= n; i++) {
    tab[i] = tab[i - 2] + tab[i - 1];
  }
  return tab[i];
}
