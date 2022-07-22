$(document).ready(function() {
    $("#hideBtn").click(function() {
        $("#imgView").hide(500, function() {
            $("#stateInfo").html("<font size=7 color='lime'>" + "안음이 좋아" + "</font>");
        });
    });

    $("#showBtn").click(function() {
        $("#imgView").show(500, function() {
            $("#stateInfo").html("<font size=7 color='green'>" + "안음!" + "</font>");
        });
    });
})


