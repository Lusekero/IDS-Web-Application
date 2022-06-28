<template>
    <div>
        <!--//////////////////////-->
        <!--WHO WE ARE START-->
        <section id="who-we-are" class="py-5 bg-white">
            <div class="container d-flex justify-content-center align-items-center">
                <div class="section-statement text-center">
                    <h1 class="display-4 text-dark text-capitalize">
                        <span class="display-4--heading">
                            We are inspired to bring your ideas to reality
                        </span>
                    </h1>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 d-flex flex-column justify-content-center align-items-start">
                        <p class="display-4--description text-justify">
                            We are a professional and innovative software development company that empower businesses
                            and institutions for digital success. We deliver market-defining and high quality web
                            development and business process automation services that are transformative
                            and give optimal value to our clients’ investments.
                        </p>
                        <div class="why-us w-100">
                            <div class="row">
                                <div class="col-sm-6">
                                    <ul>
                                        <li>
                                            <i class="bi bi-check-circle-fill"></i> We are friendly
                                        </li>
                                        <li>
                                            <i class="bi bi-check-circle-fill"></i> We are thoughtful
                                        </li>
                                        <li>
                                            <i class="bi bi-check-circle-fill"></i> We build to last
                                        </li>
                                    </ul>
                                </div>
                                <div class="col-sm-6">
                                    <ul>
                                        <li>
                                            <i class="bi bi-check-circle-fill"></i> We are proficient
                                        </li>
                                        <li>
                                            <i class="bi bi-check-circle-fill"></i> We are reliable
                                        </li>
                                        <li>
                                            <i class="bi bi-check-circle-fill"></i> 24/7 support
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 blob-img d-none d-lg-block">
                        <div class="blob">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"
                                class="animate__animated animate__jello animate__infinite">
                                <path fill="#F1F5F9" opacity="0.8"
                                    d="M41.7,-77.7C50.8,-67,52.7,-49.2,58.7,-35.1C64.7,-21,74.8,-10.5,75.5,0.4C76.2,11.3,67.4,22.6,58.9,32.3C50.4,42,42,50.2,32.2,55.7C22.5,61.3,11.2,64.2,-2.6,68.7C-16.5,73.3,-33,79.6,-45,75.3C-57,71.1,-64.4,56.3,-68.5,42C-72.7,27.7,-73.4,13.8,-75.3,-1.1C-77.3,-16,-80.3,-32.1,-74.8,-44.1C-69.4,-56.1,-55.5,-64,-41.6,-72C-27.7,-79.9,-13.8,-88,1.2,-90.1C16.3,-92.2,32.6,-88.5,41.7,-77.7Z"
                                    transform="translate(100 100)" />
                            </svg>
                        </div>
                        <img src="~assets/images/illistrations/startup.png"
                            class="img-fluid w-75 animate__animated animate__bounce animate__infinite" alt="">
                    </div>
                </div>
            </div>
        </section>
        <!--WHO WE ARE END-->
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'WhoWeAre'
})
</script>

<style lang="scss" scoped>

</style>