var w = function (num) {
    //Instance du Worker
    var worker = new Worker('../../Scripts/fib2-worker1.js');
    //Retour du worker succès
    worker.onmessage = retourWorkerSuccess;
    //Retour du worker erreur
    worker.onerror = retourWorkerError;
    //Appel au worker

    worker.postMessage(parseInt(num));
    StartTimer();

    this.TerminateWorker = function TerminateWorker() {
        worker.terminate();
        $('#message').empty();
        $('#message').text('Worker en cours Terminé');
    }
}



function retourWorkerSuccess(e) {
    ClearTimer(e);
    
    anim.hidden = true;
    //var test = e.data;
}

function retourWorkerError(e) {
    $('#message').empty();
    var msg = [
      'ERROR: Line ', e.lineno, ' in ', e.filename, ': ', e.message
    ].join('');

    $('#message').text(msg);
}


//compteur
var countDownDate = 0;
var timer;
function StartTimer() {
    timer = setInterval(function () {
        countDownDate += 500;
        console.log(countDownDate);
    }, 500);
}

function ClearTimer(e) {
    clearInterval(timer);
    $('#message').empty();
    $('#message').text(e.data + " - Secondes : " + countDownDate / 1000);
}
