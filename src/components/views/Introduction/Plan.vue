<template>
  <div class="page">
    <p class="title heading is-2">목표</p>
    <span v-for="(plan, i) in plans" :key="i">
      <div class="product-area" data-aos="fade">
        <div class="product-text">
          <p class="product-title">{{ plan.title }}</p>
          <p v-for="(text, j) in plan.text" :key="j">
            {{ text }}
          </p>
        </div>
        <img
          class="product-media"
          :src="require(`@/assets/plan/${plan.image}`)"
        />
      </div>
    </span>
  </div>
</template>
<script>
export default {
  data() {
    return {
      plans: [
        {
          title: "1. 새로운 기술과 믿음을 바탕합니다.",
          text: [
            "기술 개발과 고객의 믿음을 원칙으로 합니다.",
            "새로운 기술과 믿음의 조화를 통해 소비자와 신뢰를 쌓습니다.",
          ],
          image: "trust.jpg",
        },
        {
          title: "2. 매력적이고 즐거운 서비스를 생산합니다.",
          text: [
            "고객이 배움의 즐거움과 신기술에 흥미를 느낄 수 있는 서비스를 창출합니다.",
            "동종업계에서 가장 매력적인 서비스를 만듭니다.",
          ],
          image: "happy.jpg",
        },
        {
          title:
            "  3. 모든 고객이 새로운 기술을 모두가 경험할 수 있는 기회를 제공합니다.",
          image: "experience.jpg",
        },
      ],
    };
  },
};
</script>
<style>
#plan {
  padding: 54px 20vw;
}
.paragraph-group {
  margin-bottom: 1rem;
}
.subtitle {
  margin-bottom: 0 !important;
}
.product-area {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  padding: 0;
}
.product-text {
  width: 30vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.product-media {
  width: 300px;
  margin: 0;
}
.product-title {
  font-size: 2.5vh;
  font-weight: bold;
}
</style>
