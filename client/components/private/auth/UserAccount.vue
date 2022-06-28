<template>
  <div class="pt-3 px-0">
    <!--//////////////////////-->
    <!--USER PROFILE START-->
    <div class="container wrapper py-2 px-lg-4">
      <div class="row">
        <div class="info col-12 bg-white p-2 shadow overflow-hidden">
          <div class="col-12 section-content">
            <div
              class="section-header auto w-100 d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between"
            >
              <h3 class="mb-3 animate__animated animate__zoomIn">
                User Profile
              </h3>
              <button
                type="button"
                class="rounded-pill btn-rounded animate__animated animate__fadeInRight animate__delay-1s"
              >
                <span
                  class="btn-icon bg-primary d-flex justify-content-center align-items-center"
                >
                  <i class="bi bi-arrow-left"></i>
                </span>
                Back
              </button>
            </div>
            <form class="form-wrap mt-4" @submit.prevent>
              <div class="row">
                <div
                  class="col-lg-4 d-flex justify-content-center justify-content-md-start justify-content-lg-center align-items-start"
                >
                  <div class="avator">
                    <img
                      src="../../../assets/images/users/profile.jpg"
                      alt="user profile"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-lg-8 mt-4 mt-lg-0">
                  <h5>All fileds with * are required.</h5>
                  <div class="row g-3">
                    <div class="col-sm-6 input-wrap">
                      <input
                        class="input"
                        type="text"
                        id="firstname"
                        placeholder="First Name"
                        v-model="form.firstname"
                      />
                      <label for="firstname">First Name*</label>
                    </div>
                    <div class="col-sm-6 input-wrap">
                      <input
                        class="input"
                        type="text"
                        id="lastname"
                        placeholder="Last Name"
                        v-model="form.lastname"
                      />
                      <label for="lastname">Last Name*</label>
                    </div>
                    <div class="col-sm-6 input-wrap">
                      <input
                        class="input"
                        type="text"
                        id="job-position"
                        placeholder="Job Position"
                        v-model="form.job_position"
                      />
                      <label for="job-position">Job Position*</label>
                    </div>
                    <div class="col-sm-6 input-wrap">
                      <input
                        class="input"
                        type="text"
                        id="department"
                        placeholder="Department"
                        value=""
                      />
                      <label for="department">Department*</label>
                    </div>
                    <div class="col-sm-6 input-wrap">
                      <input
                        class="input"
                        type="email"
                        id="email"
                        placeholder="Your email address"
                        v-model="form.email"
                      />
                      <label for="email">Email*</label>
                    </div>
                    <div class="col-sm-6 input-wrap">
                      <input
                        class="input"
                        type="password"
                        id="password"
                        placeholder="Your password"
                        v-model="form.password"
                      />
                      <label for="password">Password*</label>
                    </div>
                    <div class="col-sm-6 col-lg-7 col-xl-6 input-wrap">
                      <input
                        class="input"
                        type="password"
                        id="confirm-password"
                        placeholder="Confirm password"
                        v-model="form.confirm_password"
                      />
                      <label for="verify-password">Confirm Password*</label>
                    </div>
                    <div class="col-sm-6 col-lg-5 col-xl-6">
                      <div
                        class="col-12 access-privileges border rounded-3 p-3 mb-4"
                      >
                        <h5 class="heading">Access Privileges*</h5>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="accessPrivilege"
                            id="adminRadio"
                            value="Admin"
                            v-model="form.access_privilege"
                          />
                          <label class="form-check-label" for="adminRadio">
                            Admin
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="accessPrivilege"
                            id="authorRadio"
                            value="Author"
                            v-model="form.access_privilege"
                          />
                          <label class="form-check-label" for="authorRadio">
                            Author
                          </label>
                        </div>
                        <div class="form-check">
                          <input
                            class="form-check-input"
                            type="radio"
                            name="accessPrivilege"
                            id="guestRadio"
                            value="Guest"
                            v-model="form.access_privilege"
                          />
                          <label class="form-check-label" for="guestRadio">
                            Guest
                          </label>
                        </div>
                        <!--<div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="admin"
                          />
                          <label class="form-check-label" for="admin"
                            >Admin</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="author"
                          />
                          <label class="form-check-label" for="author"
                            >Author</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="guest"
                          />
                          <label class="form-check-label" for="guest"
                            >Guest</label
                          >
                        </div>-->
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="btn-group d-flex justify-content-end align-items-end"
                      role="group"
                      aria-label="Basic example"
                    >
                      <button
                        type="button"
                        class="primary-button rounded-left animate__animated animate__fadeInLeft animate__delay-1s"
                      >
                        <span
                          class="btn-icon bg-primary d-flex justify-content-center align-items-center"
                          ><i class="bi bi-plus-lg"></i
                        ></span>
                        Add New
                      </button>
                      <button
                        type="button"
                        class="primary-button rounded-left d-none animate__animated animate__fadeInLeft animate__delay-1s"
                      >
                        <span
                          class="btn-icon bg-primary d-flex justify-content-center align-items-center"
                        >
                          <i class="bi bi-pencil-square"></i>
                        </span>
                        Update
                      </button>
                      <button
                        type="button"
                        class="primary-button rounded-right animate__animated animate__fadeInRight animate__delay-1s"
                      >
                        Delete
                        <span
                          class="btn-icon bg-danger d-flex justify-content-center align-items-center"
                        >
                          <i class="bi bi-trash"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <!--USER PROFILE END-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { ref, reactive } from "@nuxtjs/composition-api";

export default Vue.extend({
  name: "UserAccount",

  setup() {
    // Form Data
    const form = reactive({
      firstname: "",
      lastname: "",
      job_position: "",
      department: "",
      email: "",
      password: "",
      confirm_password: "",
      access_privilege: "",
    });

    return {
      form,
    };
  },
});
</script>

<style scoped></style>
