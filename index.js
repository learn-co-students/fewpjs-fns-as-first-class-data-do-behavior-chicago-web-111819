/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time) {
  let hour = Number(time.slice(0, 2));
  // console.log(NaN);
  // console.log(hour);
  // console.log(hour === NaN);
  // console.log("=======");
  if (hour < 12 || isNaN(hour)) {
    return 'Good Morning';
  } else if (hour < 17) {
    return 'Good Afternoon';
  } else {
    return 'Good Evening';
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(message) {
  document.getElementsByTagName('h1')[0].innerText = message
}