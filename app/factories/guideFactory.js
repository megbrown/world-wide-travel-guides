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