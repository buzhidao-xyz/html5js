//userservicejs
define(["app"], function (app){
	var RequireJSApp = app.RequireJSApp;

	RequireJSApp.service('UserService', ['$rootScope', '$http', function ($rootScope, $http){
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