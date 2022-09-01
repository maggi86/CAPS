<template>
<Nav/>
<Lower/>
  <router-view/>
  <Footer/>
</template>

<script>
import Nav from "@/components/navbar.vue"
import Footer from "@/components/footer.vue"
import Lower from "@/components/lowerNavbar.vue"


export default{
  components:{
    Nav,
    Footer,
    Lower
  }
}
</script>
<style>
*{
  padding:0;
  margin:0;
}
Nav{
  position: fixed;
  /* margin-bottom:50px; */
}
/* Footer{
  width:100%
} */
</style>
