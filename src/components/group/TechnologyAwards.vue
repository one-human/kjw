<script setup>
import { ref } from "vue";
const iframeSrc = ref(
  "https://fanbi11.haier.net:8080/webroot/decision/view/form?viewlet=JT%252FIT%252F02%252FKJW%252FKJJX%252FKJJX.frm&ref_t=design&ref_c=c56cca15-e787-4f56-b9a1-afaacf03a3fc"
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
