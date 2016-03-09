//goods.controller.js
define(["app", "commoncontroller", "goodsservice"], function ($app){
	var WebApp = $app.WebApp;

	var GoodsControllerInit = function (){
		WebApp.controller('GoodsController', ['$scope', '$controller', 'GoodsService', function ($scope, $controller, $GoodsService){
			var CommonController = $controller('CommonController', {$scope: $scope});

			alert(1);
		}]);
	}

	return {
		GoodsControllerInit: GoodsControllerInit
	}
});