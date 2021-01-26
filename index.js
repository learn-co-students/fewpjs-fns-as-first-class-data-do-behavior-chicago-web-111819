/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(string) {
  let hour = parseInt(string, 10)
  if (hour < 12) return 'Good Morning'
  if (hour > 17) return 'Good Evening'
  return 'Good Afternoon'
}

function displayMessage(string) {
  let greeting = document.getElementById('greeting')
  greeting.innerText = string
}
