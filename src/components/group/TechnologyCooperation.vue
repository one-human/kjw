<script setup>
import { ref } from "vue";
const iframeSrc = ref(
  "https://fanbi11.haier.net:8080/webroot/decision/view/form?viewlet=JT/IT/02/KJW/KJHZ/KJHZ.frm"
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
