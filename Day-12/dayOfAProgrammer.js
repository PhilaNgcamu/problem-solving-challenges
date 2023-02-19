function dayOfProgrammer(year) {
  // doap = 256th day of the year
  // from the years (1700-2700)
  // g calender = y/400 and y/4 and y !== /100
  // check if the year is a leap year
  // If so, or not then find the difference between the number of days (6 months) and the 256th day
  //then print out the dd.mm.yyyy
  let leapYearDays = 244;
  let otherYears = 243;
  let dayOfTheProgrammer = 256;
  let difference;
  let month;
  let output;
  if (year % 4 === 0) {
    difference = dayOfTheProgrammer - leapYearDays;
    month += Math.floor(dayOfTheProgrammer / 30) + 1;
  } else {
    difference = dayOfTheProgrammer - otherYears;
    month = Math.floor(dayOfTheProgrammer / 30) + 1;
  }
  return (output = difference + "." + "0" + month + "." + year);
}

console.log(dayOfProgrammer(2016));
