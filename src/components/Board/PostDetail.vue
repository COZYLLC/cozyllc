<template>
  <div class="page">
    <router-link class="post-back" :to="`/${category}`">
      <p class="subtitle is-6">
        <vue-fontawesome
          class="subtitle is-6"
          :icon="['fa', 'angle-left']"
        ></vue-fontawesome>
        돌아가기
      </p>
    </router-link>
    <div class="columns">
      <div class="column">
        <p class="title is-4">
          {{ title }}
        </p>
      </div>
      <div class="column is-one-third">
        <p class="subtitle is-5 has-text-right">{{ date }}</p>
      </div>
    </div>
    <span v-html="content"></span>
  </div>
</template>
<script>
export default {
  props: ["category", "id"],
  data() {
    return {
      title: "",
      date: "",
      content: "",
    };
  },
  created() {
    //this.getPost();
    this.title = "게시글 테스트";
    this.date = "2021. 05. 24";
    this.content =
      "<p class='title is-1'>제목크기</p><p class='subtitle is-1'>부제목크기</p><p class='is-italic'>이탤릭</p>";
  },
  methods: {
    getPost() {
      this.$axios.get(`/api/post/${this.category}/${this.id}`).then((res) => {
        if (res.statusCode == 200) {
          this.title = res.data.post.title;
          this.date = res.data.post.date;
          this.content = res.data.post.content;
        }
      });
    },
  },
};
</script>
<style>
a.post-back {
  color: blue;
}
</style>
