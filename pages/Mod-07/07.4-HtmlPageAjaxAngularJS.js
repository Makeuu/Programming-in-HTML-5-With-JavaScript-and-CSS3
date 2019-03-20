
/// <reference path="../../scripts/angular.js" />

'use strict';
//Module Angular
var appNorthwind = angular.module('appNorthwind', []);
//Controller
appNorthwind.controller("ctlNorthwind", function ($http) {
    var vm = this;
    vm.Customers = [];
    vm.initEvent = function () {
        var url = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers";
        var config = {
            headers: {
                "accept": "application/json"
            }
        }
        $http.get(url, config).then(successCallback, errorCallback);


        function successCallback(data) {
            //
            var results = data.data.value;
            //var log = [];
            angular.forEach(results, function (v, k) {
                this.push(new Customer(v.CustomerID, v.CompanyName));
            }, vm.Customers);

        }
        function errorCallback(error) {
            alert("Erreur ajax");
        }
    }
});


appNorthwind.controller("ctlNorthwind1", function ($scope, $http) {

    $scope.Customers = [];

    $scope.initEvent = function () {
        var url = "https://services.odata.org/V3/Northwind/Northwind.svc/Customers";
        var config = {
            headers: {
                "accept": "application/json"
            }
        }
        $http.get(url, config).then(successCallback, errorCallback);


        function successCallback(data) {
            //
            var results = data.data.value;
            //var log = [];
            angular.forEach(results, function (v, k) {
                this.push(new Customer(v.CustomerID, v.CompanyName));
            }, $scope.Customers);

        }
        function errorCallback(error) {
            alert("Erreur ajax");
        }
    }
});


//MODELE - ENTITE (= TABLE DB)
var Customer = function (customerID, companyName) {
    this.customerID = customerID,
    this.companyName = companyName
}
