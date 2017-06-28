<template>
    <div id="Exhibition">
        <div class="Exhibition_hd">
             页面效果，大多都是一些常见的。比如轮播图等,现在页面上的效果很多，比如H5 canvas,svg,还有很多动画的插件，VUE动画可以结合Animate.css，可以说现在的动画效果太多了，本人canvas懂一点点，svg
            基本上就是小白。
        </div>
        <div class="bx Exhibition_bd">
             <ul>
                 <li v-for="(item,sindex) in ExhibiData" @click="showBG(sindex)">
                     <img :src = 'item.img_url' width = '260'height= '160'>
                     <span>{{item.name}}</span>
                     <div class="Exhibition_bg">{{item.name}}</div>
                 </li>
             </ul>
        </div>
        <div id="tempaltes" v-show="bgshow">
            <div id="baiyechuang" class="box0" style="display:none;">
                <div class="tutu">
                    <div class="maonimen">
                    </div>
                    <div class="zhentu">
                        <img src="../assets/images/0.jpg" alt=""/>
                    </div>
                </div>
                <div class="anniu">
                    <span class="leftbut"></span><span class="rightbut"></span>
                </div>
            </div>

            <div style="display:none;"class="box1"  id="youku">
                <div class="anniu">
                    <span class="zuo"></span><span class="you"></span>
                </div>
                <ul class="tuul">
                    <li class="no0"><a href="#"><img src="../assets/images/b9.jpg"/></a></li>
                    <li class="no1"><a href="#"><img src="../assets/images/b1.jpg"/></a></li>
                    <li class="no2"><a href="#"><img src="../assets/images/b2.jpg"/></a></li>
                    <li class="no3"><a href="#"><img src="../assets/images/b3.jpg"/></a></li>
                    <li class="no4"><a href="#"><img src="../assets/images/b4.jpg"/></a></li>
                    <li class="waiting"><a href="#"><img src="../assets/images/b5.jpg"/></a></li>
                    <li class="waiting"><a href="#"><img src="../assets/images/b6.jpg"/></a></li>
                    <li class="waiting"><a href="#"><img src="../assets/images/b7.jpg"/></a></li>
                    <li class="waiting"><a href="#"><img src="../assets/images/b8.jpg"/></a></li>
                </ul>
                <div class="xiaoyuandian">
                    <ul>
                        <li></li>
                        <li></li>
                        <li class="cur"></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <div style="display:none;" class="box2" id="baiye">
                <div class="tutu">
                    <div class="maonimen">
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                        <p></p>
                    </div>
                    <div class="zhentu">
                        <img src="../assets/images/1.jpg"  />
                    </div>
                </div>
                <div class="anniu">
                    <span class="leftbut"></span>
                    <span class="rightbut"></span>
                </div>
                <ul class="dianul">
                    <li class="cur"></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
            <div style="display:none;"  class="stage box3">
                <ul>
                    <li class="liang"><img src="../assets/images/10.jpg" /></li>
                    <li class="liang"><img src="../assets/images/20.jpg" /></li>
                    <li><img src="../assets/images/30.jpg" /></li>
                    <li><img src="../assets/images/40.jpg" /></li>
                    <li><img src="../assets/images/50.jpg" /></li>
                    <li><img src="../assets/images/60.jpg" /></li>
                    <li><img src="../assets/images/70.jpg" /></li>
                    <li><img src="../assets/images/80.jpg" /></li>
                    <li class="liang"><img src="../assets/images/90.jpg" /></li>
                </ul>
                <input type="button" value="点击走一下">
            </div>
            <div class="box4" style="display:none;" >
                <div class="shangpin">
                    <img src="../assets/images/xiaotu.jpg" />
                    <div class="fangdajing"></div>
                </div>
                <div class="fangdatu"></div>
            </div>
        </div>
        <bgbody v-show="bgshow"></bgbody>
    </div>
