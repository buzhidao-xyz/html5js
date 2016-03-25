//定义模块UserController
define(["require", "app", "function", "commoncontroller", "userservice", "jquery.purl"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	//UserListController
	WebApp.controller("UserListController", [
		'$scope',
		'$controller',
		'$route',
		'$routeParams',
		'$location',
		'UserService',
		function ($scope, $controller, $route, $routeParams, $location, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			//获取用户列表
			$scope.getUserList = function (){
				//service交互 - getUserList
				$UserService.getUserList();
				//监听事件 - getUserList.success
				$scope.$on('getUserList.success', function (event, d){
					$scope.$userlist = $UserService.userlist;
				});
			}

			$scope.getUserList();
		}
	]);

	//UserProfileController
	WebApp.controller("UserProfileController", [
		'$scope',
		'$controller',
		'$route',
		'$routeParams',
		'$location',
		'UserService',
		function ($scope, $controller, $route, $routeParams, $location, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			//获取用户信息
			$scope.getUserProfile = function (){
				var userid = $.url().param("userid");
				//service交互 - getUserProfile
				$UserService.getUserProfile({
					"userid": userid
				});
				//监听事件 - getUserProfile.success
				$scope.$on('getUserProfile.success', function (event, d){
					$scope.$userprofile = $UserService.userprofile;
				});
			};

			$scope.getUserProfile();
		}
	]);

	return {
		
	}
});