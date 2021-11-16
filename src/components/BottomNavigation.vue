<template>
  <div class="cols">
    <div class="col" v-for="(item, i) in NavItem" :key="i">
      {{ item.name }}<br />
      <router-link
        class="row"
        v-for="(underItem, j) in item.items"
        :key="j"
        :to="underItem.route"
      >
        {{ underItem.name }}
      </router-link>
    </div>
  </div>
</template>
<script>
import NavItem from "@/navitem.json";
export default {
  data() {
    return {
      NavItem,
    };
  },
};
</script>
<style>
.cols {
  display: flex;
}
.col {
  display: flex;
  flex-direction: column;
}
</style>
