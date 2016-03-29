//user.service.js
define(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('UserService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			//获取用户信息
			userprofile: {},
			getUserProfile: function (params, data){
				var url = $api.host + $api.user.userprofile.u;
				$http({
					method: $api.article.articlelist.m,
					url: url,
					params: params,
					data: data
				}).success(function (data, status){
					Service.userprofile          = {};
					Service.userprofile.userid   = data.userid;
					Service.userprofile.username = data.username;
					Service.userprofile.age      = data.age;

					$rootScope.$broadcast('getUserProfile.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			}
		}
		return Service;
	}])
});