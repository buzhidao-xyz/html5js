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

			//获取全部
			$scope.getArticleList = function (){
				//service交互 - getArticleList
				$ArticleService.getArticleList();
				//监听事件 - getArticleList.success
				$scope.$on('getArticleList.success', function (event, d){
					$scope.$articlelist = $ArticleService.articlelist;
				});
			};

			//获取热门文章
			$scope.getArticleHotList = function (){
				//service交互 - getArticleHotList
				$ArticleService.getArticleHotList();
				//监听事件 - getArticleHotList.success
				$scope.$on('getArticleHotList.success', function (event, d){
					$scope.$articlehotlist = $ArticleService.articlehotlist;
				});
			};

			//获取推荐文章
			$scope.getArticleRemList = function (){
				//service交互 - getArticleRemList
				$ArticleService.getArticleRemList();
				//监听事件 - getArticleRemList.success
				$scope.$on('getArticleRemList.success', function (event, d){
					$scope.$articleremlist = $ArticleService.articleremlist;
				});
			};

			//获取文章详情
			$scope.getArticleProfile = function (){
				var params = $location.search();
				//service交互 - getArticleProfile
				$ArticleService.getArticleProfile({
					"arcid": params.arcid
				});
				//监听事件 - getArticleProfile.success
				$scope.$on('getArticleProfile.success', function (event, d){
					$scope.$articleprofile = $ArticleService.articleprofile;
				});
			}

			//页面逻辑
			var path = $route.current.originalPath;
			switch (path) {
				case '/arclist':
					$scope.getArticleList();
					break;
				case '/archot':
					$scope.getArticleHotList();
					break;
				case '/arcrem':
					$scope.getArticleRemList();
					break;
				case '/arcprofile':
					$scope.getArticleProfile();
					break;
				default:
					break;
			}
		}
	]);

	return {
		
	}
});