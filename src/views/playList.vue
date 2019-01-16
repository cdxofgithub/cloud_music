<template>
  <div>111</div>
</template>

<script>
import { getPlayList } from "../api/getData.js";
export default {
  data() {
    return {
      playList: []
    };
  },
  mounted() {
    let id = this.$route.query.id;
    console.log(id);
    this._getPlayList(id);
  },
  methods: {
    _getPlayList(id) {
      getPlayList({
        params: { id: id }
      }).then(res => {
        this.playList = res;
      });
    }
  }
};
</script>

<style>
</style>
