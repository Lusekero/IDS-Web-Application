<template>
  <!--//////////////////////-->
  <!--ADMIN START-->
  <div id="admin" class="d-flex flex-row">
    <PrivateSidebar />
    <!--//////////////////////-->
    <!--MAIN CONTENT START-->
    <main class="content-wrapper w-100">
      <PrivateTopbar />
      <!--//////////////////////-->
      <!--CONTENT START-->
      <section class="content pb-5">
        <Nuxt />
      </section>
      <!--CONTENT END-->
      <!--//////////////////////-->
    </main>
    <!--MAIN CONTENT END-->
    <!--//////////////////////-->
    <!--MAIN OVERLAY-->
    <!--//////////////////////-->
    <div class="overlay toggle-sidebar"></div>
    <!--//////////////////////-->
    <!--FLOATING ACTION BUTTONS START-->
    <!--Scroll Top Floating Buttons-->
    <button class="floating-button scroll-top p-3" title="Scroll Top">
      <i class="bi bi-arrow-return-left"></i>
    </button>
    <!--FLOATING ACTION BUTTONS END-->
    <!--//////////////////////-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "privateMaster",
});
</script>

<style lang="scss" scoped></style>
