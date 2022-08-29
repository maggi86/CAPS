<template>
    <section id="products">
    <div v-if="prods">
        <div class="container p-3">
            <div class="row mx-auto">
                <All v-for="prod in prods" :key="prod" :prod="prod"/>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import All from "@/components/products.vue"
export default{
    components:{
        All
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
