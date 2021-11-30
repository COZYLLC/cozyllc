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
          {{ post.title }}
        </p>
      </div>
      <div class="column is-one-third">
        <p class="subtitle is-5 has-text-right">
          {{ new Date(post.date).toLocaleDateString() }}
        </p>
      </div>
    </div>
    <span v-html="post.content"></span>
  </div>
</template>
<script>
export default {
  props: ["category", "id"],
  data() {
    return {
      post: {
        title: "",
        date: "",
        content: "",
      },
    };
  },
  created() {
    this.getPost();
  },
  methods: {
    getPost() {
      this.$axios.get(`/api/board/post/${this.id}`).then((res) => {
        if (res.status == 200) {
          this.post = res.data.post;
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
