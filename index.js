/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(timeOf) {
  let timey = timeOf.split(":");
  let hour = parseInt(timey[0]);
  if (hour < 12) {
    return "Good Morning"
  } else if (hour < 17 ) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }
}

/* Write your implementation of greet() */
function displayMessage(string) {
  let something = document.querySelector('#greeting');
  something.innerText = string;
}

/* Write your implementation of displayMessage() */
