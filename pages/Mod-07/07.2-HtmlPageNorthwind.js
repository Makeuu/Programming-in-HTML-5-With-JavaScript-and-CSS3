/// <reference path="../../scripts/jquery-1.10.2.js" />

//MODELE - ENTITE (= TABLE DB)
var Customer = function (customerID, companyName) {
    this.CustomerID = customerID,
    this.CompanyName = companyName
}
//Tableau de Customers
var customerList = [];


function CallAjaxCustomers() {
    //Action 1 : appel AJAX via jQuery pour l'affichage des Customers
   
}

function CallAjaxOrdersForClient(customerid) {
    //Action 1 : appel AJAX via jQuery
    var url = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers('" + customerid
        + "')/Orders?$select=OrderID,ShipCity,ShipCountry";

}