<template>
<Nav/>
  <router-view/>
  <Footer/>
</template>

<script>
import Nav from "@/components/navbar.vue"
import Footer from "@/components/footer.vue"

export default{
  components:{
    Nav,
    Footer
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
Footer{
  background-color:var(--color-)
}
</style>
