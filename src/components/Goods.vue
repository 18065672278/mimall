<template>
  <div class="noTab">
    <MHeader :back="true">商品详情</MHeader>
    <div class="section goods-show content">
      <div class="goods-swiper">
        <Swiper :swiperSlides="sliders"></Swiper>
      </div>

    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader";
  import Swiper from "../base/Swiper";
  import {getGoodsDetail} from "../api";

  export default {
    name: "Goods",
    data() {
      return {sliders: []}
    },
    components: {MHeader, Swiper},
    created() {
      this.getGoodsDetails()
    },
    watch:{
      $router(){//路径改变以后重新获取数据

      }
    },
    computed: {
      pid() {
        console.log(this.$route.params.pid)
        return this.$route.params.pid//将路径参数的ID映射到pid上
      }
    },
    methods: {
      async getGoodsDetails(){
        let data = await getGoodsDetail(this.pid);
        Object.keys(data).length > 0 ? void 0 : this.$router.push('/home')
        this.sliders = data[0].goods_slides;
        //如果是空对象 需要跳转回首页

      }
    }
  }
</script>

<style scoped lang="less">

</style>
