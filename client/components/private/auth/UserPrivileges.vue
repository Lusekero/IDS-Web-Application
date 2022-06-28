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
                User Privileges
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
                  <div class="row g-3">
                    <div class="col-sm-6 content-privileges">
                      <h5>Content Priviledges</h5>
                      <div class="col-12 border rounded-3 p-3 mb-4">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="create-content"
                          />
                          <label class="form-check-label" for="create-content"
                            >Create</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="update-content"
                          />
                          <label class="form-check-label" for="update-content"
                            >Update</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="delete-content"
                          />
                          <label class="form-check-label" for="delete-content"
                            >Delete</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-sm-6 content-privileges">
                      <h5>Admin Priviledges</h5>
                      <div class="col-12 border rounded-3 p-3 mb-4">
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="create-user"
                          />
                          <label class="form-check-label" for="create-user"
                            >Create User</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="update-user"
                          />
                          <label class="form-check-label" for="update-user"
                            >Update User</label
                          >
                        </div>
                        <div class="form-check">
                          <input
                            type="checkbox"
                            class="form-check-input"
                            id="delete-user"
                          />
                          <label class="form-check-label" for="delete-user"
                            >Delete User</label
                          >
                        </div>
                      </div>
                    </div>
                    <div class="col-12 page-restrictions">
                      <h5>Page Restrictions</h5>
                      <div class="col-12 border rounded-3 p-3 mb-4">
                        <div class="row">
                          <div class="col-sm-4">
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="create-user"
                              />
                              <label class="form-check-label" for="create-user"
                                >Create User</label
                              >
                            </div>
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="update-user"
                              />
                              <label class="form-check-label" for="update-user"
                                >Update User</label
                              >
                            </div>
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="delete-user"
                              />
                              <label class="form-check-label" for="delete-user"
                                >Delete User</label
                              >
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="create-user"
                              />
                              <label class="form-check-label" for="create-user"
                                >Create User</label
                              >
                            </div>
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="update-user"
                              />
                              <label class="form-check-label" for="update-user"
                                >Update User</label
                              >
                            </div>
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="delete-user"
                              />
                              <label class="form-check-label" for="delete-user"
                                >Delete User</label
                              >
                            </div>
                          </div>
                          <div class="col-sm-4">
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="create-user"
                              />
                              <label class="form-check-label" for="create-user"
                                >Create User</label
                              >
                            </div>
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="update-user"
                              />
                              <label class="form-check-label" for="update-user"
                                >Update User</label
                              >
                            </div>
                            <div class="form-check">
                              <input
                                type="checkbox"
                                class="form-check-input"
                                id="delete-user"
                              />
                              <label class="form-check-label" for="delete-user"
                                >Delete User</label
                              >
                            </div>
                          </div>
                        </div>
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

export default Vue.extend({
  name: "UserAccount",
});
</script>

<style scoped></style>
