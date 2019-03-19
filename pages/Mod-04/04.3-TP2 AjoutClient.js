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
    var elementid = document.getElementById('custId');
    elementid.value = customer.Get_CustomerID();
    //
    var elementname = document.getElementById('custName');
    elementname.value = customer.Get_CompanyName();
    //Ajouter au tableau de Customers
    customers.push(customer);
    BindToIHM(customer);
}

//Liaison de données - 2
function BindToIHM(customer) {
    var elementname = document.getElementById('nbCust');
    elementname.innerHTML = "Nombre de clients : " + customers.length;
    //Récupérer la liste de UL
    var elementname = document.getElementById('listCust');
    //Créer un LI
    var node = document.createElement("LI");
    //Ajouter une classe css (Bootstrap)
    node.className = 'list-group-item';
    //Ajouter du texte et l'attacher au LI
    var textnode = document.createTextNode(customer.ToString());
    node.appendChild(textnode);
    //Attacher le LI à la UL
    elementname.appendChild(node);
}