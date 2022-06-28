<template>
  <div class="container-fluid px-0">
    <!--//////////////////////-->
    <!--LOGIN SECTION START-->
    <section id="login">
      <div class="container d-flex justify-content-center align-items-center">
        <div class="card rounded mb-5 mb-md-auto">
          <div class="row g-0">
            <div class="col-md-6">
              <img src="~assets/images/illistrations/authentication.png"
                class="img-fluid animate__animated animate__tada animate__infinite" alt="...">
            </div>
            <div class="col-md-6">
              <div class="card-body">
                <h2 class="card-title text-dark">Welcome</h2>
                <form class="form-wrap" id="login-form" autocomplete="off" method="get">
                  <div class="input-wrap my-4">
                    <input class="input" type="email" id="email" placeholder="Your email address" value="" />
                    <label for="email">Email*</label>
                  </div>

                  <div class="input-wrap mb-4">
                    <input class="input" type="password" id="password" placeholder="Your password" value="" />
                    <label for="password">Password*</label>
                  </div>

                  <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="remember">
                    <label class="form-check-label" for="remember">Remember me</label>
                  </div>

                  <button type="button" class="rounded-pill btn-rounded w-50 mt-4">
                    Login
                    <span class="btn-icon bg-primary"><i class="bi bi-arrow-right"></i></span>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div class="logo">
            <img src="~assets/images/programing.png" alt="" class="img-fluid">
          </div>
        </div>
      </div>
    </section>
    <!--LOGIN SECTION END-->
    <!--//////////////////////-->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Login'
})
</script>
