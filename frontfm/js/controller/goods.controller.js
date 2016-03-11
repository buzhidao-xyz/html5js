//goods.controller.js
define(["require", "app", "commoncontroller", "goodsservice"], function ($require, $app){
	var WebApp = $app.WebApp;

	var GoodsControllerInit = function (){
		WebApp.controller('GoodsController', ['$scope', '$controller', 'GoodsService', function ($scope, $controller, $GoodsService){
			var CommonController = $controller('CommonController', {$scope: $scope});

			//监听事件 - getGoodsList.success
			$scope.$on('getGoodsList.success', function (event, d){
				$scope.$goodslist = $GoodsService.goodslist;
			});
			$GoodsService.getGoodsList();
		}]);
	}

	return {
		GoodsControllerInit: GoodsControllerInit
	}
});