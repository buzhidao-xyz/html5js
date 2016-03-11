//定义模块UserController
define(["require", "app", "commoncontroller", "userservice"], function ($require, $app){
	requirejs(["jquery.purl"]);
	
	var WebApp = $app.WebApp;

	var UserListControllerInit = function (){
		//UserListController
		WebApp.controller("UserListController", ['$scope', '$controller', 'UserService', function ($scope, $controller, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			$UserService.getUserList();
			//监听事件 - getUserList.success
			$scope.$on('getUserList.success', function (event, d){
				$scope.$userlist = $UserService.userlist;
			});
		}]);
	}

	var UserProfileControllerInit = function (){
		//UserProfileController
		WebApp.controller("UserProfileController", ['$scope', '$controller', 'UserService', function ($scope, $controller, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			//获取userprofile
			var getUserProfile = function (){
				$UserService.getUserProfile();
				//监听事件 - getUserProfile.success
				$scope.$on('getUserProfile.success', function (event, d){
					$scope.$userprofile = $UserService.userprofile;
				});
			}();
		}]);
	}

	return {
		UserListControllerInit: UserListControllerInit,
		UserProfileControllerInit: UserProfileControllerInit
	}
});