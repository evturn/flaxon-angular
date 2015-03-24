angular.module('flaxonRoutes', ['ngRoute'])

.config(function($routeProvider, $locationProvider) {

	$routeProvider
		.when('/', {
			templateUrl : 'views/about.html',
			controller	: 'AboutCtrl',
			controllerAs: 'about'
		})

});