<template>
  <div id="single">
    <div class="container p-3">
      <div v-if="prod">
        <div class="row">
          <div class="col-md-6">
            <img :src="prod.img" alt="" style="width:500px; height:auto; padding-top:0px;"/>
          </div>
          <div class="col-md-6 my-auto mx-auto text-center">
            <h1>{{ prod.title}}</h1>
            <div>
              <p>{{prod.description}}</p>
              <p>{{prod.catergory}}</p>
              <p>{{prod.price}}</p>
            </div>
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
  #single{
    padding-top:100px
  }
  h1{
    font-size:40px;
    font-weight:bold;
    font-family: monospace;
  }
  p{
    font-size:20px;
    font-weight:bold;
    font-family: monospace;
  }
</style>
