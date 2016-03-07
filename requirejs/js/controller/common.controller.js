//定义模块CommonController
define(["app"], function ($app){
	var WebApp = $app.WebApp;

	WebApp.controller("CommonController", ['$scope', function ($scope) {
		$scope.helloworld = "Hello World!";

		$scope.newhelloworld = function () {
			$scope.helloworld = "New Hello World!";
		}
	}]);
});