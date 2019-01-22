<template>
  <div v-if="playList">
    <div class="play-wrap">
      <musicHeader :copywriter="copywriter"></musicHeader>
      <div class="play-detail f_l_c">
        <div class="left rm">
          <img :src="playList.coverImgUrl" alt>
        </div>
        <div class="right f_c_t_l">
          <div class="name">{{playList.name}}</div>
          <div class="avatar-name f_l_c">
            <img class="avatar" :src="playList.creator.avatarUrl" alt>
            <span>{{playList.creator.nickname}}</span>
            <img class="right-icon" src="../assets/images/views/right-icon-light.png" alt>
          </div>
        </div>
      </div>
      <div class="options f_a_c">
        <div class="f_c_c_c">
          <img src="../assets/images/views/comment-icon.png" alt="">
          <span>{{playList.commentCount}}</span>
        </div>
        <div class="f_c_c_c">
          <img src="../assets/images/views/share-icon.png" alt="">
          <span>{{playList.shareCount}}</span>
        </div>
        <div class="f_c_c_c">
          <img src="../assets/images/views/download-icon.png" alt="">
          <span>下载</span>
        </div>
        <div class="f_c_c_c">
          <img src="../assets/images/views/choose-icon.png" alt="">
          <span>多选</span>
        </div>
      </div>
    </div>
    <classifyList :subscribers="playList.tracks"></classifyList>
  </div>
</template>

<script>
import { getPlayList } from "../api/getData.js";
import musicHeader from "../components/music-header";
import classifyList from "../components/classify-list";
export default {
  data() {
    return {
      playList: null,
      copywriter: null // 歌单描述
    };
  },
  components: {
    musicHeader,
    classifyList
  },
  mounted() {
    let id = this.$route.query.id;
    this.copywriter = this.$route.query.copywriter;
    this._getPlayList(id);
  },
  methods: {
    _getPlayList(id) {
      getPlayList({
        params: { id: id }
      }).then(res => {
        this.playList = res.playlist;
      });
    }
  }
};
</script>

<style lang="scss">
.play-wrap {
  padding: 0.4rem;
  box-sizing: border-box;
  width: 100%;
  height: 6.2rem;
  background: linear-gradient(red, blue); /* 标准的语法 */
  .play-detail {
    padding: 0.4rem 0 0.5rem;
    width: 100%;
    .left {
      width: 2.6rem;
      height: 2.6rem;
      border-radius: 0.1rem;
      overflow: hidden;
      margin-right: 0.3rem;
    }
    .right {
      flex: 1;
      height: 2.6rem;
      color: #ffffff;
      .name {
        width: 100%;
        font-size: 0.34rem;
        line-height: 1.4;
      }
      .avatar-name {
        font-size: 0.2rem;
        margin-top: 0.4rem;
        color: #f1f1f1;
        .avatar {
          width: 0.5rem;
          height: 0.5rem;
          border-radius: 50%;
          overflow: hidden;
          margin-right: 0.08rem;
        }
        .right-icon {
          width: 0.3rem;
          height: 0.3rem;
        }
      }
    }
  }
  .options {
    color: #ffffff;
    img {
      width: 0.5rem;
    }
    span {
      font-size: 0.2rem;
      margin-top: 0.1rem;
    }
  }
}
.classify-list {
  margin-top: -0.3rem;
}
</style>
