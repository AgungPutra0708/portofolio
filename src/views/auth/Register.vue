<script setup>
import axios from 'axios'
</script>
<template>
  <!-- Section: Design Block -->
  <div class="text-center">
    <!-- Background image -->
    <div
      class="p-5 bg-image"
      style="
        background-image: url('https://mdbootstrap.com/img/new/textures/full/171.jpg');
        height: 300px;
      "
    ></div>
    <!-- Background image -->

    <div
      class="card mx-4 mx-md-5 shadow-5-strong"
      style="margin-top: -100px; background: hsla(0, 0%, 100%, 0.8); backdrop-filter: blur(30px)"
    >
      <div class="card-body py-5 px-md-5">
        <div class="row d-flex justify-content-center">
          <div class="col-lg-8">
            <h2 class="fw-bold mb-5">Sign up now</h2>
            <form @submit.prevent="saveData">
              <!-- 2 column grid layout with text inputs for the first and last names -->
              <div class="form-outline mb-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  class="form-control"
                  v-model="users.name"
                />
                <label class="form-label" for="form3Example1">Name</label>
              </div>

              <!-- Email input -->
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="email"
                  name="email"
                  class="form-control"
                  v-model="users.email"
                />
                <label class="form-label" for="form3Example3">Email address</label>
              </div>

              <!-- Password input -->
              <div class="form-outline mb-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  v-model="users.password"
                />
                <label class="form-label" for="form3Example4">Password</label>
              </div>

              <!-- Submit button -->
              <button type="submit" class="btn btn-primary btn-block mb-4">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Section: Design Block -->
</template>
<script>
export default {
  name: 'Registration',
  data() {
    return {
      result: {},
      users: {
        name: '',
        email: '',
        password: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    saveData() {
      axios.post('http://127.0.0.1:8000/api/register', this.users).then(({ data }) => {
        console.log(data)
        try {
          alert('Sukses')
        } catch (err) {
          alert('Gagal')
        }
      })
    }
  }
}
</script>
