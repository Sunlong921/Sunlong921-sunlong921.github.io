            var context;
            var arr = new Array();
            var starCount = 800;
            var rains = new Array();
            var rainCount =20;
            //初始化画布及context
            function init(){
                //获取canvas
                var stars = document.getElementById("stars");
                windowWidth = window.innerWidth; //当前的窗口的高度
                stars.width=windowWidth;
                stars.height=window.innerHeight;
                //获取context
                context = stars.getContext("2d");
            }

            //创建一个星星对象
            var Star = function (){
                this.x = windowWidth * Math.random();//横坐标
                this.y = 5000 * Math.random();//纵坐标
                this.text=".";//文本
                this.color = "white";//颜色
              
                //产生随机颜色
                this.getColor=function(){

                    var _r = Math.random();

                    if(_r<0.5){
                        this.color = "#333";
                    }else{
                        this.color = "white";
                    }

                }

                //初始化
                this.init=function(){
                    this.getColor();
                }
                //绘制
                this.draw=function(){
                    context.fillStyle=this.color;
                    context.fillText(this.text,this.x,this.y);
                }
                
            }

             //画月亮
            function drawMoon(){
                 var moon = new Image();
                     moon.src = "./images/moon.jpg"
                     context.drawImage(moon,-5,-10);
            }

          

            //页面加载的时候
            window.onload = function() {

                init();
                //画星星
                for (var i=0;i<starCount;i++) {
                    var star = new Star();
                    star.init();
                    star.draw();
                    arr.push(star);
                }

                //画流星
                for (var i=0;i<rainCount;i++) {
                    var rain = new MeteorRain();
                    rain.init();
                    rain.draw();
                    rains.push(rain);
                }

                drawMoon();//绘制月亮
                playStars();//绘制闪动的星星
                playRains();//绘制流星

            }

             //星星闪起来
            function playStars(){
                for (var n = 0; n < starCount; n++){  
                    arr[n].getColor();  
                    arr[n].draw();  
                }  

                setTimeout("playStars()",100);
            }
    /*流星雨开始*/
  var MeteorRain = function(){
            this.x = -1;
            this.y = -1;
            this.length = -1;//长度
            this.angle = 30; //倾斜角度
            this.width = -1;//宽度
            this.height = -1;//高度
            this.speed = 1;//速度
            this.offset_x = -1;//横轴移动偏移量
            this.offset_y = -1;//纵轴移动偏移量
            this.alpha = 1; //透明度
            this.color1 = "";//流星的色彩
            this.color2 = "";  //流星的色彩
    /****************初始化函数********************/
    this.init = function () //初始化
    {
        this.getPos();
        this.alpha = 1;//透明度
        this.getRandomColor();
        //最小长度，最大长度
        var x = Math.random() * 80 + 150;
        this.length = Math.ceil(x);
//                  x = Math.random()*10+30;
        this.angle = 30; //流星倾斜角
        x = Math.random()+0.5;
        this.speed = Math.ceil(x); //流星的速度
        var cos = Math.cos(this.angle*3.14/180);
        var sin = Math.sin(this.angle*3.14/180) ;
        this.width = this.length*cos ;  //流星所占宽度
        this.height = this.length*sin ;//流星所占高度
        this.offset_x = this.speed*cos ;
        this.offset_y = this.speed*sin;
    }

    /**************获取随机颜色函数*****************/
    this.getRandomColor = function (){
        var a = Math.ceil(255-240* Math.random()); 
        //中段颜色
        this.color1 = "rgba("+a+","+a+","+a+",1)";
        //结束颜色
        this.color2 = "black";
    }


     /***************重新计算流星坐标的函数******************/
    this.countPos = function ()//
    {
        //往左下移动,x减少，y增加
        this.x = this.x - this.offset_x;
        this.y = this.y + this.offset_y;
    }

    /*****************获取随机坐标的函数*****************/
    this.getPos = function () //
    {
        //横坐标200--1200
       
        this.x = Math.random() * window.innerWidth; //窗口高度
        //纵坐标小于600
        this.y = Math.random() * window.innerHeight;  //窗口宽度
    }
     /****绘制流星***************************/
    this.draw = function () //绘制一个流星的函数
    {
        context.save();
        context.beginPath();
        context.lineWidth = 1; //宽度
        context.globalAlpha = this.alpha; //设置透明度
        //创建横向渐变颜色,起点坐标至终点坐标
        var line = context.createLinearGradient(this.x, this.y, 
            this.x + this.width, 
            this.y - this.height);

        

        //分段设置颜色
        line.addColorStop(0, "white");
        line.addColorStop(0.3, this.color1);
        line.addColorStop(0.6, this.color2);
        context.strokeStyle = line;
        //起点
        context.moveTo(this.x, this.y);
        //终点
        context.lineTo(this.x + this.width, this.y - this.height);
        context.closePath();
        context.stroke();
        context.restore();
    }
    this.move = function(){
        //清空流星像素
        var x = this.x+this.width-this.offset_x;
        var y = this.y-this.height;
        context.clearRect(x-3,y-3,this.offset_x+5,this.offset_y+5); 
//                  context.strokeStyle="red";
//                  context.strokeRect(x,y-1,this.offset_x+1,this.offset_y+1);
        //重新计算位置，往左下移动
        this.countPos();
        //透明度增加
        this.alpha -= 0.002;
        //重绘
        this.draw(); 
    }
    
}

