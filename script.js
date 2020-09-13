$(function () {
  //document ready

  // hard code hour, uncomment for testing purposes
  // var currentHour = 12;
  var currentHour = moment().format("HH");
  var currentDate = moment().format("dddd, D MMMM");

  //display current date
  $("#currentDay").text(currentDate);

  //Display current time every second
  setInterval(function () {
    var d = new Date();
    var n = d.toLocaleTimeString();
    $("#current-time").text(n);
  }, 1000);

  var hoursOfTheDay = ["09", "10", "11", "12", "13", "14", "15", "16", "17"];

  //Loop: dynamically creates the agenda rows using the hoursOfTheDay array
  for (let i = 0; i < hoursOfTheDay.length; i++) {
    //create a row
    var newRow = $("<div class='row'>");

    //create the hour 'cell'
    var hourDisplay = $("<div class='col-sm-1 hour'>").text(
      hoursOfTheDay[i] + ".00"
    );

    //create the textarea
    var notesInputArea = $(
      "<textarea class='description col-sm-10 time-block'>"
    );
    // add metadata to the textarea
    notesInputArea.attr("data-hour", hoursOfTheDay[i]);

    //apply past, present, future to the text areas
    if (notesInputArea.attr("data-hour") < currentHour) {
      notesInputArea.addClass("past");
    } else if (notesInputArea.attr("data-hour") == currentHour) {
      notesInputArea.addClass("present");
    } else {
      notesInputArea.addClass("future");
    }

    //If a text note is already stored, display it upon page load
    if (localStorage.getItem(hoursOfTheDay[i]) != null) {
      notesInputArea.text(localStorage.getItem(hoursOfTheDay[i]));
    }

    //build the save button
    var saveButton = $("<button class='col-sm-1 saveBtn'>");
    var saveIcon = $("<i class='fas fa-save'>");
    saveButton.append(saveIcon);
    //include metadata
    saveButton.attr("data-hour", hoursOfTheDay[i]);

    //append cells and row together and to the container div
    newRow.append(hourDisplay, notesInputArea, saveButton);
    $(".container").append(newRow);
  }

  //store new notes when a save button is clicked
  $(document).on("click", ".saveBtn", function (event) {
    var storageHour = $(this).attr("data-hour");
    var storageText = $(this).siblings(".description").val();

    localStorage.setItem(storageHour, storageText);
  });
});
