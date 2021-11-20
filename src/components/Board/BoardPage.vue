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
    //this.getPosts(); API link
    this.posts = [
      {
        id: 0,
        title: "hi",
        date: new Date(),
      },
      {
        id: 0,
        title: "hi",
        date: new Date(),
      },
      {
        id: 0,
        title: "hi",
        date: new Date(),
      },
      {
        id: 0,
        title: "hi",
        date: new Date(),
      },
      {
        id: 0,
        title: "hi",
        date: new Date(),
      },
      {
        id: 0,
        title: "hi",
        date: new Date(),
      },
    ];
  },
  methods: {
    getPosts() {
      this.$axios.get(`/api/post/${this.category.name}/`).then((res) => {
        if (res.statusCode == 200) {
          this.posts = res.data.posts;
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
