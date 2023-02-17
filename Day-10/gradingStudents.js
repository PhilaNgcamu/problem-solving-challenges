// HackerLand University has the following grading policy:

// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:

// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
function gradingStudents(grades) {
  //4 73 67 38
  33;
  let results = [];
  for (let i = 0; i < grades.length; i++) {
    if (grades[i] >= 38) {
      let remainder = grades[i] % 5;
      if (remainder === 3) results.push(grades[i] + 2);
      else if (remainder === 4) results.push(grades[i] + 1);
      else results.push(grades[i]);
    } else results.push(grades[i]);
  }
  return results;
}
