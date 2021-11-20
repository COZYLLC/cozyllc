<template>
  <b-button
    type="is-primary"
    size="is-medium"
    rounded
    style="margin-top: 3vh"
    @click="onClick(params)"
    >{{ text }}</b-button
  >
</template>
<script>
export default {
  props: ["text", "onClick", "params"],
};
</script>
