$(document).ready(function() {


    // date display
    var now = moment().format('dddd, MMM Do ');
    $("#currentDay").text(now);


    // past, present, future color display
    function display() {

        var currentTime = moment().hour();

        $(".time-block").each(function() {

            var timeBlock = parseInt($(this).attr("id").split("hour-")[1]);

            if (timeBlock < currentTime) {
                $(this).addClass("past");
            } else if (timeBlock === currentTime) {
                $(this).addClass("present");
            } else {
                $(this).addClass("future");
            }

        });
    }
    display();


    // save button local storage 
    $(".saveBtn").click(function() {
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();

        localStorage.setItem(time, text);
    });


    // load previous text entries
    $("#hour-9 .description").val(localStorage.getItem("hour-9"));
    $("#hour-10 .description").val(localStorage.getItem("hour-10"));
    $("#hour-11 .description").val(localStorage.getItem("hour-11"));
    $("#hour-12 .description").val(localStorage.getItem("hour-12"));
    $("#hour-13 .description").val(localStorage.getItem("hour-13"));
    $("#hour-14 .description").val(localStorage.getItem("hour-14"));
    $("#hour-15 .description").val(localStorage.getItem("hour-15"));
    $("#hour-16 .description").val(localStorage.getItem("hour-16"));
    $("#hour-17 .description").val(localStorage.getItem("hour-17"));

});