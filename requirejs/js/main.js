require.config({
	//lib基础路径
	baseUrl: "js",
	//包名-路径
	paths: {
		"app": "app",
		"jquery": "../../assets/js/jquery-2.1.4.min",
		"bootstrap": "../../assets/bootstrap-3.3.4/js/bootstrap.min",
		"angular": "../../assets/angular-1.4.2/angular.min",
		"angular-route": "../../assets/angular-1.4.2/angular-route.min",
		"commoncontroller": "common.controller",
		"commonservice": "common.service",
		"usercontroller": "user.controller",
		"userservice": "user.service"
	},
	//包依赖
	shim: {
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			deps: ["angular"],
			exports: "angular-route"
		},
		"bootstrap": {
			deps: ["jquery"],
			exports: "bootstrap"
		}
	},
	deps: ["bootstrap"],
	//不缓存js
	urlArgs: "bust=" +  (new Date()).getTime()
});

//init
require([
		"app",
		"usercontroller"
	], function (app, $usercontroller){
	// app.helloworld();
});