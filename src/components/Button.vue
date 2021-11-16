<template>
  <b-button
    type="is-primary"
    size="is-large"
    rounded
    style="margin-top: 3vh"
    @click="onClick"
    >{{ text }}</b-button
  >
</template>
<script>
export default {
  props: ["text", "onClick"],
};
</script>
