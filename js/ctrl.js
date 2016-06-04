angular.module('quoteBook').controller('ctrl', function($scope, dataService) {


	$scope.quoteArray = dataService.getQuotes();
	var author = prompt('Bro... What\'s your name?');


	$scope.addQuote = function() {
		var quoteToAdd = {
			text: $scope.newQuote,
			author: author || 'Anonymous'
		};

		dataService.getQuotes().unshift(quoteToAdd);
		$scope.newQuote = '';
	};

});