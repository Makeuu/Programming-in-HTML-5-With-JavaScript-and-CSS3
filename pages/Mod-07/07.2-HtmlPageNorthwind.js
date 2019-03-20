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
    $.ajax(
        {
            //Action 2 : options
            url: "https://services.odata.org/V3/Northwind/Northwind.svc/Customers",
            type: "GET",
            dataType: "json",
            success: function (data) {
                var results = data.value;
                $.each(results, ParseData);

                function ParseData(i, item) {
                    var cust = new Customer(item.CustomerID, item.CompanyName);
                    customerList.push(cust);
                }
                $.each(customerList, function (i, customer) {
                    $('#CustomerList').append($('<option>',
                        { value: customer.CustomerID, text: customer.CompanyName }));
                });
                $('#CustomerList').show();
            },
            error: function (err) {
                alert(err);
            }
        }
    );
}

function CallAjaxOrdersForClient(customerid) {
    //Action 1 : appel AJAX via jQuery
    var url = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers('" + customerid
        + "')/Orders?$select=OrderID,ShipCity,ShipCountry";
    
    $.ajax(
        {
            url: url,
            type: "GET",
            dataType: "json",
            success: function(data){
                $('#textIntro').empty();
                $('#customer').empty();
                $('#OrderList').empty();
                var results = [];
                var results =  data.value;
                var numberOrders = results.length;
                $('#customer').append(numberOrders + ' commandes pour : ' + customerid);
                $.each(results, function(i,item){
                    var info = '<li>OrderID ' + item.OrderID
                        + ' - ShipCity: ' + item.ShipCity
                        + ' - ShipCountry: ' + item.ShipCountry
                        + '</li>';
                    $('#OrderList').append(info);
                })
            },
        }
    )
}