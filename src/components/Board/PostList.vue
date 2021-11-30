<template>
  <div class="post-list">
    <b-table
      :data="posts"
      :paginated="isPaginated"
      :per-page="perPage"
      :current-page.sync="currentPage"
      :pagination-simple="isPaginationSimple"
      :pagination-position="paginationPosition"
      default-sort-direction="desc"
      :pagination-rounded="isPaginationRounded"
      :sort-icon="sortIcon"
      :sort-icon-size="sortIconSize"
      default-sort="idx"
      aria-next-label="Next page"
      aria-previous-label="Previous page"
      aria-page-label="Page"
      aria-current-label="Current page"
    >
      <b-table-column
        field="idx"
        width="80"
        label="번호"
        sortable
        numeric
        centered
        v-slot="props"
      >
        {{ props.row.idx }}
      </b-table-column>

      <b-table-column field="title" label="제목" sortable v-slot="props">
        <router-link :to="`/post/${category.name}/${props.row.id}`">
          {{ props.row.title }}
        </router-link>
      </b-table-column>

      <b-table-column
        field="date"
        label="게시일"
        width="100"
        sortable
        centered
        v-slot="props"
      >
        <span class="tag is-primary">
          {{ new Date(props.row.date).toLocaleDateString() }}
        </span>
      </b-table-column>
    </b-table>
  </div>
</template>

<script>
export default {
  props: ["category", "posts"],
  data() {
    return {
      isPaginated: true,
      isPaginationSimple: false,
      isPaginationRounded: false,
      paginationPosition: "bottom",
      sortIcon: "arrow-up",
      sortIconSize: "is-small",
      currentPage: 1,
      perPage: 5,
    };
  },
};
</script>
