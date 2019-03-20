/// <reference path="../../scripts/jquery-1.10.2.js" />

function getHTML() {
    var options = {
        url : "./books.html",
        type : 'GET',
        datatype : 'html',
        cache : false,
        success : monCallBack,
        error : monCallBackError
    }
    return $.ajax(options);
    //return $.get(url = "./books.html", callback = monCallBack);
}
function monCallBack(data){
    try{
        var elements = $(data).filter('div').addClass("dcell");
        elements.slice(0,elements.length/2).appendTo("#row1");
        elements.slice(elements.length/2).appendTo("#row2");
        //$('#MonDiv').html(elements);
    }catch(error){
        console.log(error);
    }
}

function monCallBackError(err){
    console.log(err);
}

$(document).ready(function () {
    getHTML();
});
