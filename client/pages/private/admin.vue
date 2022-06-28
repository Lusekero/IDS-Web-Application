<template>
  <div>
    <PrivateDashboard />
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  layout: "privateMaster",
  name: "Admin",
  head() {
    return {
      script: [
        {
          src: "/js/adminSideBar.js",
          type: "text/javascript",
          body: true,
        },
        {
          src: "/js/adminMain.js",
          type: "text/javascript",
          body: true,
        },
      ],
    };
  },
});
</script>

<style scoped></style>
