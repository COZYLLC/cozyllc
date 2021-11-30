<template>
  <div class="board-page">
    <p class="title is-3">{{ category.text }}</p>
    <p class="subtitle is-5">{{ description }}</p>
    <PostList :posts="posts" :category="category" />
  </div>
</template>

<script>
import PostList from "@/components/Board/PostList.vue";
export default {
  props: ["category", "description"],
  components: {
    PostList,
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts() {
      this.$axios.get(`/api/board/${this.category.name}/`).then((res) => {
        if (res.status == 200) {
          const newPost = [];
          res.data.posts.forEach((post, idx) => {
            post.idx = idx;
            newPost.push(post);
          });
          this.posts = newPost;
        } else {
          alert("게시글을 불러오지 못했습니다!");
        }
      });
    },
  },
  data() {
    return {
      posts: [],
    };
  },
};
</script>
