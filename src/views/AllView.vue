<template>
  <!-- <Lower/> -->
  <section id="products">
    <div v-if="prods">
      <div class="container pt-3">
        <div class="row p-3 m-3">
          <h2>𝙵𝚒𝚕𝚝𝚎𝚛𝚜 & 𝚂𝚘𝚛𝚝</h2>
          <div class="col-md-3">
            <label class="form-label"
              >𝚂𝚎𝚊𝚛𝚌𝚑 𝙱𝚢 𝙽𝚊𝚖𝚎:</label
            >
            <input id="search"
              v-model="search"
              type="text"
              class="form-control"
              placeholder="𝚂𝚘𝚛𝚝 𝙱𝚢 𝙽𝚊𝚖𝚎:"
            />
          </div>
          <div class="col-md-3">
            <label class="form-label"
              >𝚂𝚘𝚛𝚝 𝙱𝚢 𝙽𝚊𝚖𝚎 :</label
            >
            <select
              class="form-select"
              name="name"
              id="name"
              v-model="name"
              @change="sortName"
            >
              <option value="All" selected disabled>𝚂𝚘𝚛𝚝 𝙱𝚢 𝙽𝚊𝚖𝚎</option>
              <option value="asc">𝙰-𝚉</option>
              <option value="desc">𝚉-𝙰</option>
            </select>
          </div>

          <div class="col-md-3">
            <label class="form-label">𝚂𝚘𝚛𝚝 𝙱𝚢 𝙿𝚛𝚒𝚌𝚎:</label>
            <select
              class="form-select"
              name="price"
              id="price"
              @change="sortPrice"
              v-model="price"
            >
              <option value="All" selected disabled>𝚂𝚘𝚛𝚝 𝙱𝚢 𝙿𝚛𝚒𝚌𝚎</option>
              <option value="asc">𝙷𝚒𝚐𝚑𝚎𝚛 𝙿𝚛𝚒𝚌𝚎𝚜</option>
              <option value="desc">𝙻𝚘𝚠𝚎𝚛 𝙿𝚛𝚒𝚌𝚎𝚜</option>
            </select>
          </div>

          <div class="col-md-3">
            <label class="form-label">𝙵𝚒𝚕𝚝𝚎𝚛 𝙱𝚢 𝚃𝚢𝚙𝚎:</label>
            <select
              class="form-select"
              name="category"
              id="category"
              v-model="category"
            >
              <option value="All" selected disabled>𝙵𝚒𝚕𝚝𝚎𝚛 𝙱𝚢 𝚃𝚢𝚙𝚎</option>
              <option value="All">𝙰𝚕𝚕</option>
              <option value="rings">𝚁𝚒𝚗𝚐𝚜</option>
              <option value="piercings">𝙿𝚒𝚎𝚛𝚌𝚒𝚗𝚐𝚜</option>
              <option value="earrings">𝙴𝚊𝚛𝚛𝚒𝚗𝚐𝚜</option>
              <option value="necklace">𝙽𝚎𝚌𝚔𝚕𝚊𝚌𝚎𝚜</option>
              <option value="waistbands">𝚆𝚊𝚒𝚜𝚝𝚋𝚊𝚗𝚍𝚜</option>
            </select>
          </div>
        </div>

        <div class="cols">
          <div class="row mx-auto">
            <All v-for="prod in prods" :key="prod" :prod="prod" />
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
import All from "@/components/products.vue";
import Lower from "@/components/lowerNavbar.vue";
export default {
  components: {
    All,
    Lower,
    Loader
  },
  data() {
    return {
      search: "",
      price: "All",
      name: "All",
      // search: "",
      category: "All",
    };
  },
  computed: {
    // prods() {
    //   return this.$store.state.prods;
    // },
    prods() {
      return this.$store.state.prods?.filter((prod) => {
        let isMatch = true;
        if (!prod.title.toLowerCase().includes(this.search)) {
          isMatch = false;
        }
        if (this.category !== "All" && this.category !== prod.catergory) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  mounted() {
    this.$store.dispatch("getProds");
  },
  methods: {
    sortPrice() {
      let up = this.price;
      if (up === "asc") {
        this.$store.state.prods.sort((a, b) => {
          return a.price - b.price;
        });
      } else {
        this.$store.state.prods.sort((a, b) => {
          return b.price - a.price;
        });
      }
    },
    // sortName() {
    //   let up = this.name;
    //   if (up === "asc") {
    //     this.$store.state.prods.sort((a, b) => {
    //       a.title > b.title;
    //       return -1;
    //     });
    //   } else if (up === "desc") {
    //     this.$store.state.prods.sort((a, b) => {
    //       a.title < b.title;
    //       return -1;
    //     });
    //   }
    // },
    sortName() {
      let prods = this.$store.state.prods 
      prods.sort(function (a, b) {
        if (a.title < b.title) {
          return -1;
        }
        if (a.title > b.title) {
          return -1;
        }
        return 0;
      });

      // let up = this.price;
      // if (up === "asc") {
      //   this.$store.state.prods.sort((a, b) => {
      //     return a.price - b.price;
      //   });
      // } else {
      //   this.$store.state.prods.sort((a, b) => {
      //     return b.price - a.price;
      //   });
      // }
    },
  },
};
</script>

<style scoped>
#products {
  /* padding-top: 120px; */
  background-color: rgb(0, 0, 0);
  /* background-image: url("https://i.postimg.cc/prJ4kz5Z/53dd9d731f48f1f1acf0df8a57e07b45.jpg"); */
  /* background-image: url("https://i.postimg.cc/6p8rfFFR/transparent-background-gif-transparent-Favim-com-7255762.gif"); */
  background-attachment: fixed;
  background-size: cover;
  -moz-background-size: cover;
  -webkit-background-size: cover;
  background-repeat: no-repeat;
  padding-bottom: 20px;
  /* background-position: center; */
}
h2{
  color: rgb(94, 93, 93);
  /* font-family:monospace; */
  font-weight: bold
}
label{
  color: rgb(94, 93, 93);
}
input{
  width:260px
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
.cols {
  column-count: 4;
  /* column-gap: 15px; */
  --bs-gutter-x: 0px;
}

@media screen and (max-width: 1000px) {
  .cols {
    column-count: 3;
    /* column-gap:10px; */
  }
}
@media screen and (max-width: 575px) {
  .cols {
    column-count: 2;
    /* column-gap:10px; */
  }
}
@media screen and (max-width: 405px) {
  input{
    width:200px
  }
}
</style>
<!-- https://i.postimg.cc/R0y9THbj/butterfly-freedom.gif -->
