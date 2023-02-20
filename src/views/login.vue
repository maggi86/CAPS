<template>
  <section id="login">
    <div class="container">
      <div class="shadow p-3">
        <div class="row mx-auto justify-content-center align-content-center">

          <h2 class="p-3 text-center">𝙻𝚘𝚐𝚒𝚗 𝙿𝚊𝚐𝚎</h2>
          <form @submit.prevent="login">
            <div class="mb-3">
              <label class="form-label">𝙴𝚖𝚊𝚒𝚕 𝙰𝚍𝚍𝚛𝚎𝚜𝚜</label>
              <input v-model="email" type="email" class="form-control" />
              <div class="form-text">
                𝚆𝚎'𝚕𝚕 𝚗𝚎𝚟𝚎𝚛 𝚜𝚑𝚊𝚛𝚎 𝚢𝚘𝚞𝚛 𝚎𝚖𝚊𝚒𝚕 𝚠𝚒𝚝𝚑 𝚊𝚗𝚢𝚘𝚗𝚎 𝚎𝚕𝚜𝚎.
              </div>
            </div>
            <div class="mb-3">
              <label class="form-label">𝙿𝚊𝚜𝚜𝚠𝚘𝚛𝚍</label>
              <input v-model="password" type="password" class="form-control" />
            </div>
            <div class="text">
              <router-link to="/register">
                <span>𝙳𝚘𝚗𝚝 𝚑𝚊𝚟𝚎 𝚊𝚗 𝚊𝚌𝚌𝚘𝚞𝚗𝚝?
                  𝚂𝚒𝚐𝚗-𝚞𝚙 𝚑𝚎𝚛𝚎</span>
              </router-link>
            </div>
            <div v-if="msg">
              {{ msg }}
            </div>

            <div class="row mx-auto mt-5 justify-content-center">
              <button type="submit" class="btn">
                𝚂𝚞𝚋𝚖𝚒𝚝
              </button>

            </div>
          </form>
        </div>
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
#login {
  height: 80vh
}

form {
  margin-top: 60px;
  /* width:600px; */
  /* height:500px */
  margin-bottom: 40px;
}

label,
.btn,
h2 {
  font-weight: bold
}

.btn {
  background-color: gray;
  color: white;
  width: 200px;
  height: 40px;
  padding-bottom: 20px;
}

.btn:hover {
  background-color: var(--color-);
  color: black;
}

.container {
  padding-bottom: 40px;
  padding-top: 40px
}

a {
  text-decoration: none;
  color: #6c757d;
}

.text {
  padding-bottom: 10px;
}

@media screen and (max-width:767px) {
  .row {
    width: 500px
  }
}

@media screen and (max-width:690px) {
  .row {
    width: 390px
  }
}

@media screen and (max-width:430px) {
  .row {
    width: 280px
  }
}
</style>
