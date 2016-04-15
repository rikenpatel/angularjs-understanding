// MODULE
//var angularApp = angular.module('angularApp', []);

// CONTROLLERS
//angularApp.controller('mainController', ['$scope', function ($scope) {
    
//}]);


var Person = function(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
}

function logPerson ()
{
     var riken = new Person('Riken','Patel');
    console.log(riken);
}

logPerson();