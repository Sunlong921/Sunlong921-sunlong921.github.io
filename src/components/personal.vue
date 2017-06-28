<template>
    <div id="personal" class="bx">
        <div class="border-div">
             在腾讯IEG道聚城期间的活动，因为道聚城是和没有项目组合作所以有很多不同的游戏，以下链接有都是过了活动期的，有的页面已经删除。
             还有很多活动，每个业务每月几乎都有新活动，PC的大多都有H5页面链接act 换成APP 就能阅览。
        </div>
         <div class="tabshd">
             <h3 @click="fetchData(0)"  :class="{'cur': tabs1 }">PC</h3>
             <h3 @click="fetchData(1)"  :class="{'cur': tabs2}">H5</h3>
         </div>
         <div id="conten-personal">
               <ul>
                    <li v-for="item in fetchDatas">

                        <a :href='item.url'  target="_blank">
                            <img :src="item.img_url"   width='237' height='255'>
                        </a>
                        <span>{{item.name}}</span>
                        <div class="bg"></div>
                        <div class="bg_db">{{item.name}}</div>
                    </li>
               </ul>
         </div>
    </div>
</template>
<style >
    #personal{overflow: hidden;}
    #personal  .border-div {border: 1px solid #fff; padding: 15px;margin-top: 20px;font-size: 16px;text-indent: 2em;
        line-height:28px;text-shadow: 1px 1px 0.5px  #fff;color:  #fff;}
    #personal .tabshd{width: 700px;margin:0 auto; box-sizing:border-box; padding:0 22%;overflow: hidden;margin-top: 50px;margin-bottom: 50px;}
    #personal h3{float: left;width: 90px;
        height: 30px;line-height: 28px;text-align: center; border-radius: 12px; color: #ffffff;
        background: #addbde;margin: 20px;cursor: pointer;}
    #personal h3.cur{  background: #12dbe8;}
    #conten-personal ul{overflow: hidden;}
    #conten-personal ul li {float: left;position: relative;width: 237px; height: 255px; margin: 4px;overflow: hidden;}
    #conten-personal ul li span{display: block;position: absolute; bottom: 10px; left:0px; width:100%; text-align: center;font-size: 25px; color: #fff;z-index: 2;}
    #conten-personal ul li .bg{width: 229px;height: 63px;position: absolute;bottom:0px;left: 0px;background-color: rgba(66,71,75,0.5);z-index: 1;}
    #conten-personal ul li .bg_db{transition:all 1s; width: 100%;height: 100%;background-color: rgba(66,71,75,0.9);z-index: 3; position: absolute;bottom:0px;left: 0px;color: #fff;text-align: center;font-size: 25px;
        line-height:255px;}
    #conten-personal ul li:hover .bg_db{bottom:256px;cursor: pointer; }

</style>
<script>
    import qs from 'qs'
    export default{
        data(){
            return {
                articleData: {
                        0 : [
                            {
                                "name": "天涯明月刀",
                                "url": "http://act.daoju.qq.com/act/a20161208wuxia/index.html",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/wuxia.png",
                            },
                            {
                                "name": "DNF",
                                "url": "http://act.daoju.qq.com/act/a20170427dnf/index.html",
                                "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498651332&di=c133dfb4926f545dc97acd443cab9c15&imgtype=jpg&er=1&src=http%3A%2F%2Fi2.17173.itc.cn%2F2010%2Fnews%2F2010%2F12%2F27%2Flj1227dnf06s.jpg"
                            },
                            {
                                "name": "剑灵",
                                "url": "http://act.daoju.qq.com/act/a20160912bnsxyx/index.htm",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/bns.png"
                            },
                            {
                                "name": "使命呼唤",
                                "url": "http://act.daoju.qq.com/act/a20170503abyss/index.html",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/cod.png"
                            },
                            {
                                "name": "天堂",
                                "url": "http://act.daoju.qq.com/act/a20170207memory/index.shtml",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/tiantang.png"
                            },
                            {
                                "name": "QQ飞车",
                                "url": "http://act.daoju.qq.com/a20170323speedyao/index.html",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/speed.png"
                            },
                            {
                                "name": "疾风之刃",
                                "url": "http://jf.qq.com/cp/a20160311syxyx/index.htm",
                                "img_url": "http://ossweb-img.qq.com/images/chanpin/daoju/public/a20170418zk/js5.png"
                            },
                            {
                                "name": "雷霆战争",
                                "url": "http://act.daoju.qq.com/act/a20170420zzlt/index.htm",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/zzlt.png"
                            },
                            {
                                "name": "QQ炫舞",
                                "url": "http://act.daoju.qq.com/act/a20170405ggk/index.htm",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/x5.png"
                            },
                            {
                                "name": "逆战",
                                "url": "http://act.daoju.qq.com/act/a20170216buy/index.htm",
                                "img_url": "https://ossweb-img.qq.com/images/chanpin/daoju/public/a20170511dj66m/nz.png"
                            }
                        ],
                    1 : [
                        {
                            "name": "CFM",
                            "url": "http://m.daoju.qq.com/act/a20170308crowd/index.htm",
                            "img_url": "http://ossweb-img.qq.com/images/chanpin/daoju/public/a20170407dj/fl24.png"
                        },
                        {
                            "name": "王者荣耀",
                            "url": "https://m.daoju.qq.com/act/a20170116yxzj/index.html",
                            "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498056578996&di=91e79aa8cd9f3dcee5c83c49b2ec9e61&imgtype=0&src=http%3A%2F%2Fnewsimg.5054399.com%2Fuploads%2Fuserup%2F1701%2F241120033V7.jpg"
                        },
                        {
                            "name": "剑侠情缘",
                            "url": "https://m.daoju.qq.com/act/a20170116yxzj/index.html",
                            "img_url": "http://pic.sogou.com/d?query=%BD%A3%CF%C0%C7%E9%D4%B5%CD%BC%C6%AC&st=255&mode=255&did=38#did37"
                        },
                        {
                            "name": "天天炫斗",
                            "url": "http://app.daoju.qq.com/act/a20161228ttxd/index.htm",
                            "img_url": "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1498056621857&di=507ab853835c15c4e3262085e805e2c5&imgtype=0&src=http%3A%2F%2Fpic.3h3.com%2Fup%2F2014-5%2F2014513112352764860.jpg"
                        },
                        {
                            "name": "天天酷跑",
                            "url": "http://m.daoju.qq.com/act/a20161219pao/index.htm",
                            "img_url": "http://ossweb-img.qq.com/images/chanpin/daoju/public/a20170407dj/fl22.png"
                        }
                    ]
                  },
                fetchDatas : {},
                tabs1 : true,
                tabs2 : false
            }
        },
        mounted()
        {
            this.fetchData(0)
        }
        ,
        methods: {
            fetchData(e){
                if(e == 0){
                    this.tabs1= true
                    this.tabs2= false
                }else{
                    this.tabs1= false
                    this.tabs2= true
                }
                this.fetchDatas = this.articleData[e]

             }
        }
    }
</script>
