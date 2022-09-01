<template>
<Lower/>
<section id="products">
    <div v-if="prods">
        <div class="container pt-3">
            <div class="row mx-auto">
                <All v-for="prod in prods" :key="prod" :prod="prod"/>
            </div>
        </div>
    </div>    
</section>
</template>

<script>
import All from "@/components/products.vue"
import Lower from "@/components/lowerNavbar.vue"
export default{
    components:{
        All,
        Lower
    },
    computed:{
      prods() {
        return this.$store.state.prods
      }  
    },
    mounted(){
        this.$store.dispatch("getProds")
    },
}
</script>

<style scoped>
    #products{
        padding-top:120px;
        background-color:rgb(0, 0, 0);
        /* background-image: url("https://i.postimg.cc/prJ4kz5Z/53dd9d731f48f1f1acf0df8a57e07b45.jpg"); */
        background-image: url("https://i.postimg.cc/k45Qxd4M/aesthetic-stars-gif-png-largest-wallpaper-portal.gif");
        background-attachment: fixed;
        background-size: cover;
        -moz-background-size: cover;
        -webkit-background-size: cover;
        background-repeat: no-repeat;
        padding-bottom:20px;
        /* background-position: center; */
    }
    /* .container{
    margin: 0;
    padding: 0;
    width: 80vw;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    display: grid;
    grid-template-columns: repeat(auto-fill, width(300px));
    grid-auto-rows: 10px;
    justify-content: center;

    background-color: black;
} */
.container {
 column-count: 4;
 /* column-gap: 15px; */
 --bs-gutter-x:0px;
}
.row {
    /* display:flex;
flex-wrap:wrap;
 max-width: 100%; */
}
@media screen and (max-width:1000px){
.container{
    column-count:3;
    /* column-gap:10px; */
}
}
@media screen and (max-width:575px){
.container{
    column-count:2;
    /* column-gap:10px; */
}
}
</style>
<!-- https://i.postimg.cc/R0y9THbj/butterfly-freedom.gif -->