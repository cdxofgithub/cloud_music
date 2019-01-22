<template>
  <div class="classify-list">
    <div class="list-info f_b_c">
      <div class="play-all f_l_c">
        <img src="../assets/images/views/play-icon.png" alt>
        播放全部
        <span>(共80首)</span>
      </div>
      <div class="collect f_c_c">+ 收藏 (30.7万)</div>
    </div>
    <div class="item f_b_c" v-for="(item, index) in subscribers" :key="index">
      <div class="left f_l_c">
        <div class="index">{{index + 1}}</div>
        <div class="name-desc f_c_b_c">
          <div class="name">{{item.al.name}}</div>
          <div class="desc">
            <span v-for="(items, i) in item.ar" :key="i">{{items.name}}</span>
          </div>
        </div>
      </div>
      <div class="right f_l_c">
        <img class="play" src="../assets/images/components/play-icon-dark.png" alt>
        <img class="other" src="../assets/images/components/other-icon-dark.png" alt>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      descList: []
    };
  },
  props: {
    subscribers: {
      type: Array,
      default: null
    }
  },
  mounted() {}
};
</script>

<style lang="scss">
.classify-list {
  background: #ffffff;
  border-radius: 0.2rem 0.2rem 0 0;
  overflow: hidden;
  .list-info {
    padding-left: 0.3rem;
    .play-all {
      width: 60%;
      height: 0.9rem;
      font-size: 0.3rem;
      img {
        width: 0.5rem;
        height: 0.5rem;
        margin-right: 0.3rem;
      }
      span {
        font-size: 0.26rem;
        color: #5c5c5c;
      }
    }
    .collect {
      width: 40%;
      height: 0.9rem;
      background: #d93f30;
      color: #ffffff;
      font-size: 0.3rem;
    }
  }
  .item {
    padding: 0.2rem 0.4rem;
    font-size: 0.28rem;
    color: #5c5c5c;
    border-top: 1px solid #f1f1f1;
    .left {
      .index {
        margin-right: 0.4rem;
      }
      .name {
        width: 4rem;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .desc {
        font-size: 0.2rem;
        margin-top: 0.12rem;
      }
    }
    .right {
      .play {
        width: 0.5rem;
      }
      .other {
        width: 0.5rem;
        margin-left: 0.4rem;
      }
    }
  }
}
</style>
