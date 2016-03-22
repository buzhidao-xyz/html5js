requirejs.config({
	//lib基础路径
	baseUrl: "js",
	//包名-路径
	paths: {
		"app": "app",
		"boot": "boot",
		"function": "function",
		"zepto": "../../assets/js/zepto.min",
		"angular": "../../assets/angular-1.4.2/angular.min",
		"angular-route": "../../assets/angular-1.4.2/angular-route.min",
		"angular-cookies": "../../assets/angular-1.4.2/angular-cookies.min",
		"commoncontroller": "controller/common.controller",
		"indexcontroller": "controller/index.controller",
		"articlecontroller": "controller/article.controller",
		"articleservice": "service/article.service"
	},
	//包依赖
	shim: {
		"function": {
			deps: ["zepto"],
			exports: "function"
		},
		"angular": {
			exports: "angular"
		},
		"angular-route": {
			deps: ["angular"],
			exports: "angular-route"
		},
		"angular-cookies": {
			deps: ["angular"],
			exports: "angular-cookies"
		}
	},
	//不缓存js
	urlArgs: "bust=" +  (new Date()).getTime()
});