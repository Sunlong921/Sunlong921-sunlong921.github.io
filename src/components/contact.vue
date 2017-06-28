<template>
    <div >
        <div class="guanyv page">
            <div id="zhong2">
                <div class="jianli">
                    <div class="yuan">
                        <p>个人简历</p>
                    </div>
                    <div class="inner">
                        <div class="left">
                            <img src="" alt="" />
                            <table>
                                <tr>
                                    <th>姓&nbsp;&nbsp;&nbsp;名：</th>
                                    <td>孙&nbsp;龙</td>
                                </tr>
                                <tr>
                                    <th>户&nbsp;&nbsp;&nbsp;籍：</th>
                                    <td>黑龙江省漠河县</td>
                                </tr>
                                <tr>
                                    <th>出生日期：</th>
                                    <td>1992-01-01</td>
                                </tr>
                                <tr>
                                    <th>婚姻状况：</th>
                                    <td>未婚</td>
                                </tr>
                                <tr>
                                    <th>求职意向:</th>
                                    <td>web前端开发、</td>
                                </tr>
                                <tr>
                                    <th>电话：</th>
                                    <td>13262603305</td>
                                </tr>
                                <tr>
                                    <th>QQ&&微信：</th>
                                    <td>569778375</td>
                                </tr>
                            </table>
                        </div>
                        <div class="right">
                            <div class="sg">
                                <h3>职业技能：</h3>
                                <p>1、熟悉HTML、CSS、HTML5、CSS3</p>
                                <p>2、熟悉js、jQuery实现网页特效</p>
                                <p>3、熟悉vue、了解angular1.0</p>
                                <p>4、了解webpack、npm</p>
                                <p>5、vue个人展示页：https://sunlong921.github.io/</p>
                                <span></span>
                            </div>
                            <div class="xia">
                                <h3>关于我的介绍：</h3>
                                <p>保持着一种良好的心态，要求自己必须认真刻苦、吃苦耐劳。虚心好学、能够正确对待、处理生活及工作中遇到的各种困难，接受能力和独立能力强，有很强的团队精神和集体荣誉感。工作上不马虎，认真负责，有很强的责任心。有强烈的上进心、事业心，良好的环境适应能力。工作环境上，善于独立思考、独立解决问题，能够举一反三。对于别人提出的工作建议，我也会虚心听取。追求今日事今日毕。</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style>
.guanyv { width: 980px; margin:  0 auto;  position: relative;}

.guanyv #zhong2{
	position: absolute;
	left: 0;
	top: 0;
   }
.guanyv .jianli{
    	width: 980px;
    	margin: 0 auto;
    	padding-top:50px;
    	position: relative;
        left:-10000px;
    }

.guanyv .jianli .yuan{
    	width: 80px;
    	height: 80px;
    	border-radius: 150px;
    	background: #3f4e5d;
    	position: absolute;
    	left: 450px;
    	top: 50;
    	text-align: center;
        transition:all 1s ease 0.5s;
        cursor: pointer;
        z-index: 1;
        -webkit-transform:rotateY(-300deg) translateZ(1800px);
    }
    .guanyv.cur  .jianli .yuan{
    	-webkit-transform:rotateY(0deg) translateZ(0px);
    }
    .guanyv .jianli .yuan:hover{
    	background-color:#AAB4B3;
    	-webkit-transform:rotateX(360deg);
    }
     .guanyv .jianli .yuan p{
     	padding-top: 30px;
     	font-size: 18px;
     	color: #fff;
     	transition:all 1s ease 0.3;
     }
     .guanyv .jianli .yuan:hover p{
     	color: #4B5B72;
     }

     .guanyv .jianli .inner{
     	width: 740px;
     	height: 479px;
     	background-color: #C5C2C2;
        border: #ccc;
        box-shadow: 1px 1px 2px #999;
        position: absolute;
        top: 80px;
        right:100px;
        opacity: 0.5;
        transition:all 1s ease 0s;
        -webkit-transform:rotateY(300deg) translateZ(1600px);
     }
      .guanyv.cur  .jianli .inner{
     -webkit-transform:rotateY(0deg) translateZ(0px);
    }

     .guanyv .jianli .inner .left{
          float: left;
          padding-left: 20px;
          width: 40%;
     }
     .guanyv .jianli .inner table{
     	padding-left: 20px;
     	padding-top: 50px;
     }
     .guanyv .jianli .inner table tr{
     	text-align: left;
     }
      .guanyv .jianli .inner table tr th {
          height: 40px;
          font-size: 16px;
          font-weight: normal;
      }
      .guanyv .jianli .inner table tr td{
      	  font-size: 14px;
      }
      .guanyv .jianli .inner .right{
      	float: left;
      	width: 47%;
      	padding-top: 70px;
      	margin-left: 50px;
      	padding-right: 20px;
      }
   .guanyv .jianli .inner  .right p{
      	font-size: 12px;
      	height: 30px;
      }
     .guanyv .jianli .inner .right  .sg h3{
      	font-size: 14px;
      	font-weight: normal;
      	padding-bottom: 20px;
      }
       .guanyv .jianli .inner .right .xia{
       	margin-top: 20px;
       }
       .guanyv .jianli .inner .right .xia h3{
        font-size: 14px;
      	font-weight: normal;
      	padding-bottom: 15px;
       }
       .guanyv .jianli .inner .right .xia p{
       	line-height: 21px;
       	font-size: 12px;
       }

</style>
<script>
  export  default {
       data (){
           return {


            }
        },
       mounted(){
          var url  = this.$route.path.substring(1);
           this.getUrl(url)
       },
       methods :{
           getUrl (url){
               if(url == 'contact'){
                $('.guanyv').addClass('cur');
                   $('.guanyv.cur .jianli').animate({'left':'0px'},500)
               }else{
                $('.guanyv').removeClass('cur');
               }

           }
       }
   }
</script>
