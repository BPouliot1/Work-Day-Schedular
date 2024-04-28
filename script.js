// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  
  function updateColors() {
    $(".time-block").each(function() {
      let hour = parseInt($(this).attr("id").split("-")[1]);
      let currentHour = dayjs().hour();

      if (hour < currentHour) {
        $(this).removeClass("present future").addClass("past");
      } else if (hour === currentHour) {
        $(this).removeClass("past future").addClass("present");
      } else {
        $(this).removeClass("past present").addClass("future");
      }
    });
  }
  updateColors();

  setInterval(updateColors, 60000);

  $(".saveBtn").click(function() {
    let hour = $(this).parent().attr("id");
    let eventText = $(this).siblings(".description").val();
    localStorage.setItem(hour, eventText);
  });
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  
  $("#currentDay").text(dayjs().format("dddd, MMMM D, YYYY"));
});
