<template>
  <div class="page">
    <BoardPage :category="category" :description="description" />
  </div>
</template>
<script>
import BoardPage from "@/components/Board/BoardPage.vue";
export default {
  components: {
    BoardPage,
  },
  data() {
    return {
      category: { name: "notice", text: "공지사항" },
      description: "COZY에서 발표하는 내용을 볼 수 있습니다.",
    };
  },
};
</script>
