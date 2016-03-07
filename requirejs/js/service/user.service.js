//userservicejs
define(["app"], function ($app){
	var WebApp = $app.WebApp;

	WebApp.service('UserService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			testdata: {
				a: 1
			},
			getDatatest: function (){
				Service.testdata.a = 2;
			}
		}

		return Service;
	}]);
});