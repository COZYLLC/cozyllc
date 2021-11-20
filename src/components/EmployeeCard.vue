<template>
  <div class="card">
    <div class="card-image">
      <figure class="image 4-by-3" style="padding: 3vw">
        <img :src="require(`@/assets/employees/${image}`)" />
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ name }}</p>
          <p class="subtitle is-6">{{ position }}</p>
        </div>
      </div>
      <div class="content">{{ description }}</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["name", "position", "description", "image"],
};
</script>
