/// <reference path="../../scripts/jquery-1.10.2.js" />
/// <reference path="../../scripts/jquery.validate.js" />


function ValidateForm() {
    $.validator.addMethod('noJames', function(value, element){
        return (!value.endsWith('007'));
    })

    $('#MyForm').validate(
        //Règles
        {
            rules:{
                firstname:{
                    required: true,
                    noJames: true,
                    minlength: 4
                },
                email:{
                    required: true,
                    email: true
                },
            },
            messages:{
                firstname:{
                    required: "Saisir un nom ",
                    noJames: "Pas de 007",
                    minlength: "Minimum 4 caractères"
                },
                email:{
                    required: "Saisir un email ",
                    email: "Votre adresse mail n'est pas valide"
                }
            },
            submitHandler: function(form){
                alert("Ajax");
                var test = $(form).serializeArray();
                console.log(test);
            }
        }
    )
}

$(document).ready(function () {
    //Action sur le DOM
    ValidateForm();
    //Test sur le Submit Input
    $('input').on('blur', function(){
        if($('#MyForm').valid()){
            $('#submit').prop('disabled', false);
        }else{
            $('#submit').prop('disabled', 'disabled');
        }
    })
});
