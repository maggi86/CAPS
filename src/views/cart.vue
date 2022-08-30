<template>
  <section id="cart">
    <div v-if="cart">
      <div class="container">
        <div class="row">
          <div class="card" v-for="item in cart" :key="item">
            <div class="col-md-4">
              <!-- img -->
              <img :src="item.img" class="img-fluid" alt="">
            </div>
            <div class="col-md-4">
              <!-- namw -->
              <p>{{item.title}}</p>
              <!-- description -->
              <p>{{item.description}}</p>
            </div>
            <div class="col-md-4">
              <!-- price -->
              {{item.price}}
              <!-- quantitiy -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
        <h2>Loading ...</h2>
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
  mounted() {
    this.$store.dispatch("getCart");
  },
};
</script>

<style scoped>
#cart {
  min-height: 100vh;
}
</style>
