<template>
  <div class="column mx-auto border-0" style="width: 300px; height:fit-content;">
  <div class="container">
    <!-- <div class="row"> -->
      <router-link :to="{ name: 'single', params: { id: prod.id } }">
        <img :src="prod.img" class="img-fluid" alt="..."/>
      </router-link>
    <!-- </div> -->
  </div> 
  </div>
</template>

<script>
export default {
  props: ["prod"],
};
</script>

<style scoped>
  /* :root {
    --card_width: 250px;
    --row_increment: 10px;
    --card_border_radius: 16px;
    --card_small: 26;
    --card_med: 33;
    --card_large: 45;
} */
.column {
  /* height: 100%; */
  /* height:min-content; */
  padding-top:10px;
  background-color: var(--color-);
  -webkit-filter: grayscale(1);
  filter:grayscale(1);
  /*
  border-width:0px; */

  /* width:300px;
  padding: 0;
    margin: 15px 10px;
    border-radius: 5px;
    background-color: red; */
}
.column:hover{
  -webkit-filter: grayscale(0); 
  filter: brightness(1);
}
/* .container {
background-color: pink;

} */
/* .card:hover{

} */
img {
 /* display:block; */
 /* width: 100%; */
 width: 400px;
 border-radius:10px;
 box-shadow: 0px 5px 10px black;

}
@media screen and (max-width:450px){
  img{
    width:300px;
  }
}
</style>
