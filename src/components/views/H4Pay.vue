<template>
  <div class="test">
    <full-page
      ref="fullpage"
      :options="options"
      id="fullpage"
      style="z-index: 1; position: fixed"
    >
      <div class="section">
        <div class="container is-vcentered">
          <div class="columns" style="margin: 0 5vw">
            <div class="column" style="display: flex">
              <img
                style="width: 20vh; margin: 0 auto"
                :src="require('@/assets/product/h4pay/H4pay.png')"
              />
            </div>
            <div class="column">
              <div>
                <p class="title" style="color: white">H4Pay</p>
                <p class="title is-2" style="color: white">
                  간편한 결제, 안전한 수령
                </p>
                <p class="title is-4" style="color: white">
                  학교 온라인 매점 결제 서비스
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="section" v-for="(section, i) in sections" :key="section">
        <div class="container">
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
              <video :id="`player${i + 1}`" muted="muted" autoplay loop>
                <source :src="require(`@/assets/product/${section.vid}`)" />
              </video>
            </div>
          </div>
        </div>
      </div>
    </full-page>
    <div class="floatingLeader">
      <vue-fontawesome :icon="['fas', 'chevron-down']" />
    </div>
  </div>
</template>
<script>
import sections from "../../products/h4pay.json";
export default {
  data() {
    return {
      currStep: null,
      currStepProgress: null,
      player: null,
      prevStep: null,
      options: {
        scrollBar:true,
        sectionsColor: [
          "#41b883",
          "#ff5f45",
          "#0798ec",
          "#fec401",
          "#1bcee6",
          "#ee1a59",
          "#2c3e4f",
          "#ba5be9",
          "#b4b8ab",
        ],
        onLeave: this.onLeave,
        verticalCentered: true,
      },
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
  color: white;
}

.heading {
  text-align: center;
}
.test {
  height: 100vh;
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
  color: white;
  font-size: 1.8rem;
}
</style>
