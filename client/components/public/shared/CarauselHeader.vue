<template>
    <div>
        <!--//////////////////////-->
        <!--HEADER SECTION START-->
        <section id="header">
            <div class="container">
                <!--CAROUSEL START-->
                <div id="headerCarouselIndicators" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner text-light">
                        <div class="carousel-item active" data-bs-interval="12000">
                            <div class="row">
                                <div class="col-lg-7 hero-text text-center text-lg-start overflow-hidden">
                                    <h1 class="display-2 animate__animated animate__fadeInDown">
                                        <span class="display-2--heading">
                                            Imagine what we could do for you
                                        </span>
                                    </h1>
                                    <p
                                        class="display-2--description lh-base mb-5 animate__animated animate__zoomIn animate__delay-1s">
                                        We have dedicated and innovative software developers that provide 100%
                                        successful project delivery in our web application development services.
                                    </p>
                                    <a href="services.html"
                                        class="rounded-pill btn-rounded animate__animated animate__backInUp animate__delay-1s animate__slow">
                                        Learn More
                                        <span
                                            class="btn-icon bg-primary d-flex justify-content-center align-items-center"><i
                                                class="bi bi-arrow-right"></i></span>
                                    </a>
                                </div>
                                <div class="col-lg-5 hero-image d-flex justify-content-center align-items-center">
                                    <img src="~assets/images/illistrations/code_development.png"
                                        alt="web development illustration"
                                        class="img-fluid animate__animated animate__shakeY animate__infinite">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="12000">
                            <div class="row">
                                <div class="col-lg-7 hero-text text-center text-lg-start overflow-hidden">
                                    <h1 class="display-2 animate__animated animate__fadeInDown">
                                        <span class="display-2--heading">
                                            We are driven to help you succeed
                                        </span>
                                    </h1>
                                    <p
                                        class="display-2--description lh-base mb-5 animate__animated animate__zoomIn animate__delay-1s">
                                        We go the extra mile to deliver scalable, enganging, and functional web
                                        applications that provide great user experience and increase your digital
                                        success.
                                    </p>
                                    <a href="about.html"
                                        class="rounded-pill btn-rounded animate__animated animate__backInUp animate__delay-1s animate__slow">
                                        learn more
                                        <span
                                            class="btn-icon bg-primary d-flex justify-content-center align-items-center"><i
                                                class="bi bi-arrow-right"></i></span>
                                    </a>
                                </div>
                                <div class="col-lg-5 hero-image d-flex justify-content-center align-items-center">
                                    <img src="~assets/images/illistrations/support.png"
                                        alt="web development illustration"
                                        class="img-fluid animate__animated animate__shakeY animate__infinite">
                                </div>
                            </div>
                        </div>
                        <div class="carousel-item" data-bs-interval="12000">
                            <div class="row">
                                <div class="col-lg-7 hero-text text-center text-lg-start overflow-hidden">
                                    <h1 class="display-2 animate__animated animate__fadeInDown">
                                        <span class="display-2--heading">
                                            Your Customized system is possible
                                        </span>
                                    </h1>
                                    <p
                                        class="display-2--description lh-base mb-5 animate__animated animate__zoomIn animate__delay-1s">
                                        We apply in-depth research and analysis to discover your needs and requirements,
                                        and innovatively develop easy to use applications that achieve business goals.
                                    </p>
                                    <a href="#"
                                        class="rounded-pill btn-rounded animate__animated animate__backInUp animate__delay-1s animate__slow">
                                        Get in touch
                                        <span
                                            class="btn-icon bg-primary d-flex justify-content-center align-items-center"><i
                                                class="bi bi-arrow-right"></i></span>
                                    </a>
                                </div>
                                <div class="col-lg-5 hero-image d-flex justify-content-center align-items-center">
                                    <img src="~assets/images/illistrations/note_taking.png"
                                        alt="web development illustration"
                                        class="img-fluid animate__animated animate__shakeY animate__infinite">
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#headerCarouselIndicators" data-bs-slide-to="0"
                            class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#headerCarouselIndicators" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#headerCarouselIndicators" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                </div>
                <!--CAROUSEL END-->
            </div>
            <!--WAVES START-->
            <svg class="wave-one" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F1F5F9" fill-opacity="0.7"
                    d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,245.3C672,245,768,203,864,176C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            <svg class="waves-two" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path fill="#F1F5F9" fill-opacity="1"
                    d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,245.3C672,245,768,203,864,176C960,149,1056,139,1152,149.3C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>
            <!--WAVES END-->
        </section>
        <!--HEADER SECTION END-->
    </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
    name: 'CarauselHeader'
})
</script>

<style scoped>

</style>