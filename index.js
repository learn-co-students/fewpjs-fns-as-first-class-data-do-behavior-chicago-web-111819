/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let hourMinuteStrings = time.split(':');
  let parsedHour = parseInt(hourMinuteStrings[0]);
  if (parseInt(parsedHour) < 12)  {
    return "Good Morning";
  }
  else if (parsedHour > 17) {
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}


/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.querySelector('#greeting').innerText = greeting;
}