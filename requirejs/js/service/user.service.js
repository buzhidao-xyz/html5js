//userservicejs
define(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('UserService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			getUserListParams: {},
			userlist: {},
			getUserList: function (){
				var url = $api.host + $api.userlist.u;
				$http({
					method: $api.userlist.m,
					url: url,
					params: this.getUserListParams
				}).success(function (data, status){
					Service.userlist = data.userlist;

					$rootScope.$broadcast('getUserList.success');
				}).error(function (data, status){
					$rootScope.$broadcast('getUserList.failed');
				});
			}
		}

		return Service;
	}]);
});