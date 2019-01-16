<template>
  <div class="rm">
    <div class="banner-bg em"></div>
    <div class="swiper-container" v-if="recommends.length">
      <div class="swiper-wrapper">
        <div class="swiper-slide rm" v-for="(item, index) in recommends" :key="index">
          <img :src="item.imageUrl" alt>
          <div class="tag em" :style="{background: item.titleColor}">{{item.typeTitle}}</div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <classify></classify>
    <div class="music-wrap">
      <div class="music-group">
        <div class="tit f_l_c">
          推荐歌单
          <img src="../assets/images/views/right-icon.png" alt>
        </div>
        <div class="music-list f_b_c">
          <div
            class="item rm"
            v-for="(item, index) in personalized.slice(0, 6)"
            :key="index"
            @click="toPlayList(item.id)"
          >
            <div class="play-count em f_l_c">
              <img src="../assets/images/views/listen-icon.png" alt>
              {{item.playCount}}
            </div>
            <img v-lazy="item.picUrl" alt>
            <div class="desc">{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper";
import "swiper/dist/css/swiper.min.css";
import { getBannerList, getPersonalized } from "../api/getData.js";
import classify from "../components/classify";
export default {
  data() {
    return {
      recommends: [],
      personalized: [] // 推荐歌单
    };
  },
  components: {
    classify
  },
  mounted() {
    this._getBannerList();
    this._getPersonalized();
  },
  methods: {
    //获取 bannerList
    _getBannerList() {
      getBannerList().then(result => {
        this.recommends = result.banners;
        this.$nextTick(() => {
          new Swiper(".swiper-container", {
            autoplay: {
              delay: 5000
            },
            loop: true,
            pagination: {
              el: ".swiper-pagination"
            },
            slidesPerView: 1,
            spaceBetween: 20
          });
        });
      });
    },
    //获取推荐歌单
    _getPersonalized() {
      getPersonalized().then(res => {
        this.personalized = res.result;
      });
    },
    //进入歌单详情列表
    toPlayList(id) {
      this.$router.push({
        path: "/playList",
        query: { id: id }
      });
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";
.banner-bg {
  width: 100%;
  height: 2rem;
  background: $color-sub-theme;
  top: 0;
  left: 0;
}
.swiper-container {
  padding: 0 0.2rem;
  font-size: 0;
  height: 2.63rem;
  .swiper-pagination-bullet-active {
    background: $color-sub-theme;
  }
  .tag {
    right: 0;
    bottom: 0;
    padding: 0.12rem;
    font-size: $font-size-small-s;
    color: #ffffff;
    border-radius: 0.12rem 0 0.12rem 0;
  }
  img {
    border-radius: 0.12rem;
    overflow: hidden;
  }
}
.music-wrap {
  padding: 0.4rem 0.1rem;
  box-sizing: border-box;
  .music-group {
    width: 100%;
    .tit {
      font-size: $font-size-medium;
      font-weight: 600;
      img {
        width: 0.42rem;
        height: 0.42rem;
      }
    }
    .music-list {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      font-size: 0;
      margin: 0.3rem 0;
      .item {
        width: 2.36rem;
        img {
          width: 2.36rem;
          height: 2.36rem;
          border-radius: 0.08rem;
          overflow: hidden;
        }
        .desc {
          font-size: $font-size-small;
          padding: 0.1rem 0.04rem 0.3rem;
          line-height: 1.5;
        }
        .play-count {
          top: 0.06rem;
          right: 0.06rem;
          font-size: $font-size-small-s;
          color: #ffffff;
          img {
            width: 0.24rem;
            height: 0.24rem;
            margin-right: 0.05rem;
          }
        }
      }
    }
  }
}
</style>
