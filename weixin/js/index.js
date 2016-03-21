//index.js
requirejs(['./config'], function (){
	requirejs(["app", "indexcontroller"], function (){
		requirejs(["boot"]);
	});
});