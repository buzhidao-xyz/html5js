//init
requirejs(["./config"], function (){
	requirejs(["app"], function ($app){
		$app.helloworld();
	});
});
