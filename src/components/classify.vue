<template>
  <div class="classify f_a_c">
    <div class="classify-item f_c_c_c">
      <div class="item-bg f_c_c">
        <img src="../assets/images/components/classify_3.png" alt>
      </div>
      <span>私人FM</span>
    </div>
    <div class="classify-item f_c_c_c">
      <div class="item-bg f_c_c">
        <img src="../assets/images/components/classify_1.png" alt>
      </div>
      <span>每日推荐</span>
    </div>
    <div class="classify-item f_c_c_c">
      <div class="item-bg f_c_c">
        <img src="../assets/images/components/classify_4.png" alt>
      </div>
      <span>歌单</span>
    </div>
    <div class="classify-item f_c_c_c">
      <div class="item-bg f_c_c">
        <img src="../assets/images/components/classify_2.png" alt>
      </div>
      <span>排行榜</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";
.classify {
  padding: 0.4rem 0 0.3rem;
  font-size: $font-size-small-s;
  border-bottom: 1px solid #f1f1f1;
  .classify-item {
    .item-bg {
      width: 0.96rem;
      height: 0.96rem;
      background: $color-sub-theme;
      border-radius: 50%;
      overflow: hidden;
      img {
        width: 0.5rem;
        height: auto;
      }
    }
    span {
      margin-top: 0.14rem;
    }
  }
}
</style>
