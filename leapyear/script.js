isLeapYear();

function isLeapYear(year) {
  let leapYear = false;
  if (year % 100 === 0) {
    if (year % 400 === 0) {
      leapYear = true;
    }
  } else if (year % 4 === 0) {
    leapYear = true;
  }
  return leapYear;
}
