<template>
  <div id="single">
    <div class="container p-3">
      <div v-if="prod">
        <div class="row">
          <div class="col mx-auto text-center">
            <img :src="prod.img"/>
          </div>
          <div class="col my-auto mx-auto text-center">
            <h1>{{ prod.title}}</h1>
            <div>
              <p>{{prod.description}}</p>
              <p>{{prod.catergory}}</p>
              <p>{{prod.price}}</p>
              <button @click="add" class="btn">add to cart</button>
              <div v-if="msg">
                {{msg}}
              </div>
            </div>
          </div>
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

    msg() {
      return this.$store.state.msg;
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
  button{
    margin-top:30px;
    width:100%;
    border-width:1px;
    border-color:black
  }
  button:hover{
    background-color:black;
    color:white
  }
  img{
    width:500px; 
    height:auto; 
    padding-top:0px;
  }
  @media screen and (max-width:576px){
    img{
    width:300px
  }
  }
</style>
