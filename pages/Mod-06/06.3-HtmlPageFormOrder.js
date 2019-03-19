/// <reference path="../../scripts/jquery-1.10.2.js" />

$(document).ready(function () {


    //Images opacity
    $(".dcell>img").css('opacity', '0.4');
    //Abonnements mouseevents et click
    $('.dcell>img')
        .mouseenter(MouseEnterHandler)
        .mouseout(MouseOutHandler)
        .click(MouseClick);


    //Abonnement à la perte de focus et au changement dans la TextBox
    //Vérifie si une commande est passée
    $('.dcell>input').on('keyup change', function(e){
        //Tester si il y a plusieurs commandes
        testInputValue();
        //Activation du bouton commande
        //Test disabled via css bootstrap sur le bouton btnOrdedr
        if(newItems > 0){
            $('#btnOrder').removeClass('btn btn-info disabled');
            $('#btnOrder').addClass('btn btn-default');
        }
        else{
            $('#btn Order').removeClass('btn btn-default');
            $('#btnOrder').addClass('btn btn-info disabled');
        }
    });

    //Abonnement au focus : seléctionner le nombre déjà présent
    $('.dcell>input').on('focus', function (e){
        this.select();
        this.focus();
    });

    //Tester la valeur des TextBox (imput)
    var newItems = 0;
    function testInputValue(){
        newItems = 0;
        var result = $('.dcell>input').each(function (index, elem){
            var tot = parseInt($(elem).val());
            //Si jamais le input contient autre chose qu'un nomnre
            //onpourrait via onkey desactiver toute entée différente d'un nombre
            //on pourrait aussi utiliser un input type = number
            if(!Number.isNaN(tot)){
                if(tot > 0){
                    newItems += tot;
                }
            }
        });
    }

    //Abonnement au click du bouton Order
    //Affichage des commandes 
    $('#btnOrder').click(function(evt){
        testInputValue();
        console.log(newItems);
        if(newItems <= 0) {
            alert('Votre panier est vide !!');
            //evt.preventDefault();
        } else {
            //Commande globale le total de livres
            alert("Nous enregistrons votre commande pour un total de "
                + newItems + " livres jQuery!");
            //Détail de la commande globale
            DetailCommande();
            Commandes.forEach(function(el,i){
                alert(el.tot + " livre(s) " + el.name);
            })
            //Remettre les input à 0 pour une nouvelle commande
            //Vider le tableau de commande
            //Remettre le bouton à disable
            $('.dcell>input').val(0);
            Commandes = [];
            $('#btn Order').removeClass('btn btn-default');
            $('#btnOrder').addClass('btn btn-info disabled');
        }
        evt.preventDefault();
    })



    //Objet JavaScript : représente notre modèle de commande
    var CommandeObject = function (name, tot) {
        this.name = name,
            this.tot = tot
    }

    //Tableau des commandes 
    var Commandes = [];
    //Détail de la commande (itérer chaque input et récupérer le label associé)
    function DetailCommande(){
        var result = $('.dcell>input');
        for(var i = 0; i < result.length; i++){
            var tot = $(result[i]).val();
            if(tot > 0){
                var elName = $(result[i]).siblings('label').text()
                var cmd = new CommandeObject(elName, tot);
                //Commande[elName] = tot;
                //Commande.elName = tot;
                Commandes.push(cmd);
            }
        }
    }

    //MouseClick
    //Incrémenter la commande
    //Déclencher l'événement blur afin de vérifier si le bouton order peut être activé
    var i = 0;
    function MouseClick(){
        //Incrementer les inputs
        $(this).siblings('input').val(++i).trigger('blur');
        //Afficher le div du footer et resyet en phase avec l'affichage
        $(this).trigger("mouseenter");
    }

    //MouseEnterHandler
    function MouseEnterHandler() {
        $(this).css('opacity', '1').addClass('anim');
        $(this).siblings('input').css('background-color', 'orange');
        $('#info').html('Consultation du produit : '
            + $(this).siblings('label').text()
            + ' du rayon '
            + $(this).parents('.drow').attr('id')
            //+ $(this).parentsUntil('.dtable').attr('id')
            + ' avec une commande en cours de '
            + $(this).siblings('input').val()
        ).addClass('info');
        $('#infoGif').show();
    };
    //MouseOutHandler
    function MouseOutHandler() {
        $(this).css('opacity', '0.4').removeClass('anim');
        $(this).siblings('input').css('background-color', '');
        $('#info').empty().removeClass('info');
        $('#infoGif').hide();
        //Compteur des livres à zéro
        i = 0;
    };


    //Désactiver l'événement enter sur input afin de ne pas déclencher
    //l'événement click du bouton
    $('form input').on('keyup keypress', function(e){
        return e.which !== 13;
    });

});




