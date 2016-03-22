//index.controller.js
define(["require", "app", "function", "commoncontroller", "articleservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('ArticleController', ['$scope', '$controller', 'ArticleService', function ($scope, $controller, $ArticleService){
		var CommonController = $controller('CommonController', {$scope: $scope});

		var getArticleList = function (){
			//列表
			$ArticleService.getArticleList();
			//监听事件 - getArticleList.success
			$scope.$on('getArticleList.success', function (event, d){
				$scope.$articlelist = $ArticleService.articlelist;
			});
		}();
	}]);

	return {
		
	}
});