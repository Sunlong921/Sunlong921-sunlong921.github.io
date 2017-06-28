<template>
    <div class="bg_hd">
    	<div  class="bg_bd" @click="bghide">
             X
	    </div>

    </div>
</template>
<style>
.bg_hd{width: 100%;height: 100%;position: fixed;top: 0px;left:0px;z-index: 100;
	background: #000;color: #ffffff;overflow: hidden;}
.bg_bd{position: absolute;top: 50px; right:50px;font-size: 28px;text-align: center;width: 52px;height: 52px;}
.bg_bd{width:52px;height: 52px;background: url(../../assets/images/x1.png);text-indent: -9999em; font-size: 36px;transition: 1s ease-in-out 0s;/* -webkit-backface-visibility: hidden; */}
.bg_bd:hover{ -moz-transform: scale(1) rotate(720deg);
    -webkit-transform: scale(1) rotate(720deg);
    -webkit-transform-origin: 50% 50%;
    -moz-transform-origin: 50% 50%;}
</style>
<script>
    import  {mapGetters,mapActions} from 'vuex'
    export default {
        computed:mapGetters([
            'bgshow',
            'scrollT'
        ]),
        data (){
            return {
               _index :this.$store.getters.scrollT
            }
        },
        methods : {
            bghide (){
                this.$store.dispatch('HIDE_BG');

            }

       }
  }


</script>