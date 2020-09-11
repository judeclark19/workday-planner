$(function () {
  //array of hours

 
  var now = moment();
  var currentHour = 12;
   //   var currentHour = moment().format("HH");
 var currentDate = now.format('dddd, D MMMM');
 var currentTime = now.format('HH:mm:ss')
  $("#todays-date").text(currentDate)


 setInterval(function(){
    var d = new Date();
var n = d.toLocaleTimeString();
$("#current-time").text(n)
    },1000);

  var hoursOfTheDay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

  var textAreaIDs = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four", "five"]
  //loop the array
  for (let i = 0; i < hoursOfTheDay.length; i++) {
    var newRow = $("<div class='row'>");

    var hourDisplay = $("<div class='col-sm-1 hour'>").text(
      hoursOfTheDay[i] + ".00"
    );

    hourDisplay.attr("data-hour", hoursOfTheDay[i]);

    var notesInputEl = $("<div class='col-sm-10 time-block'>");

    notesInputEl.attr("data-hour", hoursOfTheDay[i]);

    if (notesInputEl.attr("data-hour") < currentHour) {
      notesInputEl.addClass("past");
    } else if (notesInputEl.attr("data-hour") == currentHour) {
      notesInputEl.addClass("present");
    } else {
      notesInputEl.addClass("future");
    }

    var textArea = $("<textarea>");
    notesInputEl.append(textArea);

    textArea.addClass("description");

    var saveButton = $("<button class='col-sm-1 saveBtn'>").text(
      "click to save"
    );
    saveButton.attr("data-hour", hoursOfTheDay[i]);

    newRow.append(hourDisplay, notesInputEl, saveButton);

    $(".container").append(newRow);
  }

  $(document).on("click", ".saveBtn",function() {
    console.log("clicked save button number "+ ($(this).attr("data-hour")))

    console.log(
        $(this).siblings()
    )

    
    // localStorage.setItem($(this).attr('data-hour'), $(this).siblings(".description").val);
});
  // console log clicked save
});
