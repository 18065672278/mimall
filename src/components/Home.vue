<template>
  <div>
    <MHeader>小米商城</MHeader>
    <div class="content">
      <Loading v-if="loading"></Loading>
      <template v-else>
        <div class="section searchBar">
          <div class="section searBar-box">
            <img src="@/assets/icons/search.png" mode="aspectFill" class="search-icon"/>
            <input type="text" name="searchBar" disabled="true" placeholder="搜索商品"/>
          </div>
        </div>
        <Swiper :swiperSlides="sliders"></Swiper>
        <div class="section navBar">
          <div class="section nav-list" v-for="(nav,index) in navs" :key="index">
            <router-link :to="nav.nav_urls" hover-class="none">
              <div class="nav-item">
                <img :src="nav.nav_img" class="item-img"/>
                <div class="item-text">{{nav.nav_title}}</div>
              </div>
            </router-link>
          </div>
        </div>
        <!-- 首页商品版块 -->
        <div class="section block">
          <template v-for="(item,index) in indexBlock">
            <div class="section cover">
              <img class="cover-img" :src="item.img_url" @click="$goRouter('/goods/'+item.id)" :id="item.id"/>
            </div>
            <div class="section goods-list">
              <template v-for="(product,index) in item.section">
                <div class="goods-item" :class="product.is_new?'new':product.on_sale?'on-sale':''">
                  <img class="goods-img" :src="product.goods_cover" @click="$goRouter('/goods/'+product.id)"/>
                  <div class="title">{{product.header}}</div>
                  <div class="desp">{{product.description}}</div>
                  <div class="meta">{{product.meta}}</div>
                  <div class="discount">{{product.discount}}</div>
                </div>
              </template>
            </div>
          </template>
        </div><!-- end-section block -->
        <div class="section bottom-line">
          <div>到底啦</div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
  import MHeader from "../base/MHeader";
  import Swiper from "../base/Swiper";
  import Loading from "../base/Loading";
  import {getAll} from "../api";

  export default {
    name: "Home",
    data() {
      return {
        sliders: [],
        navs: [],
        indexBlock: [],
        loading: true
      }
    },
    created() {
      this.getData()
    },
    components: {MHeader, Swiper, Loading},
    computed: {},
    methods: {
      async getData() {
        let [sliders, navs, indexBlock] = await getAll();
        this.sliders = sliders;
        this.navs = navs;
        this.indexBlock = indexBlock;
        this.loading = false;
      },
    }
  }
</script>

<style scoped lang="less">
  .section {
    width: 100%;
  }

  .searchBar {
    display: flex;
    justify-content: center;
    height: 50px;
    background: #ff6700;

    .searBar-box {
      display: inline-block;
      width: 95%;
      height: 30px;
      margin-top: 13px;
      border-radius: 20px;
      background: #fff;

      .search-icon {
        position: absolute;
        left: 36%;
        top: 17px;
        width: 22px;
        height: 22px;
      }

      input {
        width: 100%;
        height: 100%;
        text-align: center;
      }
    }
  }

  .navBar {

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 80px;
    background: #fff;

    .nav-list {
      display: flex;
      justify-content: center;
      align-items: center;

      a {
        height: auto;
        width: auto;
        display: block;

        .nav-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          flex: 1;
          margin: 0 17px;

          .item-img {
            display: inline-block;
            width: 40px;
            height: 40px;
          }

          .item-text {
            font-size: 13px;
            color: #999;
          }


        }

      }
    }

  }

  .section.block {
    display: flex;
    flex-direction: column;
    align-items: center;

    .section.cover {
      display: inline-block;
      height: 220px;
      margin-top: -2px;

      .cover-img {
        width: 100%;
      }
    }

    .goods-list {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      align-items: center;
      margin-top: 0px;
      background: #fff;

      .goods-item {
        width: 180px;
        margin-bottom: 15px;
        position: relative;

        .goods-img {
          width: 180px;
          height: 180px;
          box-shadow: 0 0 3px #dcdcdc;
        }

        &.on-sale:before {
          position: absolute;
          left: 0;
          top: 0;
          width: 50px;
          height: 20px;
          line-height: 20px;
          content: "满减";
          font-size: 9pt;
          color: #fff;
          text-align: center;
          background: #ec6055;
          z-index: 100;
        }

        &.new:before {
          position: absolute;
          left: 0;
          top: 0;
          width: 50px;
          height: 20px;
          line-height: 20px;
          content: "新品";
          color: #fff;
          font-size: 9pt;
          text-align: center;
          background: #8CC64A;
          z-index: 100;
        }

        div {
          line-height: 20px;
          word-spacing: 5px;
        }

        div:nth-child(1), div:nth-child(2), div:nth-child(3) {
          display: block;
          margin-left: 15px;
        }

        .title {
          font-size: 11pt;
        }

        .desp {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-size: 9pt;
          color: #666;

        }

        .meta {
          margin-left: 15px;
          font-size: 11pt;
          color: #ff4a00;

        }

        .discount {
          display: inline-block;
          margin-left: 5px;
          font-size: 9pt;
          color: #666;
          text-decoration: line-through;

        }


      }

      .goods-item:nth-child(1), .goods-item:nth-child(2) {
        margin-top: 4px;
      }


    }


  }

  .bottom-line {
    display: flex;
    height: 50px;
    justify-content: center;
    align-items: center;

    div {
      font-size: 10pt;
      color: #666;
    }
  }

</style>
