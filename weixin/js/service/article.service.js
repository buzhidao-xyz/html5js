requirejs(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('ArticleService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			//获取文章列表
			articlelist: [
			],
			getArticleList: function (param){
				var url = $api.host + $api.article.articlelist.u;
				$http({
					method: $api.article.articlelist.m,
					url: url,
					params: param
				}).success(function (data, status){
					for (index in data.articlelist) {
						Service.articlelist.push({
							"id": data.articlelist[index].id,
							"title": data.articlelist[index].title,
							"content": data.articlelist[index].content,
							"publishtime": data.articlelist[index].publishtime,
						});
					}

					$rootScope.$broadcast('getArticleList.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			},

			//获取文章详情
			articleprofile: {},
			getArticleProfile: function (param){
				var url = $api.host + $api.article.articleprofile.u;
				$http({
					method: $api.article.articleprofile.m,
					url: url,
					params: param
				}).success(function (data, status){
					Service.articleprofile.id = data.id;
					Service.articleprofile.title = data.title;
					Service.articleprofile.content = data.content;
					Service.articleprofile.publishtime = data.publishtime;

					$rootScope.$broadcast('getArticleProfile.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			}
		}
		return Service;
	}]);
});