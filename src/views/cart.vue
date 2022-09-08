<template>
  <section id="cart">
    <div v-if="cart">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
            <div class="card m-3" v-for="item in cart" :key="item">
              <div class="row">
                <div class="col-md-4">
                  <img :src="item.img" class="img-fluid" alt="" />
                </div>
                <div class="col-md-4">
                  <p>{{ item.title }}</p>
                  <p>{{ item.description }}</p>
                </div>
                <div class="col-md-4">
                  <p>{{ item.price }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="row">
              <div class="col">
                <div class="card mx-auto m-3 p-3 shadow">
                  <h2><span>Cart Summary</span></h2>
                  <div
                    v-for="item in cart"
                    :key="item"
                    :item="item"
                    class="row"
                  >
                    <div class="col-md-6">
                      <p>
                        <span>{{ item.title }}</span>
                      </p>
                    </div>
                    <div class="col-md-4">
                      <p>
                        <span>R{{ item.price }}.00</span>
                      </p>
                    </div>
                    <div class="col-md-2 mx-auto">
                      
                      <a
                        class="btn"
                        @click="this.$store.dispatch('deleteItem', item.itemid)"
                        ><i class="fa-solid fa-trash-can"></i
                      ></a>
                    </div>
                    
                    <hr />
                  </div>
                  <button
              class="btn"
              @click="this.$store.dispatch('deleteCart')"
            >
              Clear Cart
            </button>
                  <p class="m-1">
                    <span class="fw-bolder">Total:</span>(
                    <span>{{ num }} item</span> ) <span>R{{ total }}.00</span>
                  </p>
                  <button
                    class="btn"
                    type="button"
                    data-bs-toggle="modal"
                    data-bs-target="#checkout"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <Loader/>
    </div>
  </section>
</template>

<script>
  import Loader from "@/components/load.vue"
export default{
  components:{
    Loader
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      let prices = this.$store.state.cart;
      let sum = prices.reduce((x, cart) => {
        return x + cart.price;
      }, 0);
      return sum;
    },
    num: function () {
      let Cnum = this.$store.state.cart;
      if (Cnum === null || Cnum === undefined) {
        Cnum = 0;
        return Cnum;
      } else {
        let i = Cnum.length;
        return i;
      }
    },
  },
  mounted() {
    this.$store.dispatch("getCart");
  },
};
</script>

<style scoped>
#cart {
  /* padding-top: 170px; */
  min-height: 100vh;
}

.card {
  min-width: fit-content;
}

/* i{
  color:rgb(4, 4, 4)
} */
.btn{
  background-color:rgb(255, 255, 255);
  border-color:rgb(210, 14, 70);
  font-weight:bold;
  color:rgb(210, 14, 70);
}
.btn:hover{
  background-color:rgb(210, 14, 70);
  color:white;
}
</style>
