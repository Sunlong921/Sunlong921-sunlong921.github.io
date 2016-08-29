$(document).ready(function() {
	QJ();  
	var C =$(".banner").height();
	var D = $(".content_left").width();
			
				
  
  //  $(window).scroll(function(event) {
   	
  //        tiaozhengweizhi()
		// 		function tiaozhengweizhi(){
		// 			//每卷动一次，就要出发这个事件。
		// 			var A = $(this).scrollTop();
		// 			var T = $(window).scrollTop();
		// 			var B = $(window).height();
		// 			var C = $(".content").height();
		// 			var E =$(".content").scrollTop();
		// 			var D =$(this).scrollTop();
		// 			var F =$(this).height();
		// 			var new_01 =$(".new_01").height();
		// 			var new_02 =$(".new_02").height();
		// 			var new_03 =$(".new_03").height();
		// 			var new_04 =$(".new_04").height();
		// 			var new_05 =$(".new_05").height();

  //                  if( A < $(".xian:eq(1)").offset().top){
		// 					$(".pR1").show().stop().animate(
		// 				 {
		// 					"top":  T  +  ( B - C - new_01 - F)/2
		// 				}
						
		// 			);
		// 				}else{
		// 					$(".pR1").hide()
		// 				} if(A < $(".xian:eq(2)").offset().top  ){
							
		// 					$(".pR2").stop().animate(
		// 				 {
		// 					"top": T  +  (  B -  new_02  )/2
		// 				}
						
		// 			);
		// 				}
		// 				else if(A < $(".xian:eq(3)").offset().top ){
						
		// 					$(".pR3").stop().animate(
		// 				 {
		// 					"top":T  +  (  B -  new_03  )/2
		// 				}
						
		// 			);
		// 				}
		// 				else if(A < $(".xian:eq(4)").offset().top  ){
							
		// 					$(".pR4").stop().animate(
		// 				 {
		// 					"top":T  +  ( B - new_04  )/2
		// 				}
						
		// 			);
		// 				}
		// 				else{
							
		// 					$(".pR5").stop().animate(
		// 				 {
		// 					"top": T  +  (  B -  new_05  )/2
		// 				}
						
		// 			);
		// 		}
		// 	}
		// });
 function  QJ (argument) {
	  	  	   //读取屏幕宽度
	  
    var A = $(window).width();
	var B = $(window).height();
	//设置图片的宽度为屏幕宽度

	   $(".banner_1").css({"width": A + "px",
	   	                   "height": B + "px" 
                            
	     });
	   // banner,的高
	   // $(".banner").css({
	   //      "height": B + "px"
	   // });
	 }
	
	  
				nowpage = 0;
				jiapage = 0;	//差速变量

				//在全屏监听鼠标滚轮事件，给$(document)绑监听
				$(document).mousewheel(
					function(event,delta){
						 nowtop=parseInt($(document).scrollTop());
						jiapage = jiapage - delta;
						nowpage = parseInt(jiapage / 1);

						//验收
						if(nowpage > 1 && jiapage > 1){
							nowpage = 0;
							jiapage = 0;
							$(" .banner_1").hide();
							// $(".content_left").css({
							// 	"display": "block"
							// });
       //                      $(".header").css({
       //                      	"display":"block" 
       //                      });
                            $(".content").css({
                              "marginTop": 200,
                            });
						}else if(nowpage < 0 && jiapage < 0){
							nowpage = 0;
							jiapage = 0;
							$(" .banner_1").show();
							// $(".content_left").stop().css({
							// 	"display": "none"
							// });
       //                      $(".header").stop().css({
       //                      	"display":"none" 
       //                      });
                              $(".content").css({
                                 "marginTop": 0,
                            });

						}
						// else if (($(".content").css({"marginTop": 200}) ) && ($(".banner_1").hide()) ){
     	//                    $(".content").css({
     	//   	               "marginTop": 0 
     	//           });
     	//                   $(".banner_1").show()
      //           }
                      
					}

				);
	 $(window).scroll(
	  function(){
		  nowtop=parseInt($(document).scrollTop());
		   var B = $(window).height();
		   var C = $(".banner").height();
		   if( nowtop >=  C ){ 
           $(".content_left").slideDown(800);
           $(".header").show(100);
        } 
        else if( nowtop<= C){ 
          $(".content_left").slideUp(100);
        $(".header").hide(100);
     } 
  });
           
			
	  $(".banner").click(function(){
		
		nowtop=parseInt($(document).scrollTop( C ));
		$(".content_left").css({
								"display": "block"
							});
                            $(".header").css({
                            	"display":"block" 
                            });
		               });  
	   $(window).scroll(
					function() {
							
						var A = $(this).scrollTop();
						if(A < $(".xian:eq(1)").offset().top){
							$(".nav li:eq(0)").addClass("cur").siblings().removeClass("cur");
						}else if(A < $(".xian:eq(2)").offset().top  ){
							
							$(".nav li:eq(1)").addClass("cur").siblings().removeClass("cur");
						}
						else if(A < $(".xian:eq(3)").offset().top ){
						
							$(".nav li:eq(2)").addClass("cur").siblings().removeClass("cur");
						}
						else if(A < $(".xian:eq(4)").offset().top  ){
							
							$(".nav li:eq(3)").addClass("cur").siblings().removeClass("cur");
						}
						else{
							$(".nav li:eq(4)").addClass("cur").siblings().removeClass("cur");
						}
						
						
					}
				);
	   $(".nav li").click(
					function(){
						$("html,body").animate(
							{
								"scrollTop":$(".xian").eq($(this).index()).offset().top 
							}
						);
				   });
               });