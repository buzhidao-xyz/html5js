//定义模块UserController
define(["app", "commoncontroller", "userservice"], function ($app, $commoncontroller){
	var WebApp = $app.WebApp;

	var UserListControllerInit = function (){
		WebApp.controller("UserListController", ['$scope', '$controller', 'UserService', function ($scope, $controller, $UserService) {
			var CommonController = $controller('CommonController', {$scope: $scope});

			//监听事件 - getUserList.success
			$scope.$on('getUserList.success', function (event){
				$scope.userlist = $UserService.userlist;
			});

			$UserService.getUserList();
		}]);
	}

	var UserProfileControllerInit = function (){
		
	}

	return {
		UserListControllerInit: UserListControllerInit,
		UserProfileControllerInit: UserProfileControllerInit
	}
});