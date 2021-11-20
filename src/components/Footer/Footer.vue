<template>
  <div class="footer">
    <BottomNavigation />
    <Info id="footer-info" />
  </div>
</template>

<script>
import BottomNavigation from "@/components/Footer/BottomNavigation";
import Info from "@/components/Footer/Info";
export default {
  components: {
    BottomNavigation,
    Info,
  },
};
</script>
<style>
.footer {
  padding: 5vh 20vw !important;
}
#footer-info {
  margin-top: 20px;
}
</style>
