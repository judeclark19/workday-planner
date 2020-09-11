$(function () {
  //array of hours
  var hoursOfTheDay = [
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
  ];
  //loop the array
  for (let i = 0; i < hoursOfTheDay.length; i++) {
    var newRow = $("<div class='row'>");

    var hourDisplay = $("<div class='col-sm-1 hour'>").text(hoursOfTheDay[i]+".00");
    hourDisplay.attr("data-hour", hoursOfTheDay[i])

    var notesInputEl = $("<div class='col-sm-10 time-block'>");

    var textArea = $("<textarea>");
    notesInputEl.append(textArea);

    var saveButton = $("<button class='col-sm-1 saveBtn'>").text(
      "click to save"
    );

    newRow.append(hourDisplay, notesInputEl, saveButton);

    $(".container").append(newRow);
  }
  console.log(moment().format("[The hour is is] HH"));

//   if ()
});
