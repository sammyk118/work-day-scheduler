var date = moment().format("MMM Do YY");
$("#currentDay").append(date);

function pastFuture() {
    currHour = moment().hours();
    console.log(currHour);
    $(".time-block").each(function(){
        var calHour = parseInt($(this).attr("id"))

        if (calHour < currHour) {
            $(this).addClass("past")
        }
        else if (calHour > currHour) {
            $(this).addClass("future");
        }
        else {
            $(this).addClass("present");
        }
    })
}

pastFuture();