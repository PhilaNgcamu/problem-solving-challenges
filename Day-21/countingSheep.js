// Codewars > Counting Sheeps...
function countSheeps(arrayOfSheep) {
  // calclate the sheep present
  const presentSheep = arrayOfSheep.filter(Boolean);
  return presentSheep.length;
}
