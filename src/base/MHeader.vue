<template>
  <div class="header">
    <slot>小米商城</slot>
    <i class="iconfont icon-fanhui-" v-if="back" @click="goback"></i>
  </div>
</template>

<script>
  export default {
    name: "mHeader",
    props:{
      back:{
        type:Boolean,
        default:false
      }
    },
    methods:{
      goback(){
        this.$router.go(-1);
      }
    }
  }
</script>

<style scoped lang="less">
  .header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #ff6700;
    height: 50px;
    line-height: 50px;
    text-align: center;
    color: #fff;
    i {
      position: absolute;
      left: 10px;
      font-size: 20px;
    }

  }
</style>
