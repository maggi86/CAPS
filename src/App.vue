<template>
  <Nav />
  <Lower />
  <router-view />
  <Footer />
</template>

<script>
import Nav from "@/components/navbar.vue";
import Lower from "@/components/lowerNavbar.vue";
import Footer from "@/components/footer.vue";

export default {
  components: {
    Nav,
    Footer,
    Lower,
  },
};
</script>
<style>
* {
  padding: 0;
  margin: 0;
}
Nav {
  position: fixed;
  /* margin-bottom:50px; */
}
Footer{
  position: relative;
  margin-bottom: 0px;
}
@media screen and (max-width:573px){
  footer{
    width:100%
  }
}
</style>
