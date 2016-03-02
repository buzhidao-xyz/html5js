require.config({
	//lib基础路径
	baseUrl: "js",
	//包名-路径
	paths: {
		"app": "app",
		"angular": "../../assets/angular-1.4.2/angular.min",
		"angular-route": "../../assets/angular-1.4.2/angular-route.min",
		"commoncontroller": "common.controller",
		"commonservice": "common.service",
		"usercontroller": "user.controller",
		"userservice": "user.service"
	},
	//包依赖
	shim: {
		"app": {
			exports: "app"
		},
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			deps: ["angular"],
			exports: "angular-route"
		}
	},
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