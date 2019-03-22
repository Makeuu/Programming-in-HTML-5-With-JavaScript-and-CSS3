//Démo 1 : méthode exécutée de manière asynchrone / puis appelle un callback
function MethodAsync(message, cb) {
   console.log(message);
   setTimeout(function () {
       //console.log(message);
       //generateFibonacciSeries(42);
       cb();
   }, 3000);
}

MethodAsync('Open DB Connection', function () {
   console.log('retour open - ');
})

//*************************

//Démo 2 : méthode exécutée de manière asynchrone / 
//puis appelle un callback success ou callback error 
// var i = 1;
// function MethodAsync(message, cb, error) {
//     console.log(message);
//     setTimeout(function () {
//         generateFibonacciSeries(40);
//         if (i < 41) {
//             cb(i);
//             i++;
//         }
//         else {
//             error('Erreur');
//         }
//     }, 3000);
// }

// MethodAsync('Open DB Connection',
//    function (result) {
//        console.log('retour open - ' + result.toString());
//    },
//    function (msg) {
//        console.log('erreur open - ' + msg.toString());
//    }
// );

//*************************

//Démo 3 : chaîner plusieurs fonctions sur la fonction MethodAsync de Démo 2

// MethodAsync('Open DB Connection',
//    function (result) {
//        console.log('retour open - ' + result.toString());
//        //Appel
//        MethodAsync('Find User',
//            function (result) {
//                console.log('retour find - ' + result.toString());
//                //Appel
//                MethodAsync('Validate User',
//                    function (result) {
//                        console.log('retour validate - ' + result.toString());
//                        console.log("Fin de l'exécution ");
//                        //Appel
//                    },
//                    function (msg) {
//                        console.log('erreur validate - ' + msg.toString());
//                    }
//                );
//            },
//            function (msg) {
//                console.log('erreur find - ' + msg.toString());
//            }
//        );
//    },
//    function (msg) {
//        console.log('erreur open - ' + msg.toString());
//    }
// );

//*************************
//Démo 4 : Objet Promise
// var i = 1;
// function MethodAsync(message) {
//     //test objet promise
//     if (typeof Promise === "undefined") {
//         alert("Promise not defined");
//         return
//     }
    
//     console.log(message);
//     //objet promise
//     return new Promise(function (resolve, reject) {
//         //code asynchrone
//         setTimeout(
//             function () {
//                 //notify
//                 //generateFibonacciSeries(10);
//                 if (i < 10) {
//                     //f();
//                     resolve(i);
//                     i++;
//                 }
//                 else {
//                     reject(Error(i));
//                 }
//             }, 3000);
//     });
// };

// MethodAsync('open DB Connection').then(
//    function (result) {
//        console.log('retour open - ' + result.toString());
//    },
//    function (msg) {
//        console.log('erreur open - ' + msg.toString());
//    }
// );

//Pass a function to promise
// MethodAsync(refreshContactList).then(
//     function (result) {
//         console.log('retour open - ' + result.toString());
//     },
//     function (msg) {
//         console.log('erreur open - ' + msg.toString());
//     }
//  );
//  function refreshContactList() {
//     console.log('DB Connection function');
// }



// MethodAsync('Open DB Connection')
//    .then(
//    function (result) {
//        console.log('retour open - ' + result.toString());
//    })
//    .catch(
//    function (msg) {
//        console.log('erreur open - ' + msg.toString());
//    });


//***************************
//Démo 5 : chaînage (composition) avec objet Promise
// MethodAsync('1 - Open DB Connection')
//    .then(function (result) {
//        console.log('retour open - ' + result.toString());
//        MethodAsync('2 - Find User')
//            .then(function (result) {
//                console.log('retour find - ' + result.toString());
//                MethodAsync('3 - ValidateUser')
//                    .then(function (result) {
//                        console.log('retour validate - ' + result.toString());
//                        MethodAsync('4 - Do Stuff')
//                            .then(function (result) {
//                                console.log('retour stuff fin - ' + result.toString());
//                            });
//                    });
//            });
//    });

//***************************
//Démo 6 : refactorisation
// function OpenDBConnection() {
//     return MethodAsync('Open DB Connection')
//         .then(
//             function (result) {
//                 console.log('func retour open - ' + result.toString());
//             }
//         )
//         .catch(
//             function (error) {
//                 console.log('Error : ' + error.toString());
//                 throw 'Error final';
//             }
//         )
// };

// function findUser() {
//     return MethodAsync('Find User')
//         .then(
//             function (result) {
//                 console.log('func retour find - ' + result.toString());
//             }
//         )
//         .catch(
//             function (error) {
//                 console.log('Error : ' + error.toString());
//                 return;
//             }
//         )
// };

// function validateUser() {
//     return MethodAsync('Validate User')
//         .then(
//             function (result) {
//                 console.log('func retour validate - ' + result.toString());
//             }
//         )
//         .catch(
//             function (error) {
//                 console.log('Error : ' + error.toString());
//                 return;
//             }
//         )
// };

// function doStuff() {
//     return MethodAsync('Do stuff')
//         .then(
//             function (result) {
//                 console.log('func retour do stuff - ' + result.toString());
//             },
//         )
//         .catch(
//             function (error) {
//                 console.log('Error : ' + error.toString());
//                 return;
//             }
//         )
// };

//**************************************
// var q = new MethodAsync('Start')
// q
//    .then(OpenDBConnection)
//    .then(findUser)
//    .then(validateUser)
//    .then(doStuff)
//    .then(function () { console.log('Fin opération'); })

//***************************************

//MethodAsync('OpenDBConnection')
//    .then(findUser)
//    .then(validateUser)
//    .then(doStuff)
//    .then(function () { console.log('Fin opération'); })

//**************************************
// MethodAsync('Start')
//     .then(OpenDBConnection)
//     .then(findUser)
//     .then(validateUser)
//     .then(doStuff)
//     .then(function () { console.log('Fin opération'); })


//**************************************
//MethodAsync('Start')
//    .then(function (result) {
//        console.log('Open retour - ' + result.toString());
//    },
//    function (error) {
//        alert('Error : ' + error.toString());
//    })
//    .then(findUser)
//    .then(validateUser)
//    .then(doStuff)
//    .then(function () { console.log('Fin opération'); })


//***************************
//Démo 7 : All

//(function DoParallel() {
//    var p1 = OpenDBConnection();
//    var p2 = findUser();
//    var p3 = validateUser();
//    var p4 = doStuff();   
//    Promise.all([p1, p2, p3, p4])
//        .then(function () { console.log('Fin des opérations'); })
//    //alert("Hello");
//})();


//Fibonacci
var results = [];
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
    results.length = 0;
    for (var i = 0; i <= n - 1; i++) {
        results.push(calculateNextFibonacciValue(i));
    }
    results.forEach(function (value) {
        //console.log(value);
    })
}


