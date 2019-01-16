<template>
  <div class="tab f_a_c">
    <router-link tag="div" class="tab-item" to="/recommend">
      <span>推荐</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/friend">
      <span>朋友</span>
    </router-link>
    <router-link tag="div" class="tab-item" to="/station">
      <span>电台</span>
    </router-link>
  </div>
</template>
<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/base.scss";
@import "../assets/styles/variable.scss";
.tab {
  font-size: $font-size-medium;
  color: $color-choose-d;
  & .router-link-active {
    color: $color-choose;
    span {
      border-bottom: 0.04rem solid #ffffff;
    }
  }
  span {
    display: inline-block;
    padding-bottom: 0.16rem;
  }
}
</style>
