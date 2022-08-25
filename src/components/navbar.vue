<template>
  <nav>
    <router-link :to="name='/'">
      <a> home </a>
    </router-link>

    <router-link :to="name='about'">
        <a> about </a>
    </router-link>
    
    <router-link :to="name='contact'">
        <a> contact </a>
    </router-link>
    <router-link :to="name='all'">
        <a>Products </a>
    </router-link>
    <router-link :to="name='contact'">
        <a> contact </a>
    </router-link>
  </nav>
</template>
