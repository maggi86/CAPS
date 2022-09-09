<template>
  <div id="single">
    <div class="container p-3">
      <div v-if="prod">
        <div class="row">
          <div class="col mx-auto text-center">
            <figure>
            <img :src="prod.img"/>
          </figure>
          </div>
          <div class="col my-lg-5 mx-auto text-center">
            <h1>{{ prod.title}}</h1>
            <div>
              <p>{{prod.description}}</p>
              <p>{{prod.catergory}}</p>
              <p>R{{prod.price}}.00</p>
              <button @click="add" class="btn">add to cart</button>
              <div v-if="msg">
              {{msg}}</div>
            </div>
          </div>
        </div>
      </div>
      <div v-else>
        <Loader/>
      </div>
    </div>
  </div>
  
</template>

<script>
  import Loader from "@/components/load.vue"
export default{
  components:{
    Loader
  },
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
    this.$store.commit("setProd", null)
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
    padding-top:40px;
    height:100vh;
    padding-bottom:830px
  }
  h1{
    font-size:40px;
    font-weight:bold;
    font-family: monospace;
    color:rgb(210, 14, 70);
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
    padding-bottom:5px;
  }
  .col figure{
    position: absolute;
    /* width: 0%; */
    float:left;
    animation: 2s slide ease-in-out;
  }
  @keyframes slide {
    from {
    transform: translateX(300%);
  }
  to {
    transform: translateX(0%);
  }
  }
  @media screen and (max-width:576px){
    img{
      margin-left:5px;
    width:280px
  }
  }
</style>
