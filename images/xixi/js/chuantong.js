function chuantong(jiangeshijian,yundongshijian,tupiankuandu){
	var nowimg = 0;	//当前的图片编号
	
	//克隆
	$("#chuantong .tuul li").eq(0).clone().appendTo("#chuantong .tuul");

	// ******定时器********
	var timer = setInterval(youanniuyewu,jiangeshijian);

	$(".z1").mouseenter(
		function(){
			clearInterval(timer);
		}
	);

	$(".z1").mouseleave(
		function(){
			clearInterval(timer);
			timer = setInterval(youanniuyewu,jiangeshijian);
		}
	);
	//******定时器*******

	//右按钮的监听：
	$("#chuantong .anniu .rightbut").click(youanniuyewu);
	function youanniuyewu(){
		if(!$(".tuul").is(":animated")){
			if(nowimg < $("#chuantong .tuul li").length - 2){
				nowimg = nowimg + 1;
				huan();	//还没有到最后一张的时候，我们进行换图函数。
			}else{
				nowimg = 0;
				//我们要让ul先往假狮子上拉动，然后瞬间移动到0
				//由于真假狮子长得一样，所以看不出来。
				$("#chuantong .tuul").animate(
					{
						"left":-tupiankuandu * ($("#chuantong .tuul li").length - 1)
					}
					,yundongshijian
					,function(){
						$("#chuantong .tuul").css("left",0);
					}
				);
				//小圆点跟上
				$(".z1 .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	}
	//左按钮的监听：
	$("#chuantong .anniu .leftbut").click(
		function(){
			if(!$(".tuul").is(":animated")){
				if(nowimg > 0){
					nowimg = nowimg - 1;
					huan();	//还没有到第0张的时候，执行换图函数
				}else{
					nowimg = $("#chuantong .tuul li").length - 2;
					//先让真狮子瞬间替换为假狮子，然后拉动
					$("#chuantong .tuul").css("left",-tupiankuandu*($("#chuantong .tuul li").length - 1));
					$("#chuantong .tuul").animate(
						{
							"left":-tupiankuandu * ($("#chuantong .tuul li").length - 2)
						}
					,yundongshijian);
					//小圆点跟上
					$(".z1 .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
				}
			}	
		}
	);

	$(".z1 .dianul li").click(
		function(){
			if(!$(".tuul").is(":animated")){
				nowimg = $(this).index();
				huan();
			}
		}
	);

	function huan(){
		//让绝对定位的ul进行运动，运动的终点是nowimg * -560
		$("#chuantong .tuul").animate(
			{
				"left":nowimg * -tupiankuandu
			}
		,yundongshijian);

		$(".z1 .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
	}
}