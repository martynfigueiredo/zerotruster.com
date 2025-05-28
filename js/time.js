// Utility function for zero-padding numbers
function pad(number) {
  return number < 10 ? '0' + number : number;
}

// Get current UTC time in the format: YYYY-MM-DD HH:MM:SS UTC0
function getUTCTime() {
  var now = new Date();
  var year = now.getUTCFullYear();
  var month = pad(now.getUTCMonth() + 1); // Months are 0-indexed so add 1
  var day = pad(now.getUTCDate());
  var hours = pad(now.getUTCHours());
  var minutes = pad(now.getUTCMinutes());
  var seconds = pad(now.getUTCSeconds());
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds} UTC0`;
}

// Once the DOM is fully loaded, update the element with id "currentTime"
document.addEventListener('DOMContentLoaded', function () {
  var timeElement = document.getElementById('currentTime');
  if (timeElement) {
    timeElement.textContent = getUTCTime();
  }
});
