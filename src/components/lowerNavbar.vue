<template>
  <nav class="navbar navbar-expand-lg sticky-top">
    <div class="container-fluid">
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
      >
        <i class="bi bi-list"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li  class="nav-item">
            <router-link to="/">
              <a class="nav-link">𝙷𝚘𝚖𝚎 </a>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/all">
              <a class="nav-link">𝙿𝚛𝚘𝚍𝚞𝚌𝚝𝚜 </a>
            </router-link>
          </li>
          <div v-if="admin">
            <li class="nav-item">
              <router-link to="/admin">
                <a class="nav-link"> 𝙰𝚍𝚖𝚒𝚗 </a>
              </router-link>
            </li>
          </div>
        </ul>
      </div>
    </div>
  </nav>
  <!-- <div class="container">
      <div class="card">
      <nav>
        <router-link to="/">
          <a>𝙷𝚘𝚖𝚎 </a>
        </router-link>
    
        <router-link to="/about">
            <a> 𝙰𝚋𝚘𝚞𝚝 </a>
        </router-link>
        
        <router-link to="/contact">
            <a>𝙲𝚘𝚗𝚝𝚊𝚌𝚝 𝚞𝚜 </a>
        </router-link>
        <router-link to="/all">
            <a>𝙿𝚛𝚘𝚍𝚞𝚌𝚝𝚜 </a>
        </router-link>    
        <router-link to="/admin">
            <a> 𝙰𝚍𝚖𝚒𝚗 </a>
        </router-link> -->
  <!-- <router-link :to="name='contact'">
            <a> contact </a>
        </router-link> -->
  <!-- </nav>
      </div>
    </div> -->
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.state.user;
    },
    admin() {
      return this.$store.state.admin;
    },
  },
  mounted() {
    this.$store.dispatch("check");
  },
};
</script>

<style scoped>
i{
  color:white;
  height:60px;
}
.container-fluid {
  /* margin-top:60px; */
  max-width: 100%;
  /* background-size: cover; */
  --bs-gutter-x: 0rem;
  /* position:fixed; */
  z-index: 1;
  overflow: hidden;
}
.navbar {
  background-color: black;
  height: 50px;
}

.navbar-nav {
background-color: black;
}

a {
  text-decoration: none;
  color: rgb(94, 93, 93);
  /* text-decoration-line:unset; */
  font-size: 20px;
  font-weight: bold;
  /* margin:auto; */
}
a:hover {
  color: rgb(210, 14, 70);
}
.card {
  height: 30px;
  max-width: 100%;
  background-size: cover;
  box-shadow: 0px 5px 25px var(--color-secondary);
  backdrop-filter: blur(5px);
  background-color: black;
  padding: 0px;
  border-radius: 0;
}
</style>
