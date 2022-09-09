<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="checkout"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Checkout</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
            <!-- <div class="card mx-auto m-3 p-3 shadow"> -->
                <p class="m-1">
                    <span class="fw-bolder">Total:</span>(
                    <span>{{ num }} item</span> ) <span>R{{ total }}.00</span>
                  </p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn" data-bs-dismiss="modal">Proceed</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
};
</script>

<style scoped>
    h5{
        color:rgb(210, 14, 70);
        font-weight:bold;
    }
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
