//userservicejs
define(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('UserService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			//getUserList
			getUserListParams: {},
			userlist: {},
			getUserList: function (){
				var url = $api.host + $api.user.userlist.u;
				$http({
					method: $api.user.userlist.m,
					url: url,
					params: this.getUserListParams
				}).success(function (data, status){
					Service.userlist = data.userlist;

					$rootScope.$broadcast('getUserList.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			},

			//getUserProfile
			userprofile: {
				"userid": 0,
				"username": "",
				"age": 0
			},
			getUserProfile: function (){
				var url = $api.host + $api.user.userprofile.u;
				$http({
					method: $api.user.userlist.m,
					url: url,
					params: {}
				}).success(function (data, status){
					Service.userprofile = data;

					$rootScope.$broadcast('getUserProfile.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			}
		}

		return Service;
	}]);
});