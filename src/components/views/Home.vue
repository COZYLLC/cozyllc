<template>
  <div>
    <div
      style="
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: end;
      "
    >
      <img
        :src="require('@/assets/photo.png')"
        style="
          height: 100vh;
          width: 100vw;
          object-fit: cover;
          z-index: -1;
          position: absolute;
          filter: brightness(0.6);
        "
      />
      <div class="slogan-group">
        <p>교육이 기술의 발전을<br />따라갈 수 있도록.</p>
        <Button text="자세히 알아보기" :onClick="aboutClick" />
      </div>
    </div>
    <b-carousel>
      <b-carousel-item v-for="(carousel, i) in carousels" :key="i">
        <section :class="`hero is-medium is-${carousel.color}`">
          <div class="product-area" data-aos="fade">
            <div class="product-text">
              <p class="title">{{ carousel.title }}</p>
              <p>
                {{ carousel.text }}
              </p>
              <b-button
                rounded
                style="width: 150px; margin-top: 10px"
                @click="pushTo(carousel.route)"
                >자세히 알아보기</b-button
              >
            </div>
            <video
              class="product-media"
              :src="require('@/assets/product/h4pay/vid1.mp4')"
            />
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
    <div class="notice-area">
      <h1 class="title is-8 notice-title">COZY 소식</h1>
      <div class="notice-post" v-for="notice in notices" :key="notice.id">
        <div class="notice-info">
          <router-link :to="`/notice/${notice.id}`">
            {{ notice.title }}</router-link
          ><span> {{ getMonthDayDate(notice.date) }}</span>
        </div>
        <hr class="solid" />
      </div>
    </div>
    <div id="subscribe-area">
      <div>
        <p class="title is-8">뉴스레터 구독 신청</p>
        <p class="subtitle is-8">
          COZY의 소식을 이메일로 받아보실 수 있습니다.
        </p>
      </div>
      <section class="subscribe-form">
        <b-input type="email" rounded></b-input>
        <b-button rounded>구독</b-button>
      </section>
    </div>
  </div>
</template>

<script>
import Button from "@/components/Button.vue";
export default {
  components: {
    Button,
  },
  data() {
    return {
      carousels: [
        {
          title: "H4Pay",
          text: "교내 매점의 온라인 결제 및 예약 시스템을 통해 펜데믹 상황에서도 매점 운영을 원활히 해줍니다.",
          color: "primary",
          route: "/product/h4pay",
        },
        { title: "Slide 2", text: "설명..", color: "light" },
        { title: "Slide 3", text: "설명22...", color: "success" },
        { title: "Slide 4", text: "설명333....", color: "warning" },
        { title: "Slide 5", text: "설명4444...", color: "danger" },
      ],
      notices: [
        {
          id: 0,
          title: "안녕하세요,",
          content: "COZY LLC. 홈페이지를 찾아주셔서 감사합니다.",
          date: "2021-05-23T05:23:00Z",
        },
      ],
    };
  },
  methods: {
    pushTo(route) {
      this.$router.push(route);
    },
    getMonthDayDate(date) {
      const parsedDate = new Date(Date.parse(date));
      console.log(parsedDate);
      return `${parsedDate.getFullYear()}. ${parsedDate.getMonth() + 1}.`;
    },
  },
};
</script>

<style>
.subscribe-area {
  width: 60px;
  justify-content: center;
  padding: 10vh 15vw;
}
.notice-area {
  padding: 10vh 15vw;
}
.notice-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
}
.product-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 10vh 0;
}
.product-text {
  width: 30vw;
  margin-right: 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-media {
  width: 300px;
  margin-left: 5vw;
}

.title {
  font-size: 4.5vh;
  font-weight: bold;
}

#app {
  margin: 0px;
}
.slogan-group {
  font-size: 4.5vh;
  font-weight: bold;
  color: white;
  position: absolute;
  bottom: 15vh;
  text-align: center;
}
hr.solid {
  background-color: grey;
  height: 1px;
  margin: 1rem 0;
  display: block;
  border: none;
  width: 100%;
}

@media screen and (max-width: 1023px) {
  .product-area {
    flex-direction: column;
    align-items: center;
    padding: 10vh 10vh;
  }
  .product-media {
    margin: 10vh 0;
  }
  .product-text {
    margin: 0;
    width: 100%;
  }
}
</style>
