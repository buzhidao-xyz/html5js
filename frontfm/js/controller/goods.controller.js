//goods.controller.js
define(["require", "app", "function", "commoncontroller", "goodsservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('GoodsController', [
		'$scope',
		'$controller',
		'$route',
		'$routeParams',
		'$location',
		'GoodsService',
		function ($scope, $controller, $route, $routeParams, $location, $GoodsService){
			var CommonController = $controller('CommonController', {$scope: $scope});

			//获取商品列表
			$scope.getGoodsList = function (){
				//service交互 - getGoodsList
				$GoodsService.getGoodsList();
				//监听事件 - getGoodsList.success
				$scope.$on('getGoodsList.success', function (event, d){
					$scope.$goodslist = $GoodsService.goodslist;
				});
			};

			$scope.getGoodsList();
		}
	]);

	return {
		
	}
});