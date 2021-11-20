<template>
  <div class="simple-post">
    <div class="post-info">
      <router-link :to="`/${category.name}/${post.id}/`">{{
        post.title
      }}</router-link>
      <span> {{ getMonthDayDate(post.date) }}</span>
    </div>
    <hr class="post-divider" />
  </div>
</template>
<script>
export default {
  props: ["post", "category"],
  methods: {
    getMonthDayDate(date) {
      const parsedDate = new Date(Date.parse(date));
      console.log(parsedDate);
      return `${parsedDate.getFullYear()}. ${parsedDate.getMonth() + 1}.`;
    },
  },
};
</script>
<style>
.post-info {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0 10px;
}
hr.post-divider {
  background-color: grey;
  height: 1px;
  margin: 1rem 0;
  display: block;
  border: none;
  width: 100%;
}
</style>
