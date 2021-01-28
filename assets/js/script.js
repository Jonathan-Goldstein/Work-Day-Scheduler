//setting the value for current day
let currentDay = document.getElementById('currentDay');
//luxon variable shortcut
let DateTime = luxon.DateTime;
//gives me a date time object that gives me the current date and time on the user's computer
let today = DateTime.local();

//setting the text content for current day
currentDay.textContent = today.toLocaleString(DateTime.DATE_HUGE);
