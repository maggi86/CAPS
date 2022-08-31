<template>
<div class="container">
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
    <router-link to="/login">
        <a>𝙻𝚘𝚐𝚒𝚗  </a>
    </router-link>
    
    <router-link to="/register">
        <a>𝚂𝚒𝚐𝚗-𝚄𝚙  𝚁𝚎𝚐𝚒𝚜𝚝𝚎𝚛</a>
    </router-link>
    
    <router-link to="/admin">
        <a> 𝙰𝚍𝚖𝚒𝚗 </a>
    </router-link>

<router-link to="/cart">
        <a>𝙲𝚊𝚛𝚝</a>
    </router-link>

    <button class="btn" @click="logout">
      logout
    </button>
    <!-- <router-link :to="name='contact'">
        <a> contact </a>
    </router-link> -->
  </nav>
  </div>
</div>
</template>

<script>
export default {
  methods: {
    logout() {
      this.$store.state.token  = null
      this.$store.state.user  = null
      this.$store.state.cart  = null
      localStorage.clear()
    }
  },
}
</script>

<style scoped>
.container{
  height:50px;
  max-width:100%;
  background-image:url("");
  background-size: cover;
  --bs-gutter-x:0rem;
  position:fixed;
  z-index:1;
  
}
a{
  text-decoration: none;
  color:black;
  font-size:18px;
  font-weight: bold;
  margin:auto;
}
.card{
  height:50px;
  max-width:100%;
  background-size: cover;
  box-shadow: 0px 5px 25px var(--color-secondary);
  backdrop-filter: blur(5px);
  background-color: var(--color-);
  padding:0px;
  border-radius:0;
}
</style>
