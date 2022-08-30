<template>
  <div id="single">
    <div class="container p-3">
      <div v-if="prod">
        <div class="row">
          <div class="col-md-6">
            <img :src="prod.img" alt="" />
          </div>
          <div class="col-md-6 mx-auto text-center">
            <h2>{{ prod.title }}</h2>
          </div>
          <button @click="add" class="btn">add to cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  computed: {
    prod() {
      return this.$store.state.prod;
    },
  },
  mounted() {
    this.$store.dispatch("getProd", this.id);
  },
  methods: {
     add() {
      this.$store.dispatch("addToCart", {
        id: this.id,
      });
    },
  },
};
</script>

<style scoped>
</style>
