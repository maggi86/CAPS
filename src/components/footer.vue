<template>
  <footer>
    <p class="lead text-center">Copyright &copy;2022<img class="img-fluid" src="https://i.postimg.cc/Y94tKXzc/Screenshot-2022-08-25-114500-3-removebg-preview.png" style="height:2em; width:7em;"></p>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
footer{
  width:100%;
    padding-top:7px;
    margin-bottom:0px;
    /* padding-bottom:10px; */
    height:50px;
    background-color:rgba(174, 174, 174, 0.778);
    /* box-shadow:5px rgb(148, 148, 148); */
}
p{
  margin-bottom:0px;
}
@media screen and (max-width:570px){
  footer{
    max-width:100%
  }
}
</style>