<template>
    <div>
        <PublicSharedHeader />
        <PublicAboutUsWhoWeAre />
        <PublicAboutUsStatements />
        <PublicCallToActionsGetInTouch />
        <PublicAboutUsValues />
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    layout: 'publicMaster',
    name: 'About'
})
</script>