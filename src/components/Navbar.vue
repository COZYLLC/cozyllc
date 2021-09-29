<template>
  <b-navbar
    style="
      background-color: rgba(255, 255, 255, 0.3);
      -webkit-backdrop-filter: blur(5px);
      backdrop-filter: blur(5px);
      z-index: 1;
    "
  >
    <template #brand>
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <a href="/">
          <img src="@/assets/cozy_black.png" style="width: 100px"
        /></a>
      </b-navbar-item>
    </template>
    <template #start>
      <div v-for="(item, i) in NavItem" :key="i">
        <b-navbar-item v-if="item.route != undefined" :to="`${item.route}`" tag="router-link">
          {{ item.name }}
        </b-navbar-item>
        <b-navbar-dropdown
          v-if="item.items != undefined"
          :label="item.name"
          hoverable
          active
        >
          <div v-for="(underItem, j) in item.items" :key="j">
            <b-navbar-item :to="`${underItem.route}`" tag="router-link">
              {{ underItem.name }}
            </b-navbar-item>
            <hr class="solid" />
          </div>
        </b-navbar-dropdown>
      </div>
    </template>
  </b-navbar>
</template>

<script>
import NavItem from "../navitem.json";
export default {
  data() {
    return {
      NavItem,
    };
  },
};
</script>

<style>
.navbar-menu {
  background-color: transparent !important;
}
hr.solid {
  border: 0;
  opacity: 0.5;
  border-top: 0.5px solid rgb(255, 255, 255);
  margin: 0 auto;
  width: 10vh;
}

@media screen and (max-width: 1023px) {
  hr.solid {
    border: 0;
    opacity: 0.5;
    border-top: 0.5px solid rgb(255, 255, 255);
    margin: 0 auto;
    width: 88vw;
  }
}
</style>