<template>
  <div class="test">
    <div class="section" style="height: 100vh">
      <div class="columns">
        <div class="column" style="margin-right: 10vw">
          <img
            style="width: 20vh; margin: auto; filter: brightness(0)"
            :src="require('@/assets/product/h4pay/H4pay.png')"
          />
        </div>
        <div class="column">
          <div>
            <p class="title">H4Pay</p>
            <p class="title is-2">간편한 결제,<br />안전한 수령</p>
            <p class="title is-4">학교 온라인 매점 결제 서비스</p>
          </div>
        </div>
      </div>
    </div>
    <div class="section" v-for="(section, i) in sections" :key="i">
      <div class="container" data-aos="fade">
        <div class="columns">
          <div class="column">
            <div class="paragraph" style="margin: 0 5vw">
              <div>
                <p style="font-size: 2.5rem; font-weight: bold">
                  {{ section.paragraph1 }}
                </p>
                <p>
                  {{ section.paragraph2 }}
                </p>
              </div>
            </div>
          </div>
          <div class="column">
            <video
              :id="`player${i + 1}`"
              muted="muted"
              autoplay
              loop
              :style="section.maxSize ? '' : 'width: 20vh'"
            >
              <source :src="require(`@/assets/product/${section.vid}`)" />
            </video>
          </div>
        </div>
      </div>
    </div>
    <div class="floatingLeader">
      <vue-fontawesome :icon="['fas', 'chevron-down']" />
    </div>
  </div>
</template>
<script>
import sections from "@/products/h4pay.json";
export default {
  data() {
    return {
      sections: sections,
    };
  },
  mounted() {
    this.player = document.getElementById("player");
    console.log(this.player);
  },
  methods: {
    onLeave(origin, dest) {
      console.log(`${origin.index} , ${dest.index}`);
      if (origin.index != 0) {
        document.getElementById(`player${origin.index}`).pause();
      }
      if (dest.index != 0) {
        document.getElementById(`player${dest.index}`).play();
      }
    },
  },
};
</script>
<style>
.floatingLeader {
  position: absolute;
  font-size: 1.5rem;
  bottom: 5px;
  right: 50vw;
  z-index: 1;
  color: black;
}
.column {
  display: flex;
  justify-content: center;
}

.section {
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.heading {
  text-align: center;
}
#player2 {
  display: flex;
  margin: 0 auto;
}
.paragraph {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  font-size: 1.8rem;
}
</style>
