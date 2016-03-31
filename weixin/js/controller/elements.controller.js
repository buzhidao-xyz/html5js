//elements.controller.js
define(["require", "app", "function", "commoncontroller", "elementsservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('ElementsController', [
		'$scope',
		'$controller',
		'$route',
		'$routeParams',
		'$location',
		'ArticleService',
		function ($scope, $controller, $route, $routeParams, $location, $ElementsService){
			var CommonController = $controller('CommonController', {$scope: $scope});


		}
	])
});