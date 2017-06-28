<template>
    <div id="nav">
      <div class="bx">
        <a id="logo" href="demo.html" target="blank"><h1>孙龙</h1></a>
        <ul >
            <li v-for="(item,sindex) in items" :class="{'cur': item.active }"  >

                <router-link :to="item.url1">{{item.name}}</router-link>
            </li>
        </ul>
      </div>
    </div>
</template>

<script>

    export default{
        data(){
            return{
                items : [
                    {name:'主页介绍', active:false, index:0, url1:'/home'},
                    {name:'个人项目', active:false, index:1,url1:'/Personal'},
                    {name:'效果展示', active:false, index:2,url1:'/Exhibition'},
                    {name:'联系方式', active:false, index:3,url1:'/contact'}
                ]
            }
        },
        mounted(){
            var path=this.$route.path.substring(1);
            this.makeActive(path)
        },
        watch : {
            $route(to){
                var path=to.path.substring(1);
                this.makeActive(path)
            }
        },
        methods : {
            addcur(e){
                var  _this = this;
                for(var i = 0 ; i <this.items.length;i++ ){
                    this.items[i].active = false
                }
                this.items[e].active = true
            },
            makeActive(e){
                for(var i = 0 ; i <this.items.length;i++ ){
                    this.items[i].active = false;
                    if( this.items[i].url1.replace('/','') == e){
                        this.items[i].active=true
                    }
                }
            }
        }

    }
</script>
