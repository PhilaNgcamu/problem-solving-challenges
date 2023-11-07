function formatDOB(date) {
  if (!(date instanceof Date)) {
    return "Invalid date format";
  }

  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");

  return `12345-${day}${month}${year}`;
}

const dateOfBirth = new Date(1990, 4, 15); // May is represented as 4 (0-based month index)
const formattedDOB = formatDOB(dateOfBirth);
console.log(formattedDOB); // Output: "12345-150590"
