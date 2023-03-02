// Codewars > TwoToOne
function longest(s1, s2) {
  s1 = new Set(s1);
  s2 = new Set(s2);
  const result = [...s1, ...s2].sort();
  return [...new Set(result)].join("");
}
