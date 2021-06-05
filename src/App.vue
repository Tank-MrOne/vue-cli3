<template>
  <div id="app">
    <div class="header">头部</div>
    <router-view></router-view>
    <div class="footer">尾部</div>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  components: {},
  computed: {
    ...mapState({
      categroyList: (state) => state.home.categroyList,
    }),
    ...mapGetters(["skuImage"]),
  },
  methods: {
    async Login() {
      // await this.$store.dispatch("login", { mobile, password });
    },
  },
};
</script>

<style lang="less" scoped>
#app {
  .header {
    font-size: 30px;
  }
  .footer {
    font-size: 20px;
  }
}
</style>
