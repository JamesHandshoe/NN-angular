//this creates the app module
var myNinjaApp = angular.module('myNinjaApp', []);

//controls a section of DOM
myNinjaApp.controller('NinjaController', ['$scope', function($scope){

	$scope.message = "hey whats up";

	$scope.ninjas = ['yoshi', 'crystal', 'ryu', 'shaun'];
}]);

//.config runs before application runs
myNinjaApp.config(function(){

});


//.run runs after config and as application runs
myNinjaApp.run(function(){

});

