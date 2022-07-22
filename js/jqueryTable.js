$(document).ready(function() {
    $("#testBtn").click(function() {
        $("#friend tr").css("background", "yellow");
        alert($("#friend tr").text());
		alert($("#friend tr").html());
        $("#friend tr:eq(2)").css("background", "yellow");
        $("#friend td:contains(당)").css("background", "orange"); 
    });
    $("#friend td").click(function() {
        alert($(this).text());
        var info = $(this).parent().children().eq(0).text();
        alert(info);
    });
    $("#tableName").click(function() {
        $(".table").slideToggle(1000, function() {
            if($(this).css("display") == "none") {
                $("#tableName").text("테이블 보기");
                //alert($(this).css("display"));
            } else {
                $("#tableName").text("테이블 접기");
                //alert($(this).css("display"));
            }
        });
    });
});
