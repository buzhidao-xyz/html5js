//goods.service.js
define(["app", "api"], function ($app, $api){
	var WebApp = $app.WebApp;

	WebApp.service('GoodsService', ['$rootScope', '$http', function ($rootScope, $http){
		var Service = {
			//获取商品列表
			goodslist: [],
			getGoodsList: function (params, data){
				var url = $api.host + $api.goods.goodslist.u;
				$http({
					method: $api.goods.goodslist.m,
					url: url,
					params: params,
					data: data
				}).success(function (data, status){
					Service.goodslist = [];
					for (index in data.goodslist) {
						Service.goodslist.push({
							"id": data.goodslist[index].id,
							"name": data.goodslist[index].name,
							"price": data.goodslist[index].price
						});
					}

					$rootScope.$broadcast('getGoodsList.success');
				}).error(function (data, status){
					$rootScope.$broadcast('apiRequest.failed');
				});
			}
		};

		return Service;
	}]);
});