function ListenerClick() {
    try{
        var btn = document.getElementById('btnOrder');
        if(btn != null){
            btn.addEventListener('click', orderjQuery);
        } else {
            console.log('btn is null');
        }   
    } catch (error){
        console.log("general error" + error);
    }
};

function orderjQuery(evt){
    var elements = document.querySelectorAll('.dcell>img');
    // for(var i =0; i< elements.length; i++){
    //     console.log("Element: " + elements[i].tagName + " " + elements[i].scr);
    // }
    elements.forEach(element => {
        console.log("Element: " + element.tagName + " " + element.src);
    });
    evt.preventDefault();
};