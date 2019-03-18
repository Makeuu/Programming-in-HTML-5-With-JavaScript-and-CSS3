
function messageHandler(e) {
    //if (e.data > 40) {
    //    throw new Error("erreur fib > " + e.data);
    //    //("erreur " + e.data);
    //}
    //else {
    //    generateFibonacciSeries(e.data);
    //}
    generateFibonacciSeries(e.data);
}

var resultsFib = [];

function calculateNextFibonacciValue(n) {
    var s = 0;
    var returnValue;

    if (n == 0) {
        return (s);
    }
    if (n == 1) {
        s += 1;
        return (s);
    }
    else {
        return (calculateNextFibonacciValue(n - 1) + calculateNextFibonacciValue(n - 2));
    }
}

function generateFibonacciSeries(n) {
    resultsFib.length = 0;
    for (var i = 0; i <= n - 1; i++) {
        //if (i > 1000000) {
        //    var test = $('#Text2');
        //}
        resultsFib.push(calculateNextFibonacciValue(i));
    }
    resultsFib.forEach(function(value) {
        console.log(value);
    });
    
    //retour vers l'appelant
    postMessage("Ok Fibonacci done for " + n);
    close();
}

//j'écoute les appels et le déclenche le handler
addEventListener("message", messageHandler, true);

function UserException(message) {
    this.message = message;
    this.name = 'UserException';
}