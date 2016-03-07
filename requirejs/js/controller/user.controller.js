//定义模块UserController
define(["app", "commoncontroller", "userservice"], function ($app, $commoncontroller){
	var WebApp = $app.WebApp;

	var init = function (){
		WebApp.controller("UserController", ['$scope', '$controller', 'UserService', function ($scope, $controller, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			alert($UserService.testdata.a);
			$UserService.getDatatest();
			alert($UserService.testdata.a);
		}]);
	}

	return {
		init: init
	}
});