<template>
  <div class="page">
    <p class="title heading is-2">회사소개</p>
    <p class="subtitle is-5 has-text-centered">
      {{ introduction.title }}
    </p>
    <img :src="require('@/assets/cozyBanner.png')" style="margin-top: 54px" />
    <div id="welcome-message">
      <p class="message-line" v-for="text in introduction.text" :key="text">
        {{ text }}
      </p>
      <p style="font-weight: bold">- 유한책임회사 코지 일동</p>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      introduction: {
        title:
          "발전하는 새로운 기술을 만들어, 모든 사람이 편리하게 학습하고, 체험할 수 있는 기회를 제공하는 서비스를 COZY가 만들어 갑니다!",
        text: [
          "COZY는 학생의, 학생을 위한 서비스를 제작하는 회사로 COZY의 프로그램을 통해 다양한 학생들이 새로운 기술을 습득할 수 있는 선택지를 제시해, 배움의 즐거움을 느낄 수 있도록 하고, 모든 사람이 쉽고 편리하게 학습할 수 있는 서비스의  생산을 목표로 하고 있습니다.",
          "유한책임회사 코지의 홈페이지를 방문해 주신 고객님께 진심으로 감사드립니다. ",
        ],
      },
    };
  },
};
</script>
<style>
#welcome-message {
  margin-top: 54px;
}
.message-line {
  margin-bottom: 1rem;
}
</style>
