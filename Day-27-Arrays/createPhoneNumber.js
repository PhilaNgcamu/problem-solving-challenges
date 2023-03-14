// Codewars > Create Phone Numbers
function createPhoneNumber(numbers) {
  return numbers.join("").replace(/(\d{3})(\d{3})(\d+)/, "($1) $2-$3");
}
