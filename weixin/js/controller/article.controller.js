//article.controller.js
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

			//搜索searchbar初始化
			$scope.searchbarInit = function (){
				//获取搜索焦点
				var $weuiSearchBar = $('#search_bar');
				$weuiSearchBar.addClass('weui_search_focusing');

				//开始输入
				$("#search_input").on('input', function (){
					var $searchShow = $("#search_show");
                    if ($(this).val()) {
                        $searchShow.show();
                    } else {
                        $searchShow.hide();
                    }
				});

				//取消搜索
				$("#search_cancel").on('click', function (event){
					$("#search_show").hide();
	                $('#search_input').val('');

                    $weuiSearchBar.removeClass('weui_search_focusing');
				});

				//清除内容
				$("#search_clear").on('click', function (){
					$("#search_show").hide();
	                $('#search_input').val('');
				});
			};

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