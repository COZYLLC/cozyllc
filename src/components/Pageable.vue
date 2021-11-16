<template>
  <div id="container">
    <div
      data-anchor="page1"
      style="
        background: rgb(65, 184, 131);
        display: flex;
        align-items: center;
        justify-content: center;
      "
    >
      <p id="slogan">
        보다 편안한 생활을 <br />
        만드는 중입니다
      </p>
    </div>
    <div data-anchor="page2" style="background: red">
      <div class="navbar-safe-zone" />
    </div>
  </div>
</template>

<script>
import Pageable from "pageable";
export default {
  mounted() {
    // eslint-disable-next-line no-unused-vars
    const pageable = new Pageable("#container", {
      childSelector: "[data-anchor]", // CSS3 selector string for the pages
      pips: true, // display the pips
      animation: 500, // the duration in ms of the scroll animation
      delay: 0, // the delay in ms before the scroll animation starts
      throttle: 50, // the interval in ms that the resize callback is fired
      orientation: "horizontal", // or horizontal
      swipeThreshold: 200, // swipe / mouse drag distance (px) before firing the page change event
      freeScroll: true, // allow manual scrolling when dragging instead of automatically moving to next page
      navPrevEl: false, // define an element to use to scroll to the previous page (CSS3 selector string or Element reference)
      navNextEl: false, // define an element to use to scroll to the next page (CSS3 selector string or Element reference)
      infinite: false, // enable infinite scrolling (from 0.4.0)
      events: {
        wheel: false, // enable / disable mousewheel scrolling
        mouse: true, // enable / disable mouse drag scrolling
        touch: true, // enable / disable touch / swipe scrolling
        keydown: true, // enable / disable keyboard navigation
      },
      easing: function (currentTime, startPos, endPos, interval) {
        // the easing function used for the scroll animation
        return (
          -endPos * (currentTime /= interval) * (currentTime - 2) + startPos
        );
      },
      onInit: function () {
        // do something when the instance is ready
      },
      onUpdate: function () {
        // do something when the instance updates
      },
      onBeforeStart: function () {
        // do something before scrolling begins
      },
      onStart: function () {
        // do something when scrolling begins
      },
      onScroll: function () {
        // do something during scroll
      },
      onFinish: function () {
        // do something when scrolling ends
      },
    });
  },
};
</script>
<style>
#slogan {
  text-align: center;
  color: white;
  font-weight: bold;
  font-size: 5vh;
}
.navbar-safe-zone {
  width: 100vw;
  height: 50px;
}
.blur {
  filter: blur(20);
}
</style>
