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
      category: { name: "article", text: "보도자료" },
      description: "COZY에 관한 내용을 담은 보도자료를 확인하실 수 있습니다.",
    };
  },
};
</script>
