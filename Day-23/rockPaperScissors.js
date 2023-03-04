// Codewars > Rock Papers Scissors!
const rps = (p1, p2) => {
  if (p1 === p2) return "Draw!";
  const rules = { rock: "scissors", paper: "rock", scissors: "paper" };
  if (p1 === rules[p2]) return "Player 2 won!";
  return "Player 1 won!";
};
