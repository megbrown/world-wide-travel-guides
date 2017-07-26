"use strict";

myApp.factory("BookFactory", function($q, $http) {

	function getBooks() {

		return $q( (resolve, reject) => {
			$http.get("../data/guides.json")
			.then( (books) => {
				resolve(books);
			})
			.catch( (err) => {
				reject(err);
			});
		});
	}

	return { getBooks };
});

//controller to leverage factory
myApp.controller("BookCtrl", function($scope, BookFactory) {

	BookFactory.getBooks()
	.then( (books) => {
		console.log(books.data.guides);
		$scope.books = books.data.guides;
	});

});