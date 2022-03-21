function getNumberOfDaysInMonth (month, year) {
  return new Date(year, month, 0).getDate()
}

module.exports.getNumberOfDaysInMonth = getNumberOfDaysInMonth
console.log(getNumberOfDaysInMonth(4, 2003))
