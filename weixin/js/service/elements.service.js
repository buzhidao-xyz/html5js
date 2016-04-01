//elements.service.js
define(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('ElementsService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			celllist:[],
			getCellList: function (params, data){
				var url = $api.host + $api.cell.celllist.u;
				$http({
					method: $api.cell.celllist.m,
					url: url,
					params: params,
					data: data
				}).success(function (data, status){
					Service.celllist = [];
					for (index in data.celllist) {
						Service.celllist.push({
							"id": data.celllist[index].id,
							"title": data.celllist[index].title,
							"summary": data.celllist[index].summary
						});
					}

					$rootScope.$broadcast('getCellList.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			}
		}
		return Service;
	}])
});