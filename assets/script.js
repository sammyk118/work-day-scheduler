var date = moment().format("MMM Do YY");
$("#currentDay").append(date);

function pastFuture() {
    currHour = moment().hours();
    console.log("current hour: ", currHour);
    $(".time-block").each(function(){
        var calHour = $(this).attr("id");

        if (calHour < currHour) {
            //each class has a different background-color
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

function render() {
    $(".time-block").each(function () {
        var currId = $(this).attr("id");
        var eventInf = localStorage.getItem(currId);

        if (eventInf !== null) {
            $(this).children(".eventInf").val(eventInf);
            //console.log(this.children);
        }
    });
}

$(".saveBtn").on("click", function () {
    var currId = $(this).parent().attr("id");
    var eventInf = $("input").val().trim();

    localStorage.setItem(currId, eventInf);
    // console.log(currId, eventInf);
    // console.log(eventInf);
})
    
    
pastFuture();
render();