//user.js
requirejs(['./config'], function (){
	requirejs(['usercontroller'], function ($usercontroller){
		$usercontroller.init();
	});
});