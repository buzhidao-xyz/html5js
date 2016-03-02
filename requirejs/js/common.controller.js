//定义模块CommonController
define(["app"], function (app){
	var RequireJSApp = app.RequireJSApp;

	RequireJSApp.controller("CommonController", ['$scope', function ($scope) {
		$scope.helloworld = "Hello World!";

		$scope.newhelloworld = function () {
			$scope.helloworld = "New Hello World!";
		}
	}]);
});