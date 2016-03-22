//index.js
requirejs(['./config'], function (){
	requirejs(["app", "indexcontroller", "articlecontroller"], function (){
		requirejs(["boot"]);
	});
});