//绘制流星
function playRains(){
    
    for (var n = 0; n < rainCount; n++){  
        var rain = rains[n];
        rain.move();//移动
        if(rain.y>window.innerHeight){//超出界限后重来
            context.clearRect(rain.x,rain.y-rain.height,rain.width,rain.height);
            rains[n] = new MeteorRain();
            rains[n].init();
        }
    }  
    setTimeout("playRains()",2);
}     
function Agemove(){
    this.settings = {};
}
Agemove.prototype = {
      _init : function(opt){
        var $this = this;
        $.extend($this.settings,opt);
          this.bindHeader();
          this.contentEvent();
          this.jianli();
          this.MobileEvent()
         
      },
      bindHeader:function(){
        
         var  navMove ={
           getPos : function(obj){
              var l =0;
              var t =0;
              while(obj){
                l+= obj.offsetLeft;
                t+= obj.offsetTop;
                obj=obj.offsetParent;
              }
              return {left:l,top:t};
            },
          getDirection:function(obj,oEvent){
              var x = oEvent.clientX - navMove.getPos(obj).left - obj.offsetWidth/2;
              var y = navMove.getPos(obj).top + obj.offsetHeight/2 - oEvent.clientY;
              return  Math.round((Math.atan2(y,x)*180/Math.PI + 180)/90)%4;
           },
           bindEvent:function(obj){
                $(obj).mouseenter(function(event) {
                     var e = event || window.event;
                     var n = navMove.getDirection(this,e);
                   

                     var oSpan  =$(obj).children('span');
                      oSpan.css('display','block')
                     switch(n){
                          case 0:
                               oSpan.css('left','-492.5px'); 
                               oSpan.css('top','0px'); 
                            break;
                          case 1:
                               oSpan.css('left','0');
                               oSpan.css('top','200px')
                            break;
                          case 2:
                                oSpan.css('left','492.5px'); 
                                oSpan.css('top','0px'); 
                            break;
                              case 3:
                                 oSpan.css('left','0');
                                 oSpan.css('top','-200px')
                            break;
                        }
                     oSpan.stop().animate({
                          left:0,
                          top :0}, 500)
                   })
                   $(obj).mouseleave(function(event) {

                         var e = event || window.event;
                         var n = navMove.getDirection(this,e);
                         var oSpan  =  $(obj).children('span');
                         oSpan.css('display','none')
                                 switch(n){
                                  case 0: 
                                       oSpan.css('left',-492.5); 
                                       oSpan.css('top',0); 
                                    break;
                                  case 1:
                                       oSpan.css('left',0);
                                       oSpan.css('top',200)
                                    break;
                                  case 2:
                                        oSpan.css('left',492.5); 
                                        oSpan.css('top',0); 
                                    break;
                                      case 3:
                                         oSpan.css('left',0);
                                         oSpan.css('top',-200)
                                    break;
                                 }
                      });
                 },
                 navT : function(){
                          
                          
                         $('.navbar-brand').click(function(){
                             $('.on').eq(0).addClass('cur').show(300);

                         })
                         $.each($('.np .p'), function(index, val) {
                              var  _index = $(this).index();
                              $(this).children('p').on('click',function(){
                                  $('.on').removeClass('cur').hide(200)
                                  $('.on').eq(_index).addClass('cur').show(300);
                                  
                          })
                      });

                          $.each($('.navbar-right li'), function(index, val) {
                              var  _index = $(this).index();
                              $(this).on('click',function(){
                              
                                  $('.on').removeClass('cur').hide(200)
                                  $('.on').eq(_index).addClass('cur').show(300);

                            }).hover(function() {
                                 $(this).css({
                                    'background': '#000',
                                    'background': 'rgba(160, 165, 165, 0.2)',
                                    'color':'red'
                                });
                            }, function() {
                                  $(this).css({
                                    'background': 'none',
                                    'color' : '#fff'
                                    
                                });
                            });
                        });
                 }
             };
             //   导航条效果；
           var obj  = $('.np .p').children('p')
               for (var i = 0; i < obj.length; i++) {
                   navMove.bindEvent(obj[i])

            };  
            //  页面跳转 
             navMove.navT();
         },
         contentEvent : function (){
              var  $this = this;

             $('.teb_centen').hover(function() {
                  $(this).children('p').stop().fadeIn(200)
                
                 
             
             }, function() {
                  $(this).children('p').stop().fadeOut(200)
               
             });

             $.each( $('.teb_centen'), function(index, val) {
                 $(this).click(function(event) {
                    var value = $(this).attr('data');
                    var  v  = parseInt(value);
                      if ( value) {

                          $('#demo').addClass('curshow');
                          $this.demoZ(v) 
                      }
             });

        });
             
         },
         demoZ : function(value){
              var  a = $('#demo .demo_centent')
              if ($('#demo').hasClass('curshow')) {

                $('body,html').css({
                      'overflow': 'hidden',
                      'overflow-x': 'hidden',
                      'overflow-y': 'hidden'

                 });
               };
              $('#demo').children('p').on('click',function(){
                $('#demo').removeClass('curshow');
                  $('body,html').css({
                      'overflow': 'auto',
                      'overflow-x': 'hidden',
                      'overflow-y': 'auto'
                 });
               a.html('')

              }) 
             var  XG = {
                NO1 :function() {
                var nowimg = 0;
                $("#baiyechuang .tutu .maonimen p").each(
                    function(){
                        $(this).css(
                            {
                                "left":$(this).index() * 80,
                                'top':0,
                                "background-position":$(this).index() * - 80 +"px  0"
                            }
                        );
                    }
                );
                $(".rightbut").click(
                    function(){
                        if(nowimg < 4){
                            nowimg ++;
                        }else{
                            nowimg = 0;
                        }
                        huantu();
                    }
                );

                $(".leftbut").click(
                    function(){
                        if(nowimg > 0){
                            nowimg --;
                        }else{
                            nowimg = 4;
                        }
                        huantu();
                    }
                );
                $(".dianul li").click(
                    function(){
                        nowimg = $(this).index();
                        huantu();
                    }
                );
                function huantu(){
                    //让猫腻做好准备
                    $(".maonimen p").css("background-image","url(images/" + nowimg + ".jpg)");

                    //猫腻p都动画打开
                    $(".maonimen p").animate({"width":80},500,function(){
                        //让真图换成这个图
                        $(".zhentu img").attr("src","images/" + nowimg + ".jpg");
                        //猫腻可以消失了
                        $(".maonimen p").css("width",0);
                    });

                    $(".dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                }
            },
            NO2 : function(jiangeshijian,yundongshijian,tupiankuandu){
                 var nowimg = 0; //当前的图片编号
                //克隆
                $("#chuantong .tuul li").eq(0).clone().appendTo("#chuantong .tuul");
                // ******定时器********
                var timer = setInterval(youanniuyewu,jiangeshijian);
                $("#chuantong").mouseenter(
                    function(){
                        clearInterval(timer);
                    }
                );
                $("#chuantong").mouseleave(
                    function(){
                        clearInterval(timer);
                        timer = setInterval(youanniuyewu,jiangeshijian);
                    }
                );
                //******定时器*******
                //右按钮的监听：    **********可以变成监听**********
                $("#chuantong .anniu .rightbut").click(youanniuyewu);
                function youanniuyewu(){
                    if(!$(".tuul").is(":animated")){
                        if(nowimg < $("#chuantong .tuul li").length - 2){
                            nowimg = nowimg + 1;
                            huan(); //还没有到最后一张的时候，我们进行换图函数。
                        }else{
                            nowimg = 0;
                            //我们要让ul先往假狮子上拉动，然后瞬间移动到0
                            //由于真假狮子长得一样，所以看不出来。      ****lef可以更改成TOP*****
                            $("#chuantong .tuul").animate(
                                {
                                    "left":-tupiankuandu * ($("#chuantong .tuul li").length - 1)
                                }
                                ,yundongshijian               
                                ,function(){
                                    $("#chuantong .tuul").css("left",0);
                                }
                            );
                            //小圆点跟上          *****可以改成文字******       
                            $("#chuantong .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                        }
                    }
                }
                // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑保留可以变成刀塔轮播↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
                //左按钮的监听：
                // ↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓刀塔那种下面做按钮可以不用↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
                $("#chuantong .anniu .leftbut").click(
                    function(){
                        if(!$(".tuul").is(":animated")){
                            if(nowimg > 0){
                                nowimg = nowimg - 1;
                                huan(); //还没有到第0张的时候，执行换图函数
                            }else{
                                nowimg = $("#chuantong .tuul li").length - 2;
                                //先让真狮子瞬间替换为假狮子，然后拉动      ****lef可以更改成TOP*****
                                $("#chuantong .tuul").css("left",-tupiankuandu*($("#chuantong .tuul li").length - 1));
                                $("#chuantong .tuul").animate(
                                    {
                                        "left":-tupiankuandu * ($("#chuantong .tuul li").length - 2)
                                    }
                                ,yundongshijian);
                                //小圆点跟上   *****可以改成文字******
                                $("#chuantong .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                            }
                        }   
                    }
                );
            // ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑  到这  ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
                $("#chuantong .dianul li").click(
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

                    $("#chuantong .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                }
            },
            NO3 : function(huxishijian,jiangeshijian){
                    var nowimg = 0;
                    //============定时器一堆=================
                    var timer = setInterval(youanniuyewu,jiangeshijian);
                    //============定时器一堆=================
                    $("#huxi .anniu .rightbut").click(youanniuyewu);
                    //下面是右按钮的业务，提炼出来的原因，就是定时器调用
                    function youanniuyewu(){
                        if(!$("#huxi ul li").is(":animated")){
                            //让老的信号量的元素淡出
                            $("#huxi ul li").eq(nowimg).fadeOut(huxishijian);
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
                            nowimg = $(this).index();   //让信号量改变为用户点击的那个序号
                            //让新的淡入
                            $("#huxi .tuul li").eq(nowimg).fadeIn(huxishijian);
                            //小圆点跟着变：
                            $("#huxi .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                        }
                    );
            },
            NO4 : function(){
                    var sudu = 600;
                var shangdi = false;

                //定义json
                var json0 = {"width":"174px","height":"122px","left":"-116px", "top":"100px"};
                var json1 = {"width":"356px","height":"223px","left":"0px", "top":"26px"};
                var json2 = {"width":"642px","height":"273px","left":"274px", "top":"0"};
                var json3 = {"width":"356px","height":"223px","left":"834px", "top":"26px"};
                var json4 = {"width":"174px","height":"122px","left":"1097px", "top":"100px"};
                
                var nowimg = 2;

                var timer = setInterval(youanniuyewu,2000);
                $("#youku").mouseenter(
                    function() {
                        clearInterval(timer);
                    }
                );

                $("#youku").mouseleave(
                    function() {
                        clearInterval(timer);
                        timer = setInterval(youanniuyewu,2000);
                    }
                );


                $(".you").click(youanniuyewu);
                function youanniuyewu(){
                        if(!$(".tuul li").is(":animated") || shangdi == true){
                            if(nowimg < 8){
                                nowimg ++;
                            }else{
                                nowimg = 0;
                            }
                            $(".xiaoyuandian li").eq(nowimg).addClass("cur").siblings().removeClass("cur");

                            //先交换位置
                            $(" .tuul  .no1_youku").animate(json0,sudu);
                            $(" .tuul  .no2_youku").animate(json1,sudu);
                            $(" .tuul  .no3_youku").animate(json2,sudu);
                            $(" .tuul  .no4_youku").animate(json3,sudu);
                            $(" .tuul  .no0_youku").css(json4);
                            
                            //再交换身份
                            $(".tuul  .no0_youku").attr("class","waiting");
                            $(".tuul  .no1_youku").attr("class","no0_youku");
                            $(".tuul  .no2_youku").attr("class","no1_youku");
                            $(".tuul  .no3_youku").attr("class","no2_youku");
                            $(".tuul  .no4_youku").attr("class","no3_youku");
                            //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0
                            if($(".tuul  .no3_youku").next().length != 0){
                                //如果no5后面有人，那么改变这个人的姓名为no6
                                $(".tuul  .no3_youku").next().attr("class","no4_youku");
                            }else{
                                //no5前面没人，那么改变此时队列最开头的那个人的名字为no0
                                $(".tuul li:first").attr("class","no4_youku");
                            }
                            
                            //发现写完上面的程序之后，no6的行内样式还是json0的位置，所以强制：
                            $(".no4_youku").css(json4);
                        }
                         
                    }

                $(".zuo").click(
                    function(){
                         
                        if(!$(".tuul li").is(":animated") || shangdi == true){

                            if(nowimg > 0){
                                nowimg --;
                            }else{
                                nowimg = 8;
                            }
                            $(".xiaoyuandian li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                            //先交换位置:
                            $(".tuul .no0_youku").animate(json1,sudu);
                            $(".tuul .no1_youku").animate(json2,sudu);
                            $(".tuul .no2_youku").animate(json3,sudu);
                            $(".tuul .no3_youku").animate(json4,sudu);
                            $(".tuul .no4_youku").css(json0);

                            //再交换身份
                            $(".tuul .no4_youku").attr("class","waiting");
                            $(".tuul .no3_youku").attr("class","no4_youku");
                            $(".tuul .no2_youku").attr("class","no3_youku");
                            $(".tuul .no1_youku").attr("class","no2_youku");
                            $(".tuul .no0_youku").attr("class","no1_youku");

                            //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0
                            if($(".tuul  .no1_youku").prev().length != 0){
                                //如果no1前面有人，那么改变这个人的姓名为no0
                                $(".tuul  .no1_youku").prev().attr("class","no0_youku");
                            }else{
                                //no1前面没人，那么改变此时队列最后的那个人的名字为no0
                                $(".tuul li:last").attr("class","no0_youku");
                            }

                            $(".tuul .no0_youku").css(json0);
                        }
                         
                    }
                );

                $("#youku .xiaoyuandian li").click(
                    function(){
                        sudu = 100; //临时把这个速度变化一下
                        shangdi = true; //flag

                        var yonghuandexuhao = $(this).index();
                        if(yonghuandexuhao > nowimg ){
                            var cishu = yonghuandexuhao - nowimg;
                            console.log("主人，我已经通知上帝帮你按右按钮" + cishu + "次");

                            for(var i = 1 ; i<= cishu ; i++){
                                $(".you").trigger("click"); //让上帝帮你按一次又按钮
                            }

                        }else{
                            var cishu = nowimg - yonghuandexuhao;
                            console.log("主人，我已经通知上帝帮你按左按钮" + cishu + "次");
                            for(var i = 1 ; i<= cishu ; i++){
                                $(".zuo").trigger("click"); //让上帝帮你按一次又按钮
                            }
                        }
                        nowimg = yonghuandexuhao;
                        sudu = 600; //再把速度恢复
                        shangdi = false;
                    }
                    
                );

            },
            NO5 :function(huxishijian,jiangeshijian){
                   var nowimg = 0;
                    //============定时器一堆=================
                    var timer = setInterval(youanniuyewu,jiangeshijian);
                    $("#huxi").mouseenter(
                        function() {
                            clearInterval(timer);   //停止定时器
                        }
                    );

                    $("#huxi").mouseleave(
                        function() {
                            clearInterval(timer);   //设表先关
                            timer = setInterval(youanniuyewu,jiangeshijian);
                        }
                    );
                    //============定时器一堆=================

                    $("#huxi .anniu .rightbut").click(youanniuyewu);

                    //下面是右按钮的业务，提炼出来的原因，就是定时器调用
                    function youanniuyewu(){
                        if(!$("#huxi .tuul li").is(":animated")){
                            //让老的信号量的元素淡出
                            //让淡入的语句，写在回调函数中！！
                            $("#huxi .tuul li").eq(nowimg).fadeOut(huxishijian,function(){
                                //改变信号量
                                if(nowimg < 4){
                                    nowimg = nowimg + 1;
                                }else{
                                    nowimg = 0;
                                }

                                //让新的信号量的元素淡入
                                $("#huxi .tuul li").eq(nowimg).fadeIn(huxishijian);
                                //小圆点跟着变：
                                $("#huxi .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                            });

                            
                        }
                    }
                    $("#huxi .anniu .leftbut").click(
                        function(){
                            if(!$("#huxi .tuul li").is(":animated")){
                                //让老的信号量的元素淡出
                                $("#huxi .tuul li").eq(nowimg).fadeOut(huxishijian,function(){
                                    //改变信号量
                                    if(nowimg > 0){
                                        nowimg = nowimg - 1;
                                    }else{
                                        nowimg = 4;
                                    }

                                    //让新的信号量的元素淡入
                                    $("#huxi .tuul li").eq(nowimg).fadeIn(huxishijian);

                                    //小圆点跟着变：
                                    $("#huxi .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                                });
                            }
                        }
                    );


                    $("#huxi .dianul li").click(
                        function(){
                            //让老的淡出
                            var a = $(this).index() //把用户点击的序号，临时存放在a里面。为什么临时存放，是因为this的作用域是function
                            $("#huxi .tuul li").eq(nowimg).fadeOut(huxishijian,function(){
                                nowimg = a; //让信号量改变为用户点击的那个序号
                                //让新的淡入
                                $("#huxi .tuul li").eq(nowimg).fadeIn(huxishijian);
                                //小圆点跟着变：
                                $("#huxi .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");
                            });
                            
                        }
                    );
            },
            NO6 : function(){

            var myCanvas = document.getElementById("myCanvas");
            var can = myCanvas.getContext("2d");
            var X = myCanvas.width;
            var Y = myCanvas.height;
            var oImg = new Image();
            oImg.src = "images/gao4.jpeg";
            oImg.onload = function(){
              can.beginPath();
              can.drawImage(oImg,0,0,X,Y);
              can.closePath();
            }
            var device = /android|iphone|ipad|ipod|webos|iemobile|opear mini|linux/i.test(navigator.userAgent.toLowerCase());
            var startEvtName = device?"touchstart":"mousedown";
            var moveEvtName = device?"touchmove":"mousemove";
            var endEvtName = device?"touchend":"mouseup";
            function draw(event){
              var x = device?event.touches[0].clientX:event.clientX;
              var y = device?event.touches[0].clientY:event.clientY;
              //console.log(x,y);
              can.beginPath();
              can.globalCompositeOperation = "destination-out";
              can.arc(x,y,20,0,Math.PI*2,false);
              can.fill();
              can.closePath();
            }
            //true  捕获 false  冒泡
            myCanvas.addEventListener(startEvtName,function(){
              myCanvas.addEventListener(moveEvtName,draw,false);
            },false);
            myCanvas.addEventListener(endEvtName,function(){
              myCanvas.removeEventListener(moveEvtName,draw,false);
            },false);

            },
            NO7 :function(){
                 $(function(){
                     // 路径配置
                      require.config({
                          paths: {
                              echarts: 'http://echarts.baidu.com/build/dist'
                          }
                      });
                      
                      // 使用
                      require(
                          [
                              'echarts',
                              'echarts/chart/bar' // 使用柱状图就加载bar模块，按需加载
                          ],
                          function (ec) {
                              // 基于准备好的dom，初始化echarts图表
                              var myChart = ec.init(document.getElementById('main')); 
                              
                              var option = {
                                  tooltip: {
                                      show: true
                                  },
                                  legend: {
                                      data:['表格']
                                  },
                                 textStyle: {
                                            color: '#fff;'
                                        },
                                  xAxis : [
                                      {
                                          type : 'category',
                                          data : ["1","2","3","4","5","6"]
                                      }
                                  ],
                                  yAxis : [
                                      {
                                          type : 'value'
                                      }
                                  ],
                                  series : [
                                      {
                                          "name":"表格",
                                          "type":"bar",
                                          "data":[5, 20, 40, 10, 10, 20]
                                      }
                                  ]
                              };
                      
                              // 为echarts对象加载数据 
                              myChart.setOption(option); 
                          }
                      );
                }())
            }
       }
             var _html = [
                    '<div id="baiyechuang"><div class="tutu"><div class="maonimen"> <p></p><p></p><p></p><p></p><p></p><p></p><p></p></div><div class="zhentu"><img src="images/0.jpg" alt="" /></div></div><div class="anniu"><span class="leftbut"></span><span class="rightbut"></span></div><ul class="dianul"><li class="cur"></li><li></li><li></li><li></li><li></li></ul></div>',
                    '<div id="chuantong"><ul class="tuul"><li><a href="#"><img src="images/0.jpg" /></a></li><li><a href="#"><img src="images/1.jpg" /></a></li><li><a href="#"><img src="images/2.jpg" /></a></li><li><a href="#"><img src="images/3.jpg" /></a></li><li><a href="#"><img src="images/4.jpg" /></a></li></ul><div class="anniu"><span class="leftbut"></span><span class="rightbut"></span></div><ul class="dianul"><li class="cur"></li><li></li><li></li><li></li><li></li></ul></div>',
                    '<div id="huxi"><ul class="tuul"><li class="no1"><a href="#"><img src="images/0.jpg" /></a></li><li><a href="#"><img src="images/1.jpg" /></a></li><li><a href="#"><img src="images/2.jpg" /></a></li><li><a href="#"><img src="images/3.jpg" /></a></li><li><a href="#"><img src="images/4.jpg" /></a></li><li><a href="#"><img src="images/5.jpg" /></a></li><li><a href="#"><img src="images/6.jpg" /></a></li></ul><div class="anniu"><span class="leftbut"></span><span class="rightbut"></span></div><ul class="dianul"><li class="cur"></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div>',
                    '<div id="youku"><div class="anniu"><span class="zuo"></span><span class="you"></span></div><ul class="tuul"><li class="no0_youku"><a href="#"><img src="images/youku/0.jpg" /></a></li><li class="no1_youku"><a href="#"><img src="images/youku/1.jpg" /></a></li><li class="no2_youku"><a href="#"><img src="images/youku/2.jpg" /></a></li><li class="no3_youku"><a href="#"><img src="images/youku/3.jpg" /></a></li><li class="no4_youku"><a href="#"><img src="images/youku/4.jpg" /></a></li><li class="waiting"><a href="#"><img src="images/youku/5.jpg" /></a></li><li class="waiting"><a href="#"><img src="images/youku/6.jpg" /></a></li><li class="waiting"><a href="#"><img src="images/youku/7.jpg" /></a></li><li class="waiting"><a href="#"><img src="images/youku/8.jpg" /></a></li></ul><div class="xiaoyuandian"><ul><li></li><li></li><li class="cur"></li><li></li><li></li><li></li><li></li><li></li><li></li></ul></div></div>',
                    '<div id="huxi"><ul class="tuul"><li class="no1"><a href="#"><img src="images/0.jpg" /></a></li><li><a href="#"><img src="images/1.jpg" /></a></li><li><a href="#"><img src="images/2.jpg" /></a></li><li><a href="#"><img src="images/3.jpg" /></a></li><li><a href="#"><img src="images/4.jpg" /></a></li></ul><div class="anniu"><span class="leftbut"></span><span class="rightbut"></span></div><ul class="dianul"><li class="cur"></li><li></li><li></li><li></li><li></li></ul></div>',
                    '<div class="device device-fixed" id="city-pickerInDevice"><div class="device-content"><div id="iwindow"><iframe src="demo.html" width="320" height="569" frameborder="0"></iframe></div></div></div>',
                    '<div class="device device-fixed" id="city-pickerInDevice"><div class="device-content"><div id="iwindow"><iframe src="demo2.html" width="320" height="569" frameborder="0"></iframe></div></div></div>',
                    '<div class="device device-fixed" id="city-pickerInDevice"><div class="device-content"><div id="iwindow"><iframe src="demo3.html" width="320" height="569" frameborder="0"></iframe></div></div></div>',
                    '<div class="boxCavans"><canvas id="myCanvas" width="336" height="410"></canvas></div>',
                    ' <div id="main" style="height:400px;background:#fff;"></div>'
                    ]                  
            if(value == 1){
                  a.append(_html[0]);
                  XG.NO1();
            }else if(value == 2){
                 a.append(_html[1]);
                XG.NO2(1000,200,560);
            }else if(value == 3){
                 a.append(_html[2]);
                 XG.NO3(3000,500);
        
            }else if(value == 4){
                 a.append(_html[3]);
                XG.NO4();
            }else if(value == 5){
                 a.append(_html[4]);
                 XG.NO5(300,5000);
            }
            else if(value == 6){
               
                 a.append(_html[5]);

            }  else if(value == 7){
               
                 a.append(_html[6]);

            }else if(value == 8){
               
                 a.append(_html[7]);

            }else if(value == 9){
               
                 a.append(_html[8]);
                 XG.NO6();

            }else if(value == 10){
                 
                 a.append(_html[9]);
                 XG.NO7();

            }

         },
          jianli : function(){
           var canvas = document.querySelector('#demoCanvas');
           var ctx    = canvas.getContext("2d");
           var data = [{
                "value": .15,
                "color": "red",
                "title": "JS"
            },{
                "value": .25,
                "color": "blue",
                "title": "Jquery"
            },{
                "value": .3,
                "color": "green",
                "title": "HTML5"
            },{
                "value": .05,
                "color": "#35b752",
                "title": "angular"
            },{
                "value": .25,
                "color": "#e69e42",
                "title": "CSS3"
            }
            ]; 

            var x1,y1,R
            var ua = navigator.userAgent;

			var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
			    isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
			    isAndroid = ua.match(/(Android)\s+([\d.]+)/),
			    isMobile = isIphone || isAndroid;
			    if(isMobile) {
			    	x1 = 150
			    	y1 = 200
			    	R  = 70
			    }else{
                     x1 = 200
                     y1 = 250
                     R  = 100
			    }

            var  t = -90;
         
            canvas.width = 600;
            canvas.height = 600;
            for (var i = 0; i < data.length; i++) {
              ctx.beginPath();
              ctx.moveTo(x1, y1)
              var z =  data[i].value*360
              ctx.fillStyle =  data[i].color;
              ctx.arc(x1, y1, R,t*Math.PI/180 , (t+z)*Math.PI/180);
              var x,y
              var Tex1 = data[i].title
              var textAngle  = t + 1/2 *z    
              x = x1 + Math.cos(textAngle*Math.PI/180)*(R+20)
              y = y1 + Math.sin(textAngle*Math.PI/180)*(R+20)
                if(textAngle>90&&textAngle<270){
                  ctx.textAlign ='end'
                }
                ctx.fill();
               
                ctx.fillText(Tex1, x, y)
              t += z

           
            };
      },MobileEvent(){
   //          var ua = navigator.userAgent;
			// var ipad = ua.match(/(iPad).*OS\s([\d_]+)/),
			//     isIphone = !ipad && ua.match(/(iPhone\sOS)\s([\d_]+)/),
			//     isAndroid = ua.match(/(Android)\s+([\d.]+)/),
			//     isMobile = isIphone || isAndroid;
			//     if (isMobile) {
   //                   // $('.nav1 .p span').css('display','none');
   //                    $("#demo .demo_centent").on("touchend", function (event) {
			// 		    event.preventDefault();
			// 		});

			//     };

      }

     
}

var s = new Agemove();
   s._init();