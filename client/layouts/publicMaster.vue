<template>
  <div>
    <PublicNavBar />
    <Nuxt />
    <PublicFooter />
    <PublicFloatingButtons />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "PublicMaster",
  head() {
    return {
      script: [
        {
          src: "js/navbar.js",
          type: "text/javascript",
          body: true,
        },
        {
          src: "js/main.js",
          type: "text/javascript",
          body: true,
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped></style>
