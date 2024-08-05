<script setup>
import { ref } from "vue";
const iframeSrc = ref(
  "https://fanbi.haier.net:8080/webroot/decision/view/form?viewlet=JT%252FIT%252F02%252FKJWSZH%252FKJJX%252FKJJX.frm&op=form_adaptive"
);
</script>

<template>
  <div style="height: 900px; width: 100%">
    <iframe
      :src="iframeSrc"
      frameborder="0"
      width="100%"
      height="100%"
    ></iframe>
  </div>
</template>

<style lang="scss" scoped></style>
