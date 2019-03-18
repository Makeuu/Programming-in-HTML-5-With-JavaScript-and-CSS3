var message = "Hello HTML 5"
function SayHelloJS(evt) {
    // alert("Hello API HTML 5");
    var el = document.getElementById('divMessage');
    if (el !== null) {
        el.innerHTML = message;
        el.style.backgroundColor = "coral";
    }
}