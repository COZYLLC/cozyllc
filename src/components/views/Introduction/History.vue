<template>
  <div class="page">
    <p class="title heading is-2">연혁</p>
    <div v-for="year in years" :key="year.year">
      <p class="title heading is-3">{{ year.year }}년</p>
      <div class="historys">
        <b-steps vertical :has-navigation="false">
          <b-step-item
            v-for="(history, i) in year.historys"
            :label="history.date"
            :key="i"
          >
          </b-step-item>
        </b-steps>
        <div style="padding: 10px 0">
          <p
            v-for="(history, i) in year.historys"
            :key="i"
            class="history-text"
            :style="i == year.historys.length - 1 ? 'margin:0' : ''"
          >
            {{ history.content }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      years: [
        {
          year: 2021,
          historys: [
            {
              date: "5월 24일",
              content: "COZY 설립",
            },
            {
              date: "9월 6일",
              content: "H4Pay 공식 런칭",
            },
            {
              date: "10월 5일",
              content: "H4Pay 2.0 출시",
            },
          ],
        },
      ],
    };
  },
};
</script>
<style>
.step-item.is-active {
  color: white;
}

.historys {
  display: flex;
  flex-direction: row;
}
.history-text {
  font-weight: bold;
  font-size: 30px;
  margin-bottom: 45px;
}
.paragraph-group {
  margin-bottom: 1rem;
}
.heading {
  margin: 2.5rem 0 !important;
  text-align: center;
}
.subtitle {
  margin-bottom: 0 !important;
}
.product-title {
  font-size: 2.5vh;
  font-weight: bold;
}
</style>
