<template>
  <div id="app">
    <Navbar />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <Footer />
  </div>
</template>

<script>
import Footer from "@/components/Footer/Footer.vue";
import Navbar from "@/components/Navbar.vue";
export default {
  name: "app",
  components: {
    Footer,
    Navbar,
  },
};
</script>

<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
* {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
}
.page {
  padding: 102px 20vw;
}
@media screen and (max-width: 1023px) {
  .page {
    padding: 102px 10vw;
  }
}
</style>

<style lang="scss">
@import "@/assets/scss/base.scss";
</style>
