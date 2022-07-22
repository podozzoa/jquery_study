$(document).ready(function() {
    $("#mybtn1").click(function() {
        alert($("#nickName").val());
        $("#nickName").val("").focus();
    });

    $("#testForm").submit(function() {
        return confirm($("#memberName").text() + " 전송하시겠습니까?");
    });
});