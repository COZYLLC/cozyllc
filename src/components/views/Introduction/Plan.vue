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
          title: "1. 새로운 기술과 믿음을 바탕으로 합니다.",
          text: [
            "기술 개발과 고객의 믿음을 원칙으로 합니다.",
            "새로운 기술과 믿음의 조화를 통해 소비자와 신뢰를 쌓습니다.",
          ],
          image: "trust.png",
        },
        {
          title: "2. 매력적이고 즐거운 서비스를 생산합니다.",
          text: [
            "고객이 배움의 즐거움과 신기술에 흥미를 느낄 수 있는 서비스를 창출합니다.",
            "동종업계에서 가장 매력적인 서비스를 만듭니다.",
          ],
          image: "happy.png",
        },
        {
          title: "3. 모든 고객이 새로운 기술을 습득할 수 있게 한다.",
          text: [
            "모든 고객에게 새로운 기술을 경험할 수 있는 기회를 제공합니다",
          ],
          image: "experience.png",
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
.product-title {
  font-size: 2.5vh;
  font-weight: bold;
}
</style>
<style scoped>
.product-area {
  padding: 5vh 0;
}
.product-media {
  width: 200px;
  height: 200px;
}
</style>
