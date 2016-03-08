//定义模块UserController
define(["app", "commoncontroller", "userservice"], function ($app){
	var WebApp = $app.WebApp;

	var UserListControllerInit = function (){
		//UserListController
		WebApp.controller("UserListController", ['$scope', '$controller', 'UserService', function ($scope, $controller, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			//监听事件 - getUserList.success
			$scope.$on('getUserList.success', function (event, d){
				$scope.$userlist = $UserService.userlist;
			});

			$UserService.getUserList();
		}]);
	}

	var UserProfileControllerInit = function (){
		//UserProfileController
		WebApp.controller("UserProfileController", ['$scope', '$controller', 'UserService', function ($scope, $controller, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			$scope.$on('getUserProfile.success', function (event, d){
				$scope.$userprofile = $UserService.userprofile;
			});

			//获取userprofile
			var getUserProfile = function (){
				$UserService.getUserProfile();
			}();
		}]);
	}

	return {
		UserListControllerInit: UserListControllerInit,
		UserProfileControllerInit: UserProfileControllerInit
	}
});