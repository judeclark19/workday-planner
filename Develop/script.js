$(function () { //document ready

  var now = moment();

  var currentHour = 12;
    // var currentHour = moment().format("HH");
  var currentDate = now.format("dddd, D MMMM");
//   var currentTime = now.format("HH:mm:ss");
  $("#todays-date").text(currentDate);

  setInterval(function () {
    var d = new Date();
    var n = d.toLocaleTimeString();
    $("#current-time").text(n);
  }, 1000);

  var hoursOfTheDay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

  //loop the array
  for (let i = 0; i < hoursOfTheDay.length; i++) {
    var newRow = $("<div class='row'>");

    var hourDisplay = $("<div class='col-sm-1 hour'>").text(
      hoursOfTheDay[i] + ".00"
    );

    var notesInputArea = $("<textarea class='description col-sm-10'>");
    // notesInputArea.text("(no notes. type here to add notes)")
    notesInputArea.attr("data-hour", hoursOfTheDay[i]);


    if (notesInputArea.attr("data-hour") < currentHour) {
        notesInputArea.addClass("past");
    } else if (notesInputArea.attr("data-hour") == currentHour) {
        notesInputArea.addClass("present");
    } else {
        notesInputArea.addClass("future");
    }

    //If a note is already stored, display it on page load
   if (localStorage.getItem(hoursOfTheDay[i])!=null){
   notesInputArea.text(localStorage.getItem(hoursOfTheDay[i]))
   }

    var saveButton = $("<button class='col-sm-1 saveBtn'>").text(
      "click to save"
    );
    saveButton.attr("data-hour", hoursOfTheDay[i]);

    newRow.append(hourDisplay, notesInputArea, saveButton);

    $(".container").append(newRow);

  }

  //store new notes when save is clicked
  $(document).on("click", ".saveBtn", function (event) {
      var storageHour = $(this).attr("data-hour")
      var storageText = $(this).siblings(".description").val()

    localStorage.setItem(storageHour, storageText);

  });
});