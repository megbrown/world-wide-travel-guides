"use strict";

const myApp = angular.module("app", ["ngRoute"]);

myApp.config( ($routeProvider) => {
	$routeProvider
	.when("/", {
		templateUrl: "partials/guide-list.html",
		controller: "BookCtrl"
	})
	.otherwise("/");
});
