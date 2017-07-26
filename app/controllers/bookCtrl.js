"use strict";

myApp.controller("BookCtrl", function($scope, BookFactory) {

	BookFactory.getBooks()
	.then( (books) => {
		console.log(books.data.guides);
		$scope.books = books.data.guides;
	});

});