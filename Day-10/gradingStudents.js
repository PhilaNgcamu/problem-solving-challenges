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
