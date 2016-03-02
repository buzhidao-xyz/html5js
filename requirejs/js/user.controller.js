//定义模块UserController
define(["app", "commoncontroller", "userservice"], function (app, commoncontroller){
	var RequireJSApp = app.RequireJSApp;

	RequireJSApp.controller("UserController", ['$scope', '$controller', 'UserService', function ($scope, $controller, $UserService) {
		var CommonController = $controller('CommonController', {$scope: $scope});

		alert($UserService.testdata.a);
		$UserService.getDatatest();
		alert($UserService.testdata.a);
	}]);
});