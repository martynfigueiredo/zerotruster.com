// Utility function for zero-padding numbers
function pad(number) {
  return number < 10 ? '0' + number : number;
}

// Get current local time in the format: YYYY-MM-DD HH:MM:SS
function getLocalTime() {
  var now = new Date();
  var year = now.getFullYear();
  var month = pad(now.getMonth() + 1); // Months are 0-indexed so add 1
  var day = pad(now.getDate());
  var hours = pad(now.getHours());
  var minutes = pad(now.getMinutes());
  var seconds = pad(now.getSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}

// Once the DOM is fully loaded, update the element with id "currentTime"
document.addEventListener('DOMContentLoaded', function () {
  var timeElement = document.getElementById('currentTime');
  if (timeElement) {
    timeElement.textContent = getLocalTime();
  }
});