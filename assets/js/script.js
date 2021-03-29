// Setting the variables
let DateTime = luxon.DateTime;
let today = DateTime.local();
let hourNow = today.hour;
console.log(hourNow);
console.log(today);
// Variable array containing the hours
var hours = [
    {hour: "9am",
     mhour: "9"},
    {hour: "10am",
     mhour: "10"},
    {hour: "11am",
     mhour: "11"},
    {hour: "12pm",
     mhour: "12"},
    {hour: "1pm",
     mhour: "13"},
    {hour: "2pm",
     mhour: "14"},
    {hour: "3pm",
     mhour: "15"},
    {hour: "4pm",
     mhour: "16"},
    {hour: "5pm",
     mhour: "17"}, 
];
$(document).ready(function() {
    $("#currentDay").text(today.toLocaleString(DateTime.DATE_FULL));

    //Container class
    $(".container").addClass("time-block");

    hours.forEach(function(hours) {
      //appends rows to container - everything below additionally appends
        var row = $("<article>").addClass("row");
        $(".container").append(row);
      
        var timeSec = $("<section>").addClass("hour col-2 pt-4")
        timeSec.text(hours.hour);
        row.append(timeSec);
        var textSec = $("<textarea>").addClass("textarea col-8 description")
        row.append(textSec);
         var btnSec = $("<button>").addClass("saveBtn col-2")
        row.append(btnSec);
        var img = $("<i>").addClass("far fa-save fa-lg")
        btnSec.append(img);

        // If else statements
        if (hourNow < hours.mhour) {
            $(textSec).addClass("future");
        }

        else if (hourNow > hours.mhour) {
            $(textSec).addClass("past");
        }

        else {
            $(textSec).addClass("present");
        }

        // Storage variable
        var key = hours.hour;
        console.log(key);

        // Sets the box text
        var toDo = localStorage.getItem(key);
        console.log(toDo);
        $(textSec).val(toDo);

    });

    $(document).on('click', '.row', function() {
        
        console.log($(this));
    
        // Storage use variables
        var key = $(this)[0].firstChild.firstChild.data;
        console.log(key);
        var value = $(this)[0].firstElementChild.nextSibling.value;
    
        localStorage.setItem(key, value);
    
    })

});
