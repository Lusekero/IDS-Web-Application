<template>
  <div class="container-fluid px-0">
    <PublicSharedCarauselHeader />
    <PublicServicesCardDisplay />
    <PublicServicesQualities />
    <PublicAboutUsApproach />
    <PublicServicesHowWeWork />
    <PublicServicesWorkFlow />
    <PublicCallToActionsGetInTouch />
    <PublicAboutUsWhyUs />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  layout: 'publicMaster',
  name: 'IndexPage'
})
</script>
