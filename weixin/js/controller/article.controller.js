//index.controller.js
define(["require", "app", "function", "commoncontroller", "articleservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('ArticleController', [
		'$scope',
		'$controller',
		'$route',
		'$routeParams',
		'$location',
		'ArticleService',
		function ($scope, $controller, $route, $routeParams, $location, $ArticleService){
			var CommonController = $controller('CommonController', {$scope: $scope});

			//获取文章列表
			$scope.getArticleList = function (){
				//service交互 - getArticleList
				$ArticleService.getArticleList();
				//监听事件 - getArticleList.success
				$scope.$on('getArticleList.success', function (event, d){
					$scope.$articlelist = $ArticleService.articlelist;
				});
			};

			//获取文章内容
			$scope.getArticleProfile = function (arcid){
				//service交互 - getArticleProfile
				$ArticleService.getArticleProfile({
					"arcid": arcid
				});
				//监听事件 - getArticleProfile.success
				$scope.$on('getArticleProfile.success', function (event, d){
					$scope.$articleprofile = $ArticleService.articleprofile;
				});
			}

			var url = $location.url();
			var path = $location.path();
			alert(url);
			alert(path);
			$scope.getArticleList();
		}
	]);

	return {
		
	}
});