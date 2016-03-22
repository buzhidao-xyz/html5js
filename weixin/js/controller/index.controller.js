//index.controller.js
define(["require", "app", "function", "commoncontroller", "articleservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('IndexController', ['$scope', '$controller', 'ArticleService', function ($scope, $controller, $ArticleService){
		var CommonController = $controller('CommonController', {$scope: $scope});
	}]);

	return {
		
	}
});