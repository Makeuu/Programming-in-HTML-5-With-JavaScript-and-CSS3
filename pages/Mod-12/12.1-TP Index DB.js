//<reference path="../../scripts/jquery-1.10.2.js" />

var i = 1;
function Create_IndexedDB() {
    var dbObject = window.indexedDB;
    var openRequest = dbObject.open("StagesTrainer", 1);

    openRequest.onupgradeneeded = function (event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("Stages", {
            keyPath: 'id',
            autoIncrement: true
        });
        objectStore.createIndex("indexStage", "id", { unique: true });
        //Base est créée
        var infoDB = 'La base' + db.name + ' - Version'
            + db.version + ' créée !';
        var infoStore = db.objectStoreNames[0].length > 0 ?
            db.objectStoreNames[0].toString() : 'indéfini';
        var infoObjectStore = 'Le magasin est ' + infoStore;
        var div = $('#msg').empty().append(infoDB).append('<br />')
            .append(infoObjectStore);
        //
    };
}

function AddStage_IndexedDB() {
    var dbObject = window.indexedDB;
    //Ouverture de la BDD
    var openRequest = dbObject.open("StagesTrainer", 1)
    var db;

    openRequest.onsuccess = function (e) {
        db = e.target.result;
        try {
            $('#msg').empty();
            var transaction = db.transaction('Stages', 'readwrite');
            transaction.onerror = function (e) {
                //
            }
            transaction.oncomplete = function (e) {
                //
            }
            var store = transaction.objectStore('Stages');
            //Définition du modèle
            var d = new Date();
            var today = d.toLocaleDateString();
            var course = {
                id: 'jQuery - ' + i,
                courseName: 'jQuery Version ' + i,
                imgPath: '/Images/evr_' + i.toString() + '.jpg',
                insertDate: today
            };
            var opAdd = store.add(course);
            opAdd.onsuccess = function (ev) {
                var id = opAdd.result;
                var requestGet = store.get(id);
                requestGet.onsuccess = function (ev) {
                    var course = requestGet.result;
                    $('#msg')
                        .append(course.courseName)
                        .append("<img class='thumbnail' src=" + course.imgPath + "/>");
                        i++;
                }
            }
        } catch (e) {
            console.log(e);
        }
    };

    openRequest.onerror = function (e) {
        //
    }
}