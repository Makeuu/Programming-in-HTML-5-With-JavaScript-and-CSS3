$(document).ready(function () {
    var options = {
        success: monCallback,
        cache: false
    }
    $.ajax("/Navigation/Navigation.html", options);

    function monCallback(data) {
        var elems = $(data).filter("nav[role*='navigation']");
        elems.appendTo("#header");
    }
});