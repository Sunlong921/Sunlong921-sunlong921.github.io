function huxibianzhong(huxishijian,jiangeshijian){
	var nowimg = 0;

	//============定时器一堆=================
	var timer = setInterval(youanniuyewu,jiangeshijian);

	
	//============定时器一堆=================


	//下面是右按钮的业务，提炼出来的原因，就是定时器调用
	function youanniuyewu(){
		if(!$("#banner .tuul li").is(":animated")){
			//让老的信号量的元素淡出
			//让淡入的语句，写在回调函数中！！
			$("#banner .tuul li").eq(nowimg).fadeOut(huxishijian,function(){
				//改变信号量
				if(nowimg < 1){
					nowimg = nowimg+ 1;
				}else{
					nowimg = 0;
				}

				//让新的信号量的元素淡入
				$("#banner .tuul li").eq(nowimg).fadeIn(huxishijian);

				//小圆点跟着变：
				
			});

			
		}
	}

}	