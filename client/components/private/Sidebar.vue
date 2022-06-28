<template>
  <!--//////////////////////-->
  <!--SIDEBAR START-->
  <div class="sidebar">
    <div class="logo py-1 px-2">
      <div class="d-flex justify-content-start align-items-center">
        <img src="~assets/images/programing.png" class="img-fluid" alt="" />
        <h1>ids</h1>
      </div>
    </div>
    <div
      class="close-sidebar toggle-sidebar d-flex justify-content-center align-items-center d-lg-none"
    >
      <span class="icon">
        <i class="bi bi-x-circle-fill"></i>
      </span>
    </div>
    <ul class="menu-list mt-5">
      <li class="menu-item mb-2">
        <nuxt-link to="/private/admin" class="menu-link p-2">
          <span class="icon">
            <i class="bi bi-house"></i>
          </span>
          <span class="title">Dashboard</span>
        </nuxt-link>
      </li>
      <li id="drop-down" class="menu-item mb-2">
        <div class="accordion accordion-flush" id="reports-accordion">
          <div class="accordion-item border-0">
            <h2 class="accordion-header" id="reports-menu">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#reports-collapse"
                aria-expanded="true"
                aria-controls="reports-collapse"
              >
                <span class="icon">
                  <i class="bi bi-folder2-open"></i>
                </span>
                <span class="title">Reports</span>
              </button>
            </h2>
            <div
              id="reports-collapse"
              class="accordion-collapse collapse"
              aria-labelledby="reports-menu"
              data-bs-parent="#reports-accordion"
            >
              <div class="accordion-body pl-5">
                <ul class="menu-list">
                  <li
                    class="menu-item mb-2 animate__animated animate__fadeInLeft animate__fast"
                  >
                    <nuxt-link to="#" class="accordion-menu-link">
                      <span class="icon">
                        <i class="bi bi-collection"></i>
                      </span>
                      <span class="title">Projects</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu-item mb-2 animate__animated animate__fadeInLeft animate__fast"
                  >
                    <nuxt-link to="#" class="accordion-menu-link">
                      <span class="icon">
                        <i class="bi bi-files"></i>
                      </span>
                      <span class="title">Proposals</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu-item mb-2 animate__animated animate__fadeInLeft animate__fast"
                  >
                    <nuxt-link to="#" class="accordion-menu-link">
                      <span class="icon">
                        <i class="bi bi-gem"></i>
                      </span>
                      <span class="title">Products</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li id="drop-down" class="menu-item mb-2">
        <div class="accordion accordion-flush" id="content-accordion">
          <div class="accordion-item border-0">
            <h2 class="accordion-header" id="content-menu">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#content-collapse"
                aria-expanded="true"
                aria-controls="content-collapse"
              >
                <span class="icon">
                  <i class="bi bi-body-text"></i>
                </span>
                <span class="title">Website Content</span>
              </button>
            </h2>
            <div
              id="content-collapse"
              class="accordion-collapse collapse"
              aria-labelledby="content-menu"
              data-bs-parent="#content-accordion"
            >
              <div class="accordion-body pl-2">
                <ul class="menu-list ml-5">
                  <li
                    class="menu-item mb-2 animate__animated animate__fadeInLeft"
                  >
                    <nuxt-link to="#" class="accordion-menu-link">
                      <span class="icon">
                        <i class="bi bi-file-earmark"></i>
                      </span>
                      <span class="title">Page Content</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu-item mb-2 animate__animated animate__fadeInLeft"
                  >
                    <nuxt-link to="#" class="accordion-menu-link">
                      <span class="icon">
                        <i class="bi bi-share"></i>
                      </span>
                      <span class="title">Shared Content</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li id="drop-down" class="menu-item mb-2">
        <div class="accordion accordion-flush" id="users-accordion">
          <div class="accordion-item border-0">
            <h2 class="accordion-header" id="users-menu">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#users-collapse"
                aria-expanded="true"
                aria-controls="users-collapse"
              >
                <span class="icon">
                  <i class="bi bi-people"></i>
                </span>
                <span class="title">Users</span>
              </button>
            </h2>
            <div
              id="users-collapse"
              class="accordion-collapse collapse"
              aria-labelledby="users-menu"
              data-bs-parent="#users-accordion"
            >
              <div class="accordion-body pl-2">
                <ul class="menu-list ml-5">
                  <li
                    class="menu-item mb-2 animate__animated animate__fadeInLeft"
                  >
                    <nuxt-link to="/private/users" class="accordion-menu-link">
                      <span class="icon">
                        <i class="bi bi-file-earmark"></i>
                      </span>
                      <span class="title">Accounts</span>
                    </nuxt-link>
                  </li>
                  <li
                    class="menu-item mb-2 animate__animated animate__fadeInLeft"
                  >
                    <nuxt-link
                      to="/private/users/privileges"
                      class="accordion-menu-link"
                    >
                      <span class="icon">
                        <i class="bi bi-share"></i>
                      </span>
                      <span class="title">Privileges</span>
                    </nuxt-link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <!--SIDEBAR END-->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Sidebar",
});
</script>

<style scoped></style>
