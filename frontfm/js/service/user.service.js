//userservicejs
define(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('UserService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			//获取用户列表
			userlist: [],
			getUserList: function (params, data){
				var url = $api.host + $api.user.userlist.u;
				$http({
					method: $api.user.userlist.m,
					url: url,
					params: params,
					data: data
				}).success(function (data, status){
					Service.userlist = [];
					for (index in data.userlist) {
						Service.userlist.push({
							"userid": data.userlist[index].userid,
							"username": data.userlist[index].username,
							"age": data.userlist[index].age,
						});
					}

					$rootScope.$broadcast('getUserList.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			},

			//获取用户详情
			userprofile: {},
			getUserProfile: function (params, data){
				var url = $api.host + $api.user.userprofile.u;
				$http({
					method: $api.user.userprofile.m,
					url: url,
					params: params,
					data: data
				}).success(function (data, status){
					Service.userprofile.userid = data.userid;
					Service.userprofile.username = data.username;
					Service.userprofile.age = data.age;

					$rootScope.$broadcast('getUserProfile.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			}
		}

		return Service;
	}]);
});