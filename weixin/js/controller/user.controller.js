//user.controller.js
define(["require", "app", "function", "commoncontroller", "userservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('UserController', [
		'$scope',
		'$controller',
		'$route',
		'$routeParams',
		'$location',
		'UserService',
		function ($scope, $controller, $route, $routeParams, $location, $UserService){
			var CommonController = $controller('CommonController', {$scope: $scope});

			$scope.getUserProfile = function (){
				var params = $location.search();
				//Service交互 - getUserProfile
				$UserService.getUserProfile({});
				//监听事件 - getUserProfile.success
				$scope.$on('getUserProfile.success', function (event, e){
					$scope.$userprofile = $UserService.userprofile;
				});
			}
			$scope.getUserProfile();

			//页面逻辑
			var path = $route.current.originalPath;
			switch (path) {
				case '/user':
					$scope.getUserProfile();
					break;
				default:
					break;
			}
		}
	])

	return {}
});