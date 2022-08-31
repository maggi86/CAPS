<template>
  <div class="card mx-auto g-2 border-0">
  <div class="container">
    <div class="row">
      <router-link :to="{ name: 'single', params: { id: prod.id } }">
        <img :src="prod.img" class="img-fluid" alt="..." style="width:400px; height:auto;"/>
      </router-link>
    </div>
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
.card {
  width: 400px;
  height: 100%;
  padding-top:10px;
  background-color: var(--color-);
  /*
  border-width:0px; */

  /* width:300px;
  padding: 0;
    margin: 15px 10px;
    border-radius: 5px;
    background-color: red; */
}
.container {
/* background-color: pink; */

}
img {
 /* display:block; */
 /* width: 100%; */
}
</style>
