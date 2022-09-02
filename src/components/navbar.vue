<template>
  <div class="container">
    <div class="row">
      <div class="col my-auto ms-4">
<router-link to="/login">
        <a><i class="bi bi-person"></i>𝙻𝚘𝚐𝚒𝚗 </a>
      </router-link>
      </div>
      <div class="col lead text-center me-5">
<img src="https://i.postimg.cc/Y94tKXzc/Screenshot-2022-08-25-114500-3-removebg-preview.png">
      </div>
      <div class="col my-auto lead text-end">
        <!-- <router-link to="/wishlist">
        <a><i class="bi bi-heart m-1"></i>𝚆𝚒𝚜𝚑  𝙻𝚒𝚜𝚝</a>
      </router-link> -->
  <router-link to="/cart">
        <a class="mx-3"><i class="bi bi-cart2 m-1"></i>𝙲𝚊𝚛𝚝</a>
      </router-link>  
      </div>
      
  
      <!-- <button class="btn" @click="logout">
        logout
      </button> -->
      <!-- <router-link :to="name='contact'">
          <a> contact </a>
      </router-link> -->
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
    /* height:100px; */
    max-width:100%;
    background-color:rgba(121, 121, 121, 0.082);
    background-size: cover;
    --bs-gutter-x:0rem;
    position:fixed;
    z-index:1;
    overflow:hidden;
    /* margin-left:20px */
  }
  a{
    text-decoration: none;
    color:rgb(94, 93, 93);
    /* text-decoration-line:unset; */
    font-size:23px;
    font-weight: bold;
    margin:auto;
  }
  img{
    padding-top:10px;
    height:70px;
    width:230px;
  }
  .right{
    display:flex;
    justify-content:flex-end;
  }
  .row{
    height:60px;
    max-width:100%;
    background-size: cover;
    box-shadow: 0px 5px 25px var(--color-secondary);
    backdrop-filter: blur(5px);
    background-color: var(--color-);
    padding:0px;
    border-radius:0;
  }
  </style>
