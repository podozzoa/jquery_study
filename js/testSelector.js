$(document).ready(function () {

    $("#testBtn").click(function() {
        alert($(this).val());
    });

    $(".student, .teacher").click(function (){
        $("#result").html("<font color=blue>" + $(this).text() + "</font>");
    });
});