/// <reference path="../../scripts/jquery-1.10.2.js" />


//méthode each de jQuery
$(document).ready(function () {

    //Action 1 : Images opacity
    $('.dcell>img').css("opacity", "0.4");

    //Action 2 : Abonnements des images du formulaire
    $('.dcell>img')
        .mouseenter(MouseEnterHandler)
        .mouseout(MouseOutHandler);

    //Action 3 : coder le gestionnaire MouseEnter 
    function MouseEnterHandler() {
        //css
        var objCss = {
            'font-size':'larger',
            'font':'bold',
            'color': 'black',
            'background-color': 'orange'
        }
        $(this).css('opacity', '1').addClass('anim');
        $(this).siblings('input').css(objCss);
        

        var test = $('#divInfo');
        $('#infoGif').show();
        $('#info').html('Consultation du produit : '
            + $(this).siblings('label').text()
            + ' du rayon '
            + $(this).parents('.drow').attr('id')
            //+ $(this).parentsUntil('.dtable').attr('id')
            + 'avec une commande en cours de '
            + $(this).siblings('input').val()
        )
    };

    //Action 4 : coder le gestionnaire MouseOut
    function MouseOutHandler() {
        $(this).css('opacity', 0.4).removeClass('anim');
        $(this).siblings('input').css('background-color', '');
        $('#info').empty().removeClass('input');
        $('#infoGif').hide();
    };
});