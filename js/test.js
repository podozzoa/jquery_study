$(document).ready(function() {
    $("a").click(function () { // tag
        alert($(this).text());
    });
    $(".ct").click(function() { // .class
        return confirm($(this).text()+ " 이동하시겠습니까?");
    });
    $(":button").click(function () { //:type
        alert($(this).val() + "번이 클릭했다!");
    });
    $("#btn2").click(function() { //#id
        alert($(this).val());
    });
});


/*
function clickTest() {
    alert("color");
}

function clickTest1(text) {
    alert(text);
}

*/