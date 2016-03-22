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
		.when('/arcdetail/:arcid', {
			templateUrl: 'arcdetail.html',
			controller: 'ArticleController'
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