// function getNextDate(dateString) {
//   // Parse the input date string
//   const currentDate = new Date(dateString);

//   // Calculate the next day
//   const nextDay = new Date(currentDate);
//   nextDay.setDate(currentDate.getDate() + 1);

//   return nextDay;
// }

const getNextDate = (dateString) =>
  new Date(new Date(dateString).setDate(new Date(dateString).getDate() + 1));

// Example usage
const inputDate = "1995-12-17T03:24:00";
const nextDate = getNextDate(inputDate);

console.log(nextDate);
