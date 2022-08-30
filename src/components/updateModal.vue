<template>
  <!-- Modal -->
  <div
    class="modal fade"
    :id="'update' + prod.id"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">{{ prod.title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Title :</label
              >
              <input v-model="prod.title" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Image URL</label>
              <input v-model="prod.img" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Category</label>
              <input v-model="prod.catergory" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Description</label>
              <input v-model="prod.description" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label">Price</label>
              <input v-model="prod.price" type="number" class="form-control" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" @click="update" class="btn btn-primary" data-bs-dismiss="modal">
            Update Product
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["prod"],
  methods: {
    update() {
      this.$store.dispatch("updateProd", this.prod);
    },
  },
};
</script>

<style scoped></style>