</template>
<style>
 #Exhibition .Exhibition_hd{width:600px;margin: 0 auto; margin-top: 50px;font-size: 16px;border: 1px solid #d43d3d;
     line-height:34px;box-sizing: border-box;padding: 20px;text-indent: 2em;color: #f44336;}
 #Exhibition .Exhibition_bd{margin-top: 100px;overflow: hidden; }
 #Exhibition .Exhibition_bd li{  float: left; width: 29%;margin: 20px; position: relative;text-align: center;overflow: hidden;border: 1px solid #ccc;}
 #Exhibition .Exhibition_bd li span {display: block;padding-left: 1%;line-height: 28px;font-size: 16px;color: #f44336;}
 #Exhibition .Exhibition_bd li img {transition: all 0.4s ease 0s;}
 #Exhibition .Exhibition_bd li:hover img{transform: scale(1.4);}
 .Exhibition_bg{display: none; position: absolute;top: 0;left: 0;width: 100%;height: 100%;
     background:rgba(160, 165, 165, 0.5);text-align: center;
     line-height:191px;color: #ffffff;
     font-size:16px;}
 #Exhibition .Exhibition_bd li:hover  .Exhibition_bg{display: block;}
  #tempaltes{margin-top:200px; }
  #baiyechuang{
			width: 560px;
			height: 300px;
			margin: 100px auto;
			position: relative;
			overflow:hidden;
		}
		#baiyechuang .anniu .leftbut{
			position: absolute;
			width: 45px;
			height: 45px;
			top: 122px;
			left: 10px;
			background:url(../assets/images/icons.png) no-repeat 0 0;
			cursor: pointer;
		}
		#baiyechuang .anniu .rightbut{
			position: absolute;
			width: 45px;
			height: 45px;
			top: 122px;
			right: 10px;
			background:url(../assets/images/icons.png) no-repeat 0 -45px;
			cursor: pointer;
		}
		#baiyechuang .dianul{
			list-style: none;
			position: absolute;
			right: 27px;
			bottom: 12px;
		}
		#baiyechuang .dianul li{
			float: left;
			width: 15px;
			height: 15px;
			margin-right: 8px;
			background:url(../assets/images/icons.png) no-repeat -23px -125px;
			cursor: pointer;
		}
		#baiyechuang .dianul li.cur{
			background-position: -8px -125px;
		}
		#baiyechuang .tutu .maonimen p{
			position: absolute;
			width: 0px;
			height: 300px;
			background-image:url(../assets/images/1.jpg);
			font-size: 50px;
			overflow: hidden;
		}
			#youku{
			width: 1189px;
			height: 360px;
			margin: 100px auto;
			position: relative;

			overflow: hidden;
		}
		#youku ul{
			list-style: none;
		}
		#youku .tuul li{
			position: absolute;
			background-color: black;
		}
		#youku li.waiting{
			display: none;
		}
		#youku li img{
			width: 100%;
			height: 100%;
		}


		#youku .anniu .zuo{
			position: absolute;
			width: 45px;
			height: 45px;
			background:url(../assets/images/zuo.png) no-repeat;
			top:100px;
			left:10px;
			z-index: 1000;
			cursor: pointer;
		}
		#youku .anniu .you{
			position: absolute;
			width: 45px;
			height: 45px;
			background:url(../assets/images/you.png) no-repeat;
			top:100px;
			right:10px;
			z-index: 1000;
			cursor: pointer;
		}

		#youku li.no0{width: 174px;height:122px;left:-116px;top:100px;z-index: 777;}
		#youku li.no1{width: 356px;height:223px;left:0px;top:26px;z-index: 888;}
		#youku li.no2{width: 642px;height:273px;left:274px;top:0px;z-index: 999;}
		#youku li.no3{width: 356px;height:223px;left:834px;top:26px;z-index: 888;}
		#youku li.no4{width: 174px;height:122px;left:1097px;top:100px;z-index: 777;}

		#youku li.no1 img , #youku li.no3 img{
			opacity: 0.3;
		}
		#youku .xiaoyuandian{
			width: 600px;
			height: 20px;
			position: absolute;
			top: 312px;
			left: 454px;
		}
		#youku .xiaoyuandian ul li{
			float: left;
			width: 16px;
			height: 16px;
			background-color: blue;
			margin-right: 10px;
			border-radius: 100px;
			cursor: pointer;
		}
		#youku .xiaoyuandian ul li.cur{
			background-color:green;
		}
		#wufeng{
			width: 800px;
			height: 130px;
			border: 1px solid red;
			margin: 100px auto;
			position: relative;
			overflow: hidden;
		}
		#wufeng ul{
			list-style: none;
			width: 101010px;
			position: absolute;
			left: 0;
			top: 0;
		}
		#wufeng ul li{
			float: left;
			margin-right: 20px;
		}
	#baiye{
			width: 560px;
			height: 300px;
			margin: 100px auto;
			position: relative;
		}
		#baiye .anniu .leftbut{
			position: absolute;
			width: 45px;
			height: 45px;
			top: 122px;
			left: 10px;
			background:url(../assets/images/icons.png) no-repeat 0 0;
			cursor: pointer;
		}
		#baiye .anniu .rightbut{
			position: absolute;
			width: 45px;
			height: 45px;
			top: 122px;
			right: 10px;
			background:url(../assets/images/icons.png) no-repeat 0 -45px;
			cursor: pointer;
		}
		#baiye .dianul{
			list-style: none;
			position: absolute;
			right: 27px;
			bottom: 12px;
		}
		#baiye .dianul li{
			float: left;
			width: 15px;
			height: 15px;
			margin-right: 8px;
			background:url(../assets/images/icons.png) no-repeat -23px -125px;
			cursor: pointer;
		}
		#baiye .dianul li.cur{
			background-position: -8px -125px;
		}
		#baiye .maonimen{
			-webkit-perspective:600px;
		}
		#baiye .maonimen p{
			position: absolute;
			width: 140px;
			height: 100px;
			background-image:url(../assets/images/0.jpg);
			font-size: 40px;
		}
		#baiye .maonimen.fei p{
			opacity: 0;
		}
		#baiye .maonimen.fei p:nth-child(1){-webkit-transform:rotateX(30deg) rotateY(10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(2){-webkit-transform:rotateX(330deg) rotateY(10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(3){-webkit-transform:rotateX(3450deg) rotateY(10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(4){-webkit-transform:rotateX(-30deg) rotateY(-10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(5){-webkit-transform:rotateX(330deg) rotateY(10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(6){-webkit-transform:rotateX(40deg) rotateY(20deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(7){-webkit-transform:rotateX(340deg) rotateY(10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(8){-webkit-transform:rotateX(3450deg) rotateY(60deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(9){-webkit-transform:rotateX(230deg) rotateY(10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(10){-webkit-transform:rotateX(20deg) rotateY(20deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(11){-webkit-transform:rotateX(30deg) rotateY(10deg) translateZ(400px);}
		#baiye .maonimen.fei p:nth-child(12){-webkit-transform:rotateX(10deg) rotateY(10deg) translateZ(400px);}
		.stage{
			width: 800px;
			height: 300px;
			margin: 100px auto;
			position: relative;
			-webkit-perspective:600px;
			-webkit-transform-style: preserve-3d;
		}
		.stage ul{
			list-style: none;
			-webkit-transform-style: preserve-3d;
			-webkit-transform:rotateX(-5deg) rotateY(0deg);
			transition:all 1s ease 0s;
		}
		.stage ul li{
			position: absolute;
			width: 200px;
			height: 130px;
			left: 300px;
			top: 85px;
			opacity: 0.5;
			transition:all 1s ease 0s;
		}
		.stage ul li img{
			width: 200px;
			height: 130px;
		}
		.stage ul li.liang{
			opacity: 1;
		}
		.stage ul li:nth-child(1){
			-webkit-transform:rotateY(0deg) translateZ(274.747918px);
		}
		.stage ul li:nth-child(2){
			-webkit-transform:rotateY(40deg)  translateZ(274.747918px);
		}
		.stage ul li:nth-child(3){
			-webkit-transform:rotateY(80deg)  translateZ(274.747918px);
		}
		.stage ul li:nth-child(4){
			-webkit-transform:rotateY(120deg)  translateZ(274.747918px);
		}
		.stage ul li:nth-child(5){
			-webkit-transform:rotateY(160deg)  translateZ(274.747918px);
		}
		.stage ul li:nth-child(6){
			-webkit-transform:rotateY(200deg)  translateZ(274.747918px);
		}
		.stage ul li:nth-child(7){
			-webkit-transform:rotateY(240deg)  translateZ(274.747918px);
		}
		.stage ul li:nth-child(8){
			-webkit-transform:rotateY(280deg)  translateZ(274.747918px);
		}
		.stage ul li:nth-child(9){
			-webkit-transform:rotateY(320deg)  translateZ(274.747918px);
		}
	.stage input {
	width: 70px;
    height: 40px;
    line-height: 40px;
    background-image: -webkit-linear-gradient(top,#CFB1D3, #C883B0);
    border: none;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    bottom: 30px;
    left: 50px;
    position: absolute;
    -webkit-animation: niu 1.5s linear 0s infinite;
    }
    @-webkit-keyframes niu{
			from{
				bottom: 30px;
                 left: 900px;
			}
			to{
				bottom: 50px;
                 left: 900px;
			}
		 }
		 .shangpin{
			width: 350px;
			height: 350px;
			border: 1px solid #000;
			margin: 150px;
			position: relative;
			float: left;
			margin-right: 10px;
		}
		.shangpin .fangdajing{
			width: 175px;
			height: 175px;
			position: absolute;
			top: 0;
			left: 0;
			background-color: #FEDE4F;
			border: 1px solid #aaa;
			opacity: 0.5;
			display: none;
			cursor: move;
		}
		.fangdatu{
			width: 400px;
			height: 400px;
			border: 1px solid #000;
			float: left;
			margin-top: 150px;
			background: url(../assets/images/datu.jpg) no-repeat 0 0;
			display: none;
		}
</style>
<script>
    import  {mapGetters,mapActions} from 'vuex'
    export default {
        data(){
            return {
                ExhibiData: [
                    {name: '效果一', img_url: './src/assets/images/10.jpg'},
                    {name: '效果二', img_url: './src/assets/images/20.jpg'},
                    {name: '效果三', img_url: './src/assets/images/30.jpg'},
                    {name: '效果四', img_url: './src/assets/images/40.jpg'},
                    {name: '效果五', img_url: './src/assets/images/50.jpg'}
                ]

            }
        },
        computed:mapGetters([
            'bgshow',
            'scrollT'
        ]),
        methods :{
             showBG(index){
                this.$store.dispatch('SHOW_BG');
                this.$store.commit('GETSCROLLT',{
                     amount:index
                 });
                 this.domEvent(index)
             },
         domEvent(index,o){
                   console.log(index)
                   if (index == 0 ){
                     $('.box0').show().siblings().hide();
                     $('.box0').css({'margin-top':'-700px','z-index':'999'})
                      m.num0(o);
                   }else if(index == 1 ){
                   $('.box1').show().siblings().hide();
                    $('.box1').css({'margin-top':'-700px','z-index':'999'})
                      m.num1(o);
                   }else if(index == 2 ){
                   $('.box2').show().siblings().hide();
                    $('.box2').css({'margin-top':'-700px','z-index':'999'})
                      m.num2(o);
                   }else if(index == 3 ){
                   $('.box3').show().siblings().hide();
                    $('.box3').css({'margin-top':'-700px','z-index':'999'})
                      m.num3(o);
                   }else if(index == 4 ){
                   $('.box4').show().siblings().hide();
                    $('.box4').css({'margin-top':'-900px','margin-left':'200px','z-index':'999','position': 'relative'})
                      m.num4(o);
                   }

             }

        }
    }
    var m  =  {
     num0 : function(o){
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
                     $("#baiyechuang .rightbut").click(
                         function(){
                             if(nowimg1 < 4){
                                 nowimg1 ++;
                             }else{
                                 nowimg1 = 0;
                             }
                             huantu();
                         }
                     );
                     $("#baiyechuang .leftbut").click(
                         function(){
                             if(nowimg1 > 0){
                                 nowimg1 --;
                             }else{
                                 nowimg1 = 4;
                             }
                             huantu();
                         }
                     );
                     $("#baiyechuang .dianul li").click(
                         function(){
                             nowimg1 = $(this).index();
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
    num1: function(o){

                var sudu = 600;
                var shangdi = false;
                var json0 = {"width":"174px","height":"122px","left":"-116px", "top":"100px"};
                var json1 = {"width":"356px","height":"223px","left":"0px", "top":"26px"};
                var json2 = {"width":"642px","height":"273px","left":"274px", "top":"0"};
                var json3 = {"width":"356px","height":"223px","left":"834px", "top":"26px"};
                var json4 = {"width":"174px","height":"122px","left":"1097px", "top":"100px"};
                var nowimg = 2;

                $("#youku .you").click(youanniuyewu);
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
                $("#youku .zuo").click( function(){
                        if(!$(".tuul li").is(":animated") || shangdi == true){
                            if(nowimg > 0){
                                nowimg --;
                            }else{
                                nowimg = 8;
                            }
                            $(".xiaoyuandian li").eq(nowimg).addClass("cur").siblings().removeClass("cur");

                            $(".no0").animate(json1,sudu);
                            $(".no1").animate(json2,sudu);
                            $(".no2").animate(json3,sudu);
                            $(".no3").animate(json4,sudu);
                            $(".no4").css(json0);

                            $(".no4").attr("class","waiting");
                            $(".no3").attr("class","no4");
                            $(".no2").attr("class","no3");
                            $(".no1").attr("class","no2");
                            $(".no0").attr("class","no1");

                            if($(".no1").prev().length != 0){

                                $(".no1").prev().attr("class","no0");
                            }else{

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
                },
     num2 : function(o){

               var _this = this;
                var nowimg = 0;



				$("#baiye .maonimen p").each(
					function(){
						var a = $(this).index() % 4 * 140;
						var b = parseInt($(this).index() / 4) * 100;
						$(this).css(
							{
								"left":a,
								"top": b,
								"background-position":(-a) + "px " + (-b) + "px"
							}
						);
					}
				);

				$("#baiye .rightbut").click(youanniuyewu);
				function youanniuyewu(){
						if(nowimg < 4){
							nowimg ++;
						}else{
							nowimg = 0;
						}
						dong();
					}
				$("#baiye .leftbut").click(
					function(){
						if(nowimg > 0 ){
							nowimg --;
						}else{
							nowimg = 4;
						}
						dong();
					}
				);
                $("#baiye .dianul li").click(
                	function() {
                	     nowimg = $(this).index();
                	     dong();
                }
                );
				function dong(){
						//加过渡：

						$("#baiye .maonimen p").css("transition","all 1s ease 0s");
						$("#baiye .maonimen").addClass("fei");

						$("#baiye .zhentu img").attr("src","./src/assets/images/" + nowimg + ".jpg");
						$("#baiye .dianul li").eq(nowimg).addClass("cur").siblings().removeClass("cur");

						setTimeout(function(){
							//去掉过渡
							$("#baiye .maonimen p").css("transition","none");
							$("#baiye .maonimen p").css("background-image","url(./src/assets/images/" + nowimg + ".jpg)");
							//我们准备下一张图
							$("#baiye .maonimen").removeClass("fei");
						},1000);
				}

         },
      num3 : function (){
      			var g =$(window).height();
				var A = $(window).width();
				var B =	$(".box1").width();
				var c =$(".box1").height();
				var n=$("#niun").width();
				var nowdushu = 0;
				var nowliang = 0; //1号盒子是亮的。
                $(".stage input").click(dong);
					function dong(){
						nowdushu = nowdushu - 40;
						if(nowliang < 8){
							nowliang = nowliang  + 1;
						}else{
							nowliang = 0;
						}
						$(".stage ul").css("-webkit-transform","rotateX(-5deg) rotateY(" + nowdushu + "deg)");
						$(".stage ul li").removeClass("liang");


						$(".stage ul li").eq(nowliang).addClass("liang");


						if($(".stage ul li").eq(nowliang).next().length != 0){
							$(".stage ul li").eq(nowliang).next().addClass("liang");
						}else{
							$(".stage ul li:first").addClass("liang");
						}


						if($(".stage ul li").eq(nowliang).prev().length != 0){
							$(".stage ul li").eq(nowliang).prev().addClass("liang");
						}else{
							$(".stage ul li:last").addClass("liang");
						}
					}

				//给舞台添加鼠标移动事件监听
				$(".stage").mousemove(
					function(e){
						var y = (e.pageY - $(".stage").offset().top)/10;

						$(".stage").css("-webkit-transform","rotateX(-" + y +"deg)");

					}
				);
                $("#niun").css("left",(A-n)/2);
				$(".box1").css("left",(A-B)/2);
				$(".box1").css("top",(g-c)/2 );
				$(".page1 input").click(
					function(){
						$(".container").animate(
							{
								"top":0,
								"left":"-120%"
							},1000
						);
					}
				);

				$(".page2 input").click(
					function(){
						$(".container").animate(
							{
								"top":"-110%",
								"left":"-10%"
							},1000
						);
					}
				);
      },
      num4:function(){
       $(".shangpin").mouseenter(
					function(){
						$(".fangdajing").show();
						$(".fangdatu").show();
					}
				);

				$(".shangpin").mouseleave(
					function(){
						$(".fangdajing").hide();
						$(".fangdatu").hide();
					}
				);

				$(".shangpin").mousemove(
					function(e){
						var x = e.pageX - $(".shangpin").offset().left - 177/2;
						var y = e.pageY - $(".shangpin").offset().top - 177/2;

						//验收：
						if(x < 0){
							x = 0;
						}else if(x > 175){
							x = 175;
						}


						if(y < 0){
							y = 0;
						}else if(y > 175){
							y = 175;
						}

						$(".fangdajing").css(
							{
								"left":x,
								"top":y
							}
						);

insert
						var fangdatux = -x * 800 / 350;
						var fangdatuy = -y * 800 / 350;
						$(".fangdatu").css("background-position",fangdatux + "px " + fangdatuy + "px");
					}
				);

      }
}
</script>
