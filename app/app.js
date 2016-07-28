//this creates the app module
var myNinjaApp = angular.module('myNinjaApp', []);

//controls a section of DOM
myNinjaApp.controller('NinjaController', ['$scope', function($scope){

	$scope.ninjas = [
		{
			name: "Yoshi",
			belt: "Green",
			rate: 50,
			available: true
		},
		{
			name: "Crystal",
			belt: "Yellow",
			rate: 30,
			available: false
		},
		{
			name: "Ryu",
			belt: "Orange",
			rate: 10,
			available: false
		},
		{
			name: "Shaun",
			belt: "Black",
			rate: 1000,
			available: true
		}
	];
}]);



//.config runs before application runs
myNinjaApp.config(function(){

});


//.run runs after config and as application runs
myNinjaApp.run(function(){

});

