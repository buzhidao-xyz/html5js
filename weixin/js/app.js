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
			controller: ''
		})
		.when('/archot', {
			templateUrl: 'archot.html',
			controller: ''
		})
		.when('/arcrem', {
			templateUrl: 'arcrem.html',
			controller: ''
		})
		.when('/arcprofile/:arcid', {
			templateUrl: 'arcprofile.html',
			controller: ''
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