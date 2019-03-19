///<reference path="../../scripts/jquery-1.10.2.js"

function ListenerClick() {
    var btn = $('#btnOrder').click(orderjQuery);
};

function orderjQuery(evt){
    var elements = $('.dcell>img');
    // for(var i =0; i< elements.length; i++){
    //     console.log("Element: " + elements[i].tagName + " " + elements[i].scr);
    // }
    elements.each(function(i,el){
        console.log("Element: " + $(this).prop('src') + " " + $(this).prop('tagName'));
    });
    // elements.forEach(element => {
    //     console.log("Element: " + element.tagName + " " + element.src);
    // });
    evt.preventDefault();
};