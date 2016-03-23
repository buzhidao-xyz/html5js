//index.controller.js
define(["require", "app", "function", "commoncontroller", "articlecontroller", "articleservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('IndexController', ['$scope', '$controller', 'ArticleService', function ($scope, $controller, $ArticleService){
		var CommonController = $controller('CommonController', {$scope: $scope});
		var ArticleController = $controller('ArticleController', {$scope: $scope});

		//获取文章列表
		$scope.getArticleList();
	}]);

	return {
		
	}
});