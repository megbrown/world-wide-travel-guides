"use strict";

myApp.controller("BookCtrl", function($scope, BookFactory) {

	BookFactory.getBooks()
	.then( (books) => {
		$scope.books = books.data.guides;
	});

});