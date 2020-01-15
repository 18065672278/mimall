<template>
  <div class="footer">
    <router-link to="/home">
      <i class="iconfont icon-warehouse-delivery"></i>
      首页
    </router-link>
    <router-link to="/type">
      <i class="iconfont icon-navlist"></i>
      分类
    </router-link>
    <router-link to="/find">
      <i class="iconfont icon-compass"></i>
      发现
    </router-link>
    <router-link to="/shopcar">
      <i class="iconfont icon-cart"></i>
      购物车
    </router-link>
    <router-link to="/mine">
      <i class="iconfont icon-account"></i>
      我的
    </router-link>
  </div>
</template>

<style scoped lang="less">
  .footer {
    position: fixed;
    left: 0;
    bottom: 0;
    display: flex;
    width: 100%;
    height: 50px;
    border-top: 1px solid #cccccc;

    a {
      display: flex;
      color: #000;
      flex-direction: column;
      flex: 1;
      justify-content: center;
      align-items: center;
    }

    a.router-link-active {
      color: #ff6700;
    }

  }
</style>
