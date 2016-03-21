requirejs(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('ArticleService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			articlelist: {},
			getArticleList: function (param){
				var url = $api.host + $api.article.articlelist.u;
				$http({
					method: $api.article.articlelist.m,
					url: url,
					params: param
				}).success(function (data, status){
					Service.articlelist = data.articlelist;

					$rootScope.$broadcast('getArticleList.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			}
		}
		return Service;
	}]);
});