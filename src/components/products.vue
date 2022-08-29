<template>
  <!-- <div class="container"> -->
  <div class="card p-3 m-3 mx-auto">
    <router-link :to="{ name: 'single', params: { id: prod.id } }">
      <img :src="prod.img" class="card-img-top" alt="..." />
    </router-link>
  </div>
  <!-- </div> -->
</template>

<script>
export default {
  props: ["prod"],
};
</script>

<style scoped>
.card {
  height: 400px;
  width: 300px;
}
.container {
  background-color: pink;
}
</style>
