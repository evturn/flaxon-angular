angular.module('flaxon', ['flaxonRoutes'])

.controller('MainCtrl', function() {

	var vm = this;

	vm.message = 'Xmus Jaxon Flaxon-Waxon';

})

.controller('AboutCtrl', function() {

	var vm = this;

	vm.message = 'Harvard 2012 Alumni - BS in Microbiology';

})

.controller('BooksCtrl', function() {

	var vm = this;
	vm.message = 'Wrote 1,003 books on genetics';

})

.controller('AwardsCtrl', function() {

	var vm = this;
	vm.message = 'Time Man of the Year (4 times)';

});