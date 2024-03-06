// function getNextDate(dateString) {
//   // Parse the input date string
//   const currentDate = new Date(dateString);

//   // Calculate the next day
//   const nextDay = new Date(currentDate);
//   nextDay.setDate(currentDate.getDate() + 1);

//   return nextDay;
// }

// const getNextDate = (dateString) =>
//   new Date(new Date(dateString).setDate(new Date(dateString).getDate() + 1));

// // Example usage
// const inputDate = "1995-12-17T03:24:00";
// const nextDate = getNextDate(inputDate);

// console.log(nextDate);

function formatTime(inputTime) {
  const lowercaseTime = inputTime.toLowerCase();

  if (lowercaseTime.includes(" ")) {
    // Convert '10 AM' to '10am' or '10 PM' to '10pm'
    return lowercaseTime.replace(/\s+/g, "");
  } else {
    // Convert '10am' to '10 AM' or '10pm' to '10 PM'
    const match = lowercaseTime.match(/(\d{1,2})(am|pm)/);
    if (match) {
      const hours = match[1];
      const period = match[2];
      const formattedTime = `${hours} ${period.toUpperCase()}`;
      return formattedTime;
    } else {
      // Return the input unchanged if the format doesn't match
      return inputTime;
    }
  }
}

// console.log(formatTime("10am"));
// console.log(formatTime("10 AM"));

const availableEndHours = (hours, eventHours) => {
  try {
    const resultArrays = [];

    let currentArray = [...hours];

    eventHours.forEach(({ startTime, endTime }) => {
      const startIndex = currentArray.indexOf(formatTime(startTime));
      const endIndex = currentArray.indexOf(formatTime(endTime)) + 1;

      if (startIndex !== -1 && endIndex !== 0) {
        const bookedTimeRange = hours.slice(startIndex, endIndex);
        resultArrays.push(currentArray.slice(0, startIndex + 1));
        currentArray = currentArray.slice(endIndex);
      }
    });

    // Push the remaining hours to the resultArrays
    if (currentArray.length > 0) {
      resultArrays.push(currentArray);
    }

    // return resultArrays;

    // return availableEndHours;
    return resultArrays;
  } catch (error) {
    console.error("Error fetching event hours:", error);
  }
};

console.log(
  availableEndHours(
    [
      "12 AM",
      "1 AM",
      "2 AM",
      "3 AM",
      "4 AM",
      "5 AM",
      "6 AM",
      "7 AM",
      "8 AM",
      "9 AM",
      "10 AM",
      "11 AM",
      "12 PM",
      "1 PM",
      "2 PM",
      "3 PM",
      "4 PM",
      "5 PM",
      "6 PM",
      "7 PM",
      "8 PM",
      "9 PM",
      "10 PM",
      "11 PM",
    ],
    [
      { endTime: "11am", startTime: "9am" },
      { endTime: "2pm", startTime: "1pm" },
    ]
  )
);
