function ganbeng(jiangeshijian) {
	var nowimg = 0; 	//信号量

	//定时器的代码段开始
 	var timer;

 	timer = setInterval(youanniuyewu,jiangeshijian);	//定时器已经开始

 	//最大的盒子鼠标进入的时候定时器停止
 	$("#ganbeng").mouseenter(
 		function(){
 			//定时器停止
 			clearInterval(timer);
 		}
 	);

 	//鼠标离开的时候，启动定时器
 	$("#ganbeng").mouseleave(
 		function(){
 			clearInterval(timer);	//设表先关
 			timer = setInterval(youanniuyewu,jiangeshijian);
 		}
 	);
 	
 	//定时器的代码段结束


	//右按钮的监听，有名函数的监听是没有圆括号
	$("#ganbeng .anniu .rightbut").click(youanniuyewu);	

	//右按钮业务：
	function youanniuyewu(){
		if(nowimg < $("#ganbeng .tuul li").length - 1){
			nowimg = nowimg + 1;
		}else{
			nowimg = 0;
		}
		huan();
	}

	//左按钮的监听：
	$("#ganbeng .anniu .leftbut").click(
		function(){
			if(nowimg > 0){
				nowimg = nowimg - 1;
			}else{
				nowimg = $("#ganbeng .tuul li").length - 1;
			}
			huan();
		}
	);

	//小圆点的监听：
	$("#ganbeng .dianul li").mouseenter(
		function(){
			//先改变信号量
			nowimg = $(this).index();	//让信号量变成用户点击的那个li的序号
			huan();
		}
	);

	//定义一个换图函数
	function huan(){
		//根据信号量的值，让tuul里面的一个li有cur，其余的li没有cur
		$("#ganbeng .tuul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");

		//根据信号量的值，让dianul里面的一个li有cur，其余的li没有cur
		$("#ganbeng .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");

		//根据信号量的值，让h3中的内容，显示第nowimg那个img的alt
		var biaoti = $("#ganbeng .tuul li img").eq(nowimg).attr("alt");
		$("#ganbeng .xinxi h3").html(biaoti);
	}
}