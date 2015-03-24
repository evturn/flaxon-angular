angular.module('flaxonRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/about', {
			templateUrl : 'views/about.html',
			controller	: 'AboutCtrl',
			controllerAs: 'about'
		})
		.when('/books', {
			templateUrl : 'views/books.html',
			controller  : 'BooksCtrl',
			controllerAs: 'books'
		})
		.when('/awards', {
			templateUrl : 'views/awards.html',
			controller  : 'AwardsCtrl',
			controllerAs: 'awards'
		});


});