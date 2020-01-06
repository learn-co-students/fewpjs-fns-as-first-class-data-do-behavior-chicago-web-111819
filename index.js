/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  const hours = time.split(":");
  const parsedHours = parseInt(hours[0]);
  if (parsedHours < 12) {
    return "Good Morning";
  }
  if (parsedHours >= 12 && parsedHours <= 17) {
    return "Good Afternoon";
  }
  if (parsedHours > 17) {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementById("greeting").innerText = message;
}
