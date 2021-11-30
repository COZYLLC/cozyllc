<template>
  <div class="page">
    <p class="title is-4">{{ title }}</p>
    <section>
      <b-field horizontal label="연락처 (이메일)">
        <b-input v-model="form.email" type="email"> </b-input>
      </b-field>
      <b-field horizontal label="성함">
        <b-input v-model="form.name" type="name"></b-input>
      </b-field>
      <b-field horizontal label="문의 제목">
        <b-input v-model="form.title" type="text"></b-input>
      </b-field>
      <b-field horizontal label="문의 내용">
        <b-input v-model="form.content" type="textarea"></b-input>
      </b-field>
    </section>
    <b-button type="is-primary" style="margin-top: 10px; float: right">
      문의 제출
    </b-button>
  </div>
</template>
<script>
export default {
  props: ["title", "type"],
  data() {
    return {
      form: {
        type: this.type,
        email: "",
        name: "",
        title: "",
        content: "",
      },
    };
  },
  methods: {
    submit() {
      this.$axios
        .post(`/api/support`, this.form)
        .then((res) => {
          if (res.status == 200 && res.data.status) {
            alert("문의 접수가 완료되었습니다. 감사합니다.");
          } else {
            alert(
              "문의 접수 도중 문제가 발생하였습니다. support@cozyllc.co.kr 로 직접 문의 주시면 신속하게 처리해드리겠습니다."
            );
          }
        })
        .catch((err) => {
          console.log(err);
          alert(
            "문의 접수 도중 문제가 발생하였습니다. support@cozyllc.co.kr 로 직접 문의 주시면 신속하게 처리해드리겠습니다."
          );
        });
    },
  },
};
</script>
