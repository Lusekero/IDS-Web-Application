<template>
    <div>
        <!--//////////////////////-->
        <!--HEADER SECTION START-->
        <section id="header">
            <div class="container drops-header">
                <div class="drop drop-one animate__animated animate__shakeY animate__slow animate__infinite"></div>
                <div
                    class="drop drop-two d-none d-sm-block animate__animated animate__shakeY animate__slow animate__infinite animate__delay-2s">
                </div>
                <div class="hero-text text-center">
                    <h5 class="text-start fs-5 text-capitalize animate__animated animate__zoomInDown animate__slow">
                        <span>Learn More</span>
                    </h5>
                    <h1 class="display-4 text-capitalize">
                        <span
                            class="display-4--heading animate__animated animate__zoomInDown animate__delay-1s animate__slow">
                            About Us
                        </span>
                    </h1>
                </div>
            </div>
            <svg class="wave-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFF" fill-opacity="0.7"
                    d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,245.3C672,245,768,203,864,176C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            <svg class="waves-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#FFF" fill-opacity="1"
                    d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,245.3C672,245,768,203,864,176C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
        </section>
        <!--HEADER SECTION END-->
    </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
    name: 'Header'
})
</script>

<style scoped>

</style>