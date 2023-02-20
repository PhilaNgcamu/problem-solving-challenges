function angryProfessor(k, a) {
  // a.length === number of students
  // k === arrived on time
  // return "YES" if k has been met else "NO"
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (a[i] <= 0) count++;
  }
  return count >= k ? "NO" : "YES";
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
