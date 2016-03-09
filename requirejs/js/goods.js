//goods.js
requirejs(['./config'], function (){
	requirejs(['goodscontroller'], function ($goodscontroller){
        $goodscontroller.GoodsControllerInit();
	});
});