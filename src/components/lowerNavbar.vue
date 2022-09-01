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
        <router-link to="/admin">
            <a> 𝙰𝚍𝚖𝚒𝚗 </a>
        </router-link>
        <!-- <router-link :to="name='contact'">
            <a> contact </a>
        </router-link> -->
      </nav>
      </div>
    </div>
    </template>
    
    <style scoped>
    .container{
      margin-top:60px;
      max-width:100%;
      background-color:black;
      background-size: cover;
      --bs-gutter-x:0rem;
      position:fixed;
      z-index:1;
      overflow:hidden
    }
    a{
      text-decoration: none;
      color:rgb(94, 93, 93);
      /* text-decoration-line:unset; */
      font-size:20px;
      font-weight: bold;
      margin:auto;
    }
    .card{
      height:30px;
      max-width:100%;
      background-size: cover;
      box-shadow: 0px 5px 25px var(--color-secondary);
      backdrop-filter: blur(5px);
      background-color: var(--color-);
      padding:0px;
      border-radius:0;
    }
    </style>