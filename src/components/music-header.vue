<template>
  <div class="music-header f_b_c">
    <div class="header-left f_l_c">
      <div class="back" @click="back">
        <img src="../assets/images/components/left-icon.png" alt>
      </div>
      <div class="info">
        <div class="name">{{name}}</div>
        <div class="desc">{{copywriter}}</div>
      </div>
    </div>
    <div class="header-right f_l_c">
      <div class="header-search">
        <img src="../assets/images/components/search-icon-small.png" alt>
      </div>
      <div class="header-handle">
        <img src="../assets/images/components/other-icon.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: "歌单"
    },
    copywriter: {
      type: String,
      default: "歌单描述"
    }
  },
  methods: {
    back() {
      this.$router.go(-1);
    }
  }
};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";
.music-header {
  font-size: 0;
  img {
    width: 0.6rem;
    height: 0.6rem;
  }
  .header-left {
    .info {
      width: 4.6rem;
      line-height: 1.4;
      margin-left: 0.3rem;
      font-size: $font-size-large;
      color: #ffffff;
      .desc {
        font-size: $font-size-small-s;
        color: $color-text-d;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }
  .header-search {
    margin-right: 0.2rem;
  }
}
</style>
