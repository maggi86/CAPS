<template>
  <section id="login">
    <div class="container">
      <div class="row d-flex justify-content-center align-content-center">
        <form class="shadow p-3">
          <h2 class="p-3 text-center">Login Page</h2>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              v-model="email"
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
            <div id="emailHelp" class="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              v-model="password"
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
         
          <button type="button" @click="login" class="btn btn-primary">
            Submit
          </button>
        
          <div v-if="msg">
            {{msg}}
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    msg() {
      return this.$store.state.msg
    }
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
    },
  },
};
</script>

<style scoped>
form {
  /* padding-top: 70px; */
}
.row{
  height:400px;
  width:700px;
}
.container{
  padding-bottom:40px;
  padding-top:40px
}
</style>
