<script setup>
import axios from 'axios'
</script>
<template>
  <section class="vh-100" style="background-color: #508bfc">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Sign in</h3>
              <form @submit.prevent="loginData">
                <div class="form-outline mb-4">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    class="form-control form-control-lg"
                    v-model="users.email"
                  />
                  <label class="form-label" for="typeEmailX-2">Email</label>
                </div>

                <div class="form-outline mb-4">
                  <input
                    type="password"
                    id="password"
                    name="email"
                    class="form-control form-control-lg"
                    v-model="users.password"
                  />
                  <label class="form-label" for="typePasswordX-2">Password</label>
                </div>

                <button class="btn btn-primary btn-lg btn-block" type="submit">Login</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      result: {},
      users: {
        email: '',
        password: ''
      }
    }
  },
  created() {},
  mounted() {},
  methods: {
    loginData() {
      axios.post('http://127.0.0.1:8000/api/login', this.users).then(({ data }) => {
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
