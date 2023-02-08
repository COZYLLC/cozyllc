<template>
  <div class="page">
    <div v-if="success == true">
      <p class="title is-4">뉴스레터 수신자 명단에서 제외되었습니다.</p>
      <p class="subtitle is-6">다시 만날 수 있기를 희망합니다.</p>
    </div>
    <div v-else-if="success == false">
      <p class="title is-4">
        죄송합니다. 뉴스레터 수신자 명단 제외에 실패했습니다.
      </p>
      <p class="subtitle is-6">
        <a href="mailto:support@cozyllc.co.kr">support@cozyllc.co.kr</a>로
        문의해주세요.
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["email"],
  data() {
    return {
      success: null,
    };
  },
  created() {
    this.$axios
      .post(`${process.env.VUE_APP_API_URL}/mail/unsubscribe`, {
        email: [this.email],
      })
      .then((res) => {
        console.log(res);
        if (res.status == 200 && res.data.status) {
          this.success = true;
        } else {
          this.success = false;
        }
      })
      .catch((err) => {
        this.success = false;
        console.log(err);
      });
  },
};
</script>
