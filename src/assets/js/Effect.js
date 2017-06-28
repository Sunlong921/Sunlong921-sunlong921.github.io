var m  =  {
     num0 : function(){
         var nowimg1 = 0;
         var lieshu = 23;
         for(var i = 1 ; i<=lieshu; i++){
             $("#baiyechuang .tutu .maonimen").append("<p></p>");
         }
         $("#baiyechuang .tutu .maonimen p").each(
             function(){
                 $(this).css(
                     {
                         "left":$(this).index() * (560 / lieshu),
                         "background-position":$(this).index() * - (560 / lieshu) +"px 0"
                     }
                 );
             }
         );
         $(".rightbut").click(
             function(){
                 if(nowimg1 < 4){
                     nowimg1 ++;
                 }else{
                     nowimg1 = 0;
                 }
                 huantu();
             }
         );
         $(".leftbut").click(
             function(){
                 if(nowimg1 > 0){
                     nowimg1 --;
                 }else{
                     nowimg1 = 4;
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
             $(".maonimen p").css("background-image","url(./src/assets/images/" + nowimg1 + ".jpg)");
             $(".maonimen p").animate({"width":(560 / lieshu)},500,function(){
                 $(".zhentu img").attr("src","./src/assets/images/" + nowimg1 + ".jpg");
                 $(".maonimen p").css("width",0);
             });
             $(".dianul li").eq(nowimg1).addClass("cur").siblings().removeClass("cur");
         }
     },
    num1: function(){
        var sudu = 600;
        var shangdi = false;
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
                $(".no1").animate(json0,sudu);
                $(".no2").animate(json1,sudu);
                $(".no3").animate(json2,sudu);
                $(".no4").animate(json3,sudu);
                $(".no0").css(json4);
                //再交换身份
                $(".no0").attr("class","waiting");
                $(".no1").attr("class","no0");
                $(".no2").attr("class","no1");
                $(".no3").attr("class","no2");
                $(".no4").attr("class","no3");
                //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0
                if($(".no3").next().length != 0){
                    //如果no5后面有人，那么改变这个人的姓名为no6
                    $(".no3").next().attr("class","no4");
                }else{
                    //no5前面没人，那么改变此时队列最开头的那个人的名字为no0
                    $(".tuul li:first").attr("class","no4");
                }

                //发现写完上面的程序之后，no6的行内样式还是json0的位置，所以强制：
                $(".no4").css(json4);
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
                    $(".no0").animate(json1,sudu);
                    $(".no1").animate(json2,sudu);
                    $(".no2").animate(json3,sudu);
                    $(".no3").animate(json4,sudu);
                    $(".no4").css(json0);
                    //再交换身份
                    $(".no4").attr("class","waiting");
                    $(".no3").attr("class","no4");
                    $(".no2").attr("class","no3");
                    $(".no1").attr("class","no2");
                    $(".no0").attr("class","no1");
                    //上面的交换身份，把no0搞没了！所以，我们让no1前面那个人改名为no0
                    if($(".no1").prev().length != 0){
                        //如果no1前面有人，那么改变这个人的姓名为no0
                        $(".no1").prev().attr("class","no0");
                    }else{
                        //no1前面没人，那么改变此时队列最后的那个人的名字为no0
                        $(".tuul li:last").attr("class","no0");
                    }
                    $(".no0").css(json0);
                }

            }
        );
        $("#youku .xiaoyuandian li").click(
            function(){
                sudu = 100;	//临时把这个速度变化一下
                shangdi = true;	//flag
                var yonghuandexuhao = $(this).index();
                if(yonghuandexuhao > nowimg ){
                    var cishu = yonghuandexuhao - nowimg;
                    console.log("主人，我已经通知上帝帮你按右按钮" + cishu + "次");
                    for(var i = 1 ; i<= cishu ; i++){
                        $(".you").trigger("click");
                    }

                }else{
                    var cishu = nowimg - yonghuandexuhao;
                    console.log("主人，我已经通知上帝帮你按左按钮" + cishu + "次");
                    for(var i = 1 ; i<= cishu ; i++){
                        $(".zuo").trigger("click");
                    }
                }
                nowimg = yonghuandexuhao;
                sudu = 600;
                shangdi = false;
            });
    }
}
