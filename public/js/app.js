angular.module('flaxon', ['flaxonRoutes'])

.controller('MainCtrl', function() {

	var vm = this;

	vm.message = 'Harvard 2012 Alumni'

})

.controller('AboutCtrl', function() {

	var vm = this;

	vm.message = 'BS in Microbiology'

})

.controller('BooksCtrl', function() {

	var vm = this;
	vm.message = 'Wrote 1,003 books on genetics'

})