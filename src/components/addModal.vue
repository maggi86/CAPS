<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">𝙰𝚍𝚍 𝙿𝚛𝚘𝚍𝚞𝚌𝚝</h5>
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
                ><span>𝚃</span>𝚒𝚝𝚕𝚎 :</label
              >
              <input v-model="title" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label"><span>𝙸</span>𝚖𝚊𝚐𝚎 𝚄𝚁𝙻</label>
              <input v-model="img" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label"><span>𝙲</span>𝚊𝚝𝚎𝚐𝚘𝚛𝚢</label>
              <input v-model="category" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label"><span>𝙳</span>𝚎𝚜𝚌𝚛𝚒𝚙𝚝𝚒𝚘𝚗</label>
              <input v-model="description" type="text" class="form-control" />
            </div>

            <div class="mb-3">
              <label class="form-label"><span>𝙿</span>𝚛𝚒𝚌𝚎</label>
              <input v-model="price" type="number" class="form-control" />
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn"
            data-bs-dismiss="modal"
          >
          𝙲𝚕𝚘𝚜𝚎
          </button>
          <button type="button" @click="addProd" class="btn" data-bs-dismiss="modal">
            𝙰𝚍𝚍 𝙿𝚛𝚘𝚍𝚞𝚌𝚝
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  data() {
    return {
      title: "",
      img: "https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg",
      category: "",
      description: "",
      price: 0,
    };
  },
  methods: {
    addProd() {
      const payload = {
        title: this.title,
        img: this.img,
        catergory: this.category,
        description: this.description,
        price: this.price,
      };
      this.$store.dispatch("addProd", payload);
    },
  },
};
</script>

<style scoped>
  h5{
    color:rgb(210, 14, 70);
    font-weight:bold;
  }
  label{
    font-weight:bold
  }
  span{
    color:rgb(210, 14, 70);
    font-size:20px;
  }

</style>
