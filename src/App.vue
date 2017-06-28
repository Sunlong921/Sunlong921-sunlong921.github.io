<template>
  <div id="app">
      <loading v-if="loading"></loading>
    <MyNav></MyNav>

    <banner v-show="bannershow"></banner>
      <div class="cb"></div>
    <div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import MyNav from './components/Nav.vue'
import banner from './components/banner.vue'

import  {mapGetters,mapActions} from 'vuex'

export default {
    name: 'app',
    computed:mapGetters([
        'bannershow',
        'loading',
        'bgshow'
    ]),
  watch : {
    $route(to){
       var path=to.path.substring(1);
       this.showBanner(path)
    }
  },
  components: {
    MyNav,
    banner
  },
  mounted  (){
      var path=this.$route.path.substring(1);
      this.showBanner(path)
  },
  methods :{
    showBanner (o){
      if(o == 'home'){
          this.$store.dispatch('BANNER_SHOW')

      }else{

          this.$store.dispatch('BANNER_HIDE');
      }
    }
  }
}
</script>

<style lang="scss">
/*@import "./assets/css/index.css";*/
</style>
