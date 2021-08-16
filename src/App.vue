<template>
  <div id="app">
    <transition name="fade" mode="out-in">
    <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app",
};
</script>

<style>
@import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
* {
  font-family: "Spoqa Han Sans Neo", "sans-serif";
}

#app {
  margin: 0px;
}
</style>
