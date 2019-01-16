<template>
  <div class="m-header f_b_c">
    <img src="../assets/images/components/menu-icon.png" alt>
    <h2>cloudMusic</h2>
    <img src="../assets/images/components/search-icon.png" alt>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
@import "../assets/styles/variable.scss";
.m-header {
  width: 100%;
  height: 1rem;
  padding: 0 0.3rem;
  box-sizing: border-box;
  img {
    width: 0.5rem;
    height: 0.5rem;
  }
  h2 {
    font-size: $font-size-large;
    color: $color-text-f;
  }
}
</style>
