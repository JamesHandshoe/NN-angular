//this creates the app module
var myNinjaApp = angular.module('myNinjaApp', []);

//controls a section of DOM
myNinjaApp.controller('NinjaController', ['$scope', function($scope){

	$scope.removeNinja = function(ninja){
		var removedNinja = $scope.ninjas.indexOf(ninja);
		$scope.ninjas.splice(removedNinja, 1);
	};

	$scope.addNinja = function() {
		$scope.ninjas.push({
			name: $scope.newninja.name,
			belt: $scope.newninja.belt,
			rate: parseInt($scope.newninja.rate),
			available: true
		});

		$scope.newninja.name = "";
		$scope.newninja.belt = "";
		$scope.newninja.rate = "";
	};

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
			available: true
		},
		{
			name: "Ryu",
			belt: "Orange",
			rate: 10,
			available: true
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

