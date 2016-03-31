//index.controller.js
define([
	"require",
	"app",
	"function",
	"commoncontroller",
	"articlecontroller",
	"elementscontroller",
	"usercontroller"
	], function ($require, $app, $function){
		var WebApp = $app.WebApp;

		WebApp.controller('IndexController', ['$scope', '$controller', function ($scope, $controller){
			var CommonController = $controller('CommonController', {$scope: $scope});
		}]);

		return {
			
		}
	}
);