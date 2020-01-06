/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let time_parts = time.split(":");
  let greeting = "Good Whatever...";
  let t = parseInt(time_parts[0]);
  if (t < 12) {
    greeting = "Good Morning";
  } else if (t >= 12 && t <= 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }
  return greeting;
}

/* Write your implementation of displayMessage() */
function displayMessage(msg) {
  document.querySelector("#greeting").innerText = msg;
}
