<template>
  <div id="app">
    <transition name="faldIn">
      <keep-alive>
        <!--需要缓存的内容-->
        <router-view v-if="$route.meta.keepAlive"></router-view>
      </keep-alive>
    </transition>
    <!--不需要缓存的内容-->
    <transition name="faldIn">
      <router-view v-if="!$route.meta.keepAlive"></router-view>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
  import Tab from './base/Tab'

  export default {
    name: 'App',
    components: {
      Tab
    }
  }
</script>

<style lang="less">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background: #ebebeb;
  }

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  ul, li {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  input, button {
    -webkit-appearance: none;
    border: 0;
  }

  input, input:disabled {
    cursor: auto;
    display: block;
    height: 1.4rem;
    text-overflow: clip;
    overflow: hidden;
    white-space: nowrap;
    font-family: UICTFontTextStyleBody;
    min-height: 1.4rem;
    background: transparent;
  }

  .content {
    position: fixed;
    width: 100%;
    top: 50px;
    bottom: 50px;
    overflow: auto;
    background: #ebebeb;
  }

  .noTab {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    z-index: 10;

    .content {
      bottom: 0px;
    }
  }

  /*切换页面动画 start*/
  .faldIn-enter {
    opacity: 0;
  }

  .faldIn-enter-active {
    transition: all 0.3s linear;
  }

  .faldIn-leave-active {
    transition: all 0.3s linear;
    opacity: 0;
  }

  /*切换页面动画 end*/
</style>
