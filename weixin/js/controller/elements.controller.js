//elements.controller.js
define(["require", "app", "function", "commoncontroller", "elementsservice"], function ($require, $app, $function){
	var WebApp = $app.WebApp;

	WebApp.controller('ElementsController', [
		'$scope',
		'$controller',
		'$route',
		'$routeParams',
		'$location',
		'ElementsService',
		function ($scope, $controller, $route, $routeParams, $location, $ElementsService){
			var CommonController = $controller('CommonController', {$scope: $scope});

			//显示消息提示框
			$scope.showToast = function (){
				var $toast = $('#toast');
                if ($toast.css('display') != 'none') {
                    return;
                }

                $toast.show();
                setTimeout(function () {
                    $toast.hide();
                }, 2000);
			}

			//显示loading提示框
			$scope.showLoadingToast = function (){
				var $loadingToast = $('#loadingToast');
                if ($loadingToast.css('display') != 'none') {
                    return;
                }

                $loadingToast.show();
                setTimeout(function () {
                    $loadingToast.hide();
                }, 2000);
			}

			//隐藏loading提示框
			$scope.hideLoadingToast = function (){
				var $loadingToast = $('#loadingToast');
                if ($loadingToast.css('display') != 'block') {
                    return;
                }

                $loadingToast.hide();
			}

			//获取celllist
			$scope.getCellList = function (){
				$scope.showLoadingToast();

				//service交互
				$ElementsService.getCellList();
				//监听事件 - getCellList.success
				$scope.$on('getCellList.success', function (event, d){
					$scope.hideLoadingToast();
					$scope.showToast();

					$scope.$celllist = $ElementsService.celllist;
				});
			}

			//显示对话框 - 消息
			$scope.showDialogAlert = function (){
				var $dialog = $('#dialogalert');
                $dialog.show();
                $dialog.find('.weui_btn_dialog').one('click', function () {
                    $dialog.hide();
                });
			}

			//显示对话框 - 确认
			$scope.showDialogConfirm = function (){
				var $dialog = $('#dialogconfirm');
                $dialog.show();
                $dialog.find('.weui_btn_dialog').one('click', function () {
                    $dialog.hide();
                });
			}

			//显示ActionSheet
			$scope.showActionSheet = function (){
				
			}
		}
	])
});