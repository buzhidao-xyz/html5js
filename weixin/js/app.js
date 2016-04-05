//appjs
define(["require", "angular", "angular-route", "angular-cookies"], function (require, angular){
    //注册angular.module-WebApp
	var WebApp = angular.module("WebApp", ["ngRoute", "ngCookies"]);

	//配置angularmodule
	WebApp.config(['$routeProvider', function($routeProvider) {
		//router路由
		$routeProvider
		.when('/arclist', {
			templateUrl: 'arclist.html',
			controller: 'ArticleController'
		})
		.when('/archot', {
			templateUrl: 'archot.html',
			controller: 'ArticleController'
		})
		.when('/arcprofile', {
			templateUrl: 'arcprofile.html',
			controller: 'ArticleController'
		})
		.when('/user', {
			templateUrl: 'user.html',
			controller: 'UserController'
		})
		.when('/elements', {
			templateUrl: 'elements.html',
			controller: 'ElementsController'
		})
		.when('/form', {
			templateUrl: 'form.html',
			controller: 'ElementsController'
		})
		.when('/icons', {
			templateUrl: 'icons.html',
			controller: 'ElementsController'
		})
		.when('/buttons', {
			templateUrl: 'buttons.html',
			controller: 'ElementsController'
		})
		.when('/cell', {
			templateUrl: 'cell.html',
			controller: 'ElementsController'
		})
		.when('/toast', {
			templateUrl: 'toast.html',
			controller: 'ElementsController'
		})
		.when('/dialog', {
			templateUrl: 'dialog.html',
			controller: 'ElementsController'
		})
		.when('/msg', {
			templateUrl: 'msg.html',
			controller: 'ElementsController'
		})
		.when('/progress', {
			templateUrl: 'progress.html',
			controller: 'ElementsController'
		})
		.when('/actionsheet', {
			templateUrl: 'actionsheet.html',
			controller: 'ElementsController'
		})
		.otherwise({
			redirectTo: '/arclist'
		});
	}]);

	//运行angularmodule
	WebApp.run(['$rootScope', '$window', '$location', '$log', function ($rootScope, $window, $location, $log) {
		//监听事件 - 路由切换开始
		$rootScope.$on('$routeChangeStart', function (){
			//显示loading
			$("#loadingbox").show();
		});
		//监听事件 - 路由切换成功
		$rootScope.$on('$routeChangeSuccess', function (){
			//隐藏loading
			$("#loadingbox").hide();
		});
	}]);

	//返回模块对象
	return {
		WebApp: WebApp
	}
});