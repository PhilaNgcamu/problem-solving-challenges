function angryProfessor(k, a) {
  // a.length === number of students
  // k === arrived on time
  // return "YES" if k < a.length else "NO"
  return k >= a.length - k ? "YES" : "NO";
}

console.log(angryProfessor(3, [-1, -3, 4, 2]));
