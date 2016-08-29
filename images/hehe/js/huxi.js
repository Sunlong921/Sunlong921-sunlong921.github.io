function huxi(huxishijian,jiangeshijian) {
	var nowimg = 0;

	//============定时器一堆=================
	var timer = setInterval(youanniuyewu,jiangeshijian);

	$("#huxi").mouseenter(
		function() {
			clearInterval(timer);	//停止定时器
		}
	);

	$("#huxi").mouseleave(
		function() {
			clearInterval(timer);	//设表先关
			timer = setInterval(youanniuyewu,jiangeshijian);
		}
	);
	//============定时器一堆=================

	$("#huxi .anniu .rightbut").click(youanniuyewu);

	//下面是右按钮的业务，提炼出来的原因，就是定时器调用
	function youanniuyewu(){
		if(!$("#huxi .tuul li").is(":animated")){
			//让老的信号量的元素淡出
			$("#huxi .tuul li").eq(nowimg).fadeOut(huxishijian);

			//改变信号量
			if(nowimg < $("#huxi .tuul li").length - 1){
				nowimg = nowimg + 1;
			}else{
				nowimg = 0;
			}

			//让新的信号量的元素淡入
			$("#huxi .tuul li").eq(nowimg).fadeIn(huxishijian);

			//小圆点跟着变：
			$("#huxi .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	}

	$("#huxi .anniu .leftbut").click(
		function(){
			if(!$("#huxi .tuul li").is(":animated")){
				//让老的信号量的元素淡出
				$("#huxi .tuul li").eq(nowimg).fadeOut(huxishijian);

				//改变信号量
				if(nowimg > 0){
					nowimg = nowimg - 1;
				}else{
					nowimg = $("#huxi .tuul li").length - 1;
				}

				//让新的信号量的元素淡入
				$("#huxi .tuul li").eq(nowimg).fadeIn(huxishijian);

				//小圆点跟着变：
				$("#huxi .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
			}
		}
	);

	$("#huxi .dianul li").click(
		function(){
			//让老的淡出
			$("#huxi .tuul li").eq(nowimg).fadeOut(huxishijian);
			nowimg = $(this).index();	//让信号量改变为用户点击的那个序号
			//让新的淡入
			$("#huxi .tuul li").eq(nowimg).fadeIn(huxishijian);
			//小圆点跟着变：
			$("#huxi .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
		}
	);
}