angular.module('quoteBook').controller('ctrl', function($scope) {

	console.log($scope.newQuote);

	$scope.logItNow = function() {
		console.log($scope.newQuote);
	}
});