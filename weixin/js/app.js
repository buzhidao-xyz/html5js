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
		.when('/buttons', {
			templateUrl: 'buttons.html',
			controller: 'ElementsController'
		})
		.otherwise({
			redirectTo: '/arclist'
		});
	}]);

	//返回模块对象
	return {
		WebApp: WebApp
	}
});