<template>
  <div>
    <div class="header">
      <mHeader></mHeader>
    </div>
    <div class="body">
      <div class="tab-wrap">
        <tab></tab>
      </div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import mHeader from "../components/m-header";
import tab from "../components/tab";
export default {
  name: "home",
  data() {
    return {
      typeList: []
    };
  },
  components: {
    mHeader,
    tab
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss">
@import "../assets/styles/variable.scss";
.header {
  width: 100%;
  height: 1rem;
  background: $color-sub-theme;
}
.tab-wrap {
  width: 100%;
  height: 0.7rem;
  background: $color-sub-theme;
  padding-top: 0.4rem;
}
</style>
