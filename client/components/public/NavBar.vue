<template>
    <div>
        <!--//////////////////////-->
        <!--NAVBAR START-->
        <nav class="navbar navbar-expand-lg navbar-light py-0">
            <div class="container py-0">
                <span class="navbar-brand" title="Integrated and Dynamic Systems">
                    <img src="~assets/images/programing.png" class="img-fluid" alt="logo-image">
                </span>
                <div class="navbar-collapse d-flex flex-column justify-content-center flex-lg-row justify-content-lg-end"
                    id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <nuxt-link to="/" class="nav-link">Home</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/about" class="nav-link">About</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/services" class="nav-link">Services</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/portfolio" class="nav-link">Portfolio</nuxt-link>
                        </li>
                        <li class="nav-item">
                            <nuxt-link to="/contact" class="nav-link">Contact</nuxt-link>
                        </li>
                    </ul>
                    <a href="tel:+26599382449" class="rounded-pill btn-rounded" title="Call Us NOW">
                        +265 (0) 991 382 449
                        <span class="btn-icon bg-primary d-flex justify-content-center align-items-center"><i
                                class="bi bi-telephone-fill"></i></span>
                        <span class="icon-animation icon-animation--border-1"></span>
                        <span class="icon-animation icon-animation--border-2"></span>
                    </a>
                </div>
                <div class="menu-toggler d-flex d-lg-none">
                    <div class="wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
                <div class="overlay d-lg-none"></div>
            </div>
        </nav>
        <!--NAVBAR END-->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'NavBar'
})
</script>

<style lang="scss" scoped>

</style>