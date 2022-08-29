<template>
  <form>
    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Name :</label>
      <input v-model="fname" type="text" class="form-control" />
    </div>

    <div class="mb-3">
      <label for="exampleInputEmail1" class="form-label">Email address</label>
      <input v-model="email" type="email" class="form-control" />
    </div>

    <div class="mb-3">
      <label for="exampleInputPassword1" class="form-label">Password</label>
      <input v-model="password" type="password" class="form-control" />
    </div>

    <button type="button" @click="register" class="btn btn-primary">Submit</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      fname: "",
      email: "",
      password: "",
    };
  },
  methods: {
    register() {
      const payload = {
        fname: this.fname,
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("register", payload);
    },
  },
};
</script>

<style scoped></style>
