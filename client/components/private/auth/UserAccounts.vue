<template>
  <div class="pt-3 px-2">
    <!--//////////////////////-->
    <!--USER ACCOUNT LIST START-->
    <div class="container wrapper py-2 px-lg-4">
      <div class="row">
        <div class="info col-12 p-2 shadow">
          <div class="col-12 section-content">
            <div
              class="section-header mb-5 auto w-100 d-flex flex-column justify-content-center align-items-center flex-sm-row justify-content-sm-between"
            >
              <h3 class="mb-3 mb-sm-0 animate__animated animate__zoomIn">
                User Accounts
              </h3>
              <div class="btn-group" role="group" aria-label="Basic example">
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
                  class="primary-button rounded-right animate__animated animate__fadeInRight animate__delay-1s"
                >
                  View All
                  <span
                    class="btn-icon rotate-icon bg-primary d-flex justify-content-center align-items-center"
                    ><i class="bi bi-arrow-right"></i
                  ></span>
                </button>
              </div>
            </div>
            <div class="table-responsive-xl">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th class="text-capitalize" scope="col">Activity Name</th>
                    <th class="text-capitalize" scope="col">Main Goal</th>
                    <th class="text-capitalize" scope="col">Deadline</th>
                    <th class="text-capitalize" scope="col">Status</th>
                    <th class="text-capitalize" scope="col">Menu</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">2</th>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">3</th>
                    <td>Larry the Bird</td>
                    <td>@twitter</td>
                    <td>@fat</td>
                    <td>@fat</td>
                    <td>
                      <div
                        class="btn-group"
                        role="group"
                        aria-label="Basic example"
                      >
                        <button
                          type="button"
                          class="record-menu rounded-left"
                          title="View"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-eye"></i
                          ></span>
                        </button>
                        <button
                          type="button"
                          class="record-menu rounded-right"
                          title="Delete"
                        >
                          <span
                            class="btn-icon d-flex justify-content-center align-items-center"
                            ><i class="bi bi-trash"></i
                          ></span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--USER ACCOUNT LIST END-->
    <!--//////////////////////-->
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "UserAccounts",
});
</script>

<style scoped></style>
