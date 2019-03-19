//Modèle Customer
var Customer = function (companyname){
    var customerID = Math.floor((Math.random() *1000) + 1);
    var companyName = companyname;
    //Propriété ID
    this.Get_CustomerID = function(){
        return customerID;
    }
    this.Get_CompanyName = function(){
        return companyName;
    }
    this.Set_CompanyName = function(companyname){
        companyName = companyname;
    }
    this.ToString = function(){
        return companyName + " - " + customerID;
    }
}

//Création des instances de clients
//Liaison de données - 1
var customers = new Array();
function ApplyBinding(cust){
    var customer = new Customer(cust);
    $('#custID').text = customer.Get_CustomerID();
    $('#custName').text = customer.Get_CompanyName();
    customers.push(customer);
    BindToIHM(customer);
}

//Liaison de données - 2
function BindToIHM(customer) {
    $('#nbCust').text = "Nombre de clients :" + customers.length;
    //Récupérer la liste de UL
    var elementname = document.getElementById('listCust');
    $('#listCust').append('<li>' + customer.ToString() + '</li>');
    $('#listCust>li').addClass('list-group-item').css("margin", "2px");
    if(customers.length > 10) GoFilter();
}

function GoFilter(){
    alert("Nombre de clients : " + customers.length);
}