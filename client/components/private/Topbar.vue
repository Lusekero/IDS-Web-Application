<template>
  <!--//////////////////////-->
  <!--TOP BAR START-->
  <div
    class="top-bar d-flex flex-row justify-content-between align-items-center py-1 px-2 shadow-sm w-100"
  >
    <div class="menu-toggler d-flex">
      <div class="menu-wrapper">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div class="search">
      <input
        class="form-control me-2"
        type="search"
        placeholder="Search"
        aria-label="Search"
      />
      <div class="icon">
        <i class="bi bi-search"></i>
      </div>
    </div>
    <div class="user-profile d-lg-flex">
      <div
        class="profile-name d-none d-lg-flex flex-column justify-content-center align-items-center pt-2"
      >
        <span class="first-name">Lusekero</span>
        <span class="last-name">Mwathengere</span>
      </div>
      <div class="profile-picture ms-3">
        <img
          src="~assets/images/users/profile.jpg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </div>
    </div>
    <div class="drop-down py-2 px-3 text-center rounded shadow-sm">
      <ul class="menu-list mb-0">
        <li class="mb-1 animate__animated">
          <a href="#">
            <span class="icon">
              <i class="bi bi-person"></i>
            </span>
            <span class="title">Profile</span>
          </a>
        </li>
        <li class="animate__animated">
          <a href="#">
            <span class="icon">
              <i class="bi bi-power"></i>
            </span>
            <span class="title">Logout</span>
          </a>
        </li>
      </ul>
    </div>
  </div>
  <!--TOP BAR END-->
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Topbar",
});
</script>

<style scoped></style>
