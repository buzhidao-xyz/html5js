//appjs
define(["require", "angular", "angular-route"], function (require, angular){
	var helloworld = function (){
		alert("Hello World!");
	}

	var WebApp = angular.module("WebApp", ["ngRoute"]);

	//返回模块对象
	return {
		helloworld: helloworld,
		WebApp: WebApp
	}
});