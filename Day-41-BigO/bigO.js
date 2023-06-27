// The logAtLeast5 function: This is O(n) beacuse as the n-inputs increases the runtime/no. of operations increases proportionaly.
function logAtLeast5(n) {
  for (let i = 1; i <= Math.max(5, n); i++) {
    console.log(i);
  }
}

// The logAtMost5 function: This is O(1) beacuse as the n-inputs increases the runtime/no. of operations remains constant
function logAtMost5(n) {
  for (let i = 1; i <= Math.min(5, n); i++) {
    console.log(i);
  }
}
