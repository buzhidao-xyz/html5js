define(["jquery"], function ($){
	return {
		debug: function (){
			console.log('debug');
		},
		searchbar: function (){
			$('#search_input').on('focus', function() {
				//searchBar
				var $weuiSearchBar = $('#search_bar');
				$weuiSearchBar.addClass('weui_search_focusing');
			});
	        // events:{
	        //     '#search_input':{
	        //         focus:function(){
	        //             //searchBar
	        //             var $weuiSearchBar = $('#search_bar');
	        //             $weuiSearchBar.addClass('weui_search_focusing');
	        //         },
	        //         blur:function(){
	        //             var $weuiSearchBar = $('#search_bar');
	        //             $weuiSearchBar.removeClass('weui_search_focusing');
	        //             if($(this).val()){
	        //                 $('#search_text').hide();
	        //             }else{
	        //                 $('#search_text').show();
	        //             }
	        //         },
	        //         input:function(){
	        //             var $searchShow = $("#search_show");
	        //             if($(this).val()){
	        //                 $searchShow.show();
	        //             }else{
	        //                 $searchShow.hide();
	        //             }
	        //         }
	        //     },
	        //     "#search_cancel":{
	        //         touchend:function(){
	        //             $("#search_show").hide();
	        //             $('#search_input').val('');
	        //         }
	        //     },
	        //     "#search_clear":{
	        //         touchend:function(){
	        //             $("#search_show").hide();
	        //             $('#search_input').val('');
	        //         }
	        //     }
	        // }
	    }
	}
});