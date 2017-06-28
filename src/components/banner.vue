<template>
    <div class="banner">
        <div id="huxi">
            <ul class="tuul1">
                <li @mouseover='stopRightbut()'@mouseout="goRightbut()" class="o1"></li>
                <li @mouseover='stopRightbut()'@mouseout="goRightbut()" class="o2"></li>
                <li @mouseover='stopRightbut()'@mouseout="goRightbut()" class="o3"></li>
                <li @mouseover='stopRightbut()'@mouseout="goRightbut()" class="o4"></li>
                <li @mouseover='stopRightbut()'@mouseout="goRightbut()" class="o5"></li>
                <li @mouseover='stopRightbut()'@mouseout="goRightbut()" class="o6"></li>
                <li @mouseover='stopRightbut()'@mouseout="goRightbut()" class="o7"></li>

            </ul>
            <div class="anniu">
                <span @click="Leftbut"class="leftbut"></span>
                <span @click="Rightbut" class="rightbut"></span>
            </div>
            <ul class="dianul">
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
</template>
<style>
    body{
        background: #81ffc0;
    }
    .banner{
        padding-top: 60px;
        width: 980px;
        height: 516px;
        margin: 0 auto;

    }
    #huxi{

        position: relative;
        width: 980px;
        height: 516px;
        position: relative;


    }
    #huxi .tuul{
        list-style: none;
        width: 980px;
        height: 516px;
        position: relative;
    }
    #huxi .tuul1 li{
        position: absolute;
        top: 0;
        left: 0;
        display: none;
        width: 100%;
        height: 516px;

    }
    #huxi .tuul1 li.o1{
        display: block;
        background: #81ffc0 url(../assets/images/a1.jpg)no-repeat center top;

    }
    #huxi .tuul1 li.o2{

        background:  #ffc90d url(../assets/images/a2.jpg)no-repeat center top;

    }
    #huxi .tuul1 li.o3{

        background: #000002 url(../assets/images/a3.jpg)no-repeat center top;

    }
    #huxi .tuul1 li.o4{

        background: #466f85 url(../assets/images/a4.jpg)no-repeat center top;

    }
    #huxi .tuul1 li.o5{

        background: #a3248f  url(../assets/images/a5.jpg)no-repeat center top;

    }
    #huxi .tuul1 li.o6{

        background: #0099d3 url(../assets/images/a6.jpg)no-repeat center top;

    }
    #huxi .tuul1 li.o7{

        background: #00a77b  url(../assets/images/a7.jpg)no-repeat center top;

    }
    #huxi .anniu .leftbut{
        position: absolute;
        width: 45px;
        height: 45px;
        top: 300px;
        left: 30px;
        background:url(../assets/images/icons.png) no-repeat 0 0;
        cursor: pointer;
    }
    #huxi .anniu .rightbut{
        position: absolute;
        width: 45px;
        height: 45px;
        top: 300px;
        right: 30px;
        background:url(../assets/images/icons.png) no-repeat 0 -45px;
        cursor: pointer;
    }
    #huxi .dianul{
        list-style: none;
        position: absolute;
        right: 300px;
        bottom: 100px;
    }
    #huxi .dianul li{
        float: left;
        width: 15px;
        height: 15px;
        margin-right: 25px;
        background:url(../assets/images/icons.png) no-repeat -23px -125px;
        cursor: pointer;
    }
    #huxi .dianul li.cur{
        background-position: -8px -125px;
    }
</style>
<script>

    export default{
        data(){
            return{
                nowimg : 0,
                bobyColor:['#81ffc0','#ffc90d','#000002','#466f85','#a3248f','#0099d3','#00a77b'],
                timer : null
            }
        },
        mounted  (){
                var _this = this;
                var path=this.$route.path.substring(1);
                this.UrlStop(path)
                this.dianBut()
        },
        watch : {
            $route(to){
                var path=to.path.substring(1);
                this.UrlStop(path)
            }
        },
        methods :{
            Rightbut(){
                var  _this = this;
                if(!$("#huxi ul li").is(":animated")){

                    $("#huxi ul li").eq(_this.nowimg).fadeOut(500);


                    if(_this.nowimg < $("#huxi .tuul1 li").length - 1){
                        _this.nowimg = _this.nowimg + 1;
                    }else{
                        _this.nowimg = 0;
                    }


                    $("#huxi .tuul1 li").eq(_this.nowimg).fadeIn(500);
                    $('body').css('backgroundColor',_this.bobyColor[_this.nowimg])

                    $("#huxi .dianul li").eq(_this.nowimg).addClass("cur").siblings().removeClass("cur");
                }
            },
            Leftbut(){
                var _this = this;
                if(!$("#huxi .tuul1 li").is(":animated")){

                    $("#huxi .tuul1 li").eq( _this.nowimg).fadeOut(500);


                    if( _this.nowimg > 0){
                        _this.nowimg =  _this.nowimg - 1;
                    }else{
                        _this.nowimg = $("#huxi .tuul1 li").length - 1;
                    }

                    $("#huxi .tuul1 li").eq( _this.nowimg).fadeIn(500);
                    $('body').css('backgroundColor',_this.bobyColor[_this.nowimg])

                    $("#huxi .dianul li").eq( _this.nowimg).addClass("cur").siblings().removeClass("cur");
                }
            },
            stopRightbut(){
                var  _this = this;
                if(_this.timer != '' || _this.timer != null || _this.timer !=undefined ){
                   clearInterval(_this.timer);
                }
            },
            goRightbut(){
                var  _this = this;
                _this.timer = setInterval(function(){
                    _this.Rightbut()
                },2500);
            },
            dianBut(){

			   var  _this = this;
			   $("#huxi .dianul li").click(function(){
                    $("#huxi .tuul1 li").eq(_this.nowimg).fadeOut(500);
                    _this.nowimg = $(this).index();

                    $("#huxi .tuul1 li").eq(_this.nowimg).fadeIn(500);
                    $('body').css('backgroundColor',_this.bobyColor[_this.nowimg])
                    $("#huxi .dianul li").eq(_this.nowimg).addClass("cur").siblings().removeClass("cur");
	           });
            },
            UrlStop(path){
                var  _this = this;
                if(path != 'home'){
                    clearInterval(_this.timer);
                    if(path =='Personal'){
                        $('body').css('backgroundColor','#0099d3')
                    }else if(path == 'Exhibition'){
                        $('body').css('backgroundColor','#81ffc0')
                    }else{
                        $('body').css('backgroundColor','rgb(70, 111, 133)')
                    }

                }else{
                    $('body').css('backgroundColor',_this.bobyColor[_this.nowimg])
                    _this.timer = setInterval(function(){
                        _this.Rightbut()
                    },2500);

                }
            }
        }
    }
</script>
