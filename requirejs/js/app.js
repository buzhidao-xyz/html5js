//appjs
define(["require", "angular"], function (require, angular){
	var helloworld = function (){
		alert("Hello World!");
	}

	var RequireJSApp = angular.module("RequireJSApp", []);

	//返回模块对象
	return {
		helloworld: helloworld,
		RequireJSApp: RequireJSApp
	}
});