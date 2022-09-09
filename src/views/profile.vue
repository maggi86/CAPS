<template>
  <div class="profile">
    <div class="container">
      <div v-if="user">
        <div class="row mx-auto justify-content-center">
          <img :src="user.profile" class="user" alt="..."/>
          </div>
          <!-- https://i.postimg.cc/pd0mPrhg/alp-ancel-WKQt-X-SKFI-unsplash.jpg -->
          <div class="row mx-auto text-center">
          <h2>{{ user.fname }}</h2>
        </div>
            <form class="my-auto">
              <h2 class="text-center">𝙼𝚢 𝙳𝚎𝚝𝚊𝚒𝚕𝚜</h2>

              <p class="text-center">
                <button
                  class="btn mt-5"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseExample"
                  aria-expanded="false"
                >
                𝙴𝚍𝚒𝚝 𝚈𝚘𝚞𝚛 𝙸𝚗𝚏𝚘𝚛𝚖𝚊𝚝𝚒𝚘𝚗
                </button>
              </p>

              <div class="collapse" id="collapseExample">
                <div class="card border-0 card-body">
                  <div class="mb-3">
                    <label for="firstname" class="form-label"
                      >𝙵𝚞𝚕𝚕𝚗𝚊𝚖𝚎 :</label
                    >
                    <input
                      v-model="user.fname"
                      type="text"
                      class="form-control"
                      placeholder="𝙴𝚗𝚝𝚎𝚛 𝚈𝚘𝚞𝚛 𝙵𝚞𝚕𝚕𝚗𝚊𝚖𝚎"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="surname" class="form-label"
                      >𝙿𝚛𝚘𝚏𝚒𝚕𝚎 𝚄𝚁𝙻 :</label
                    >
                    <input
                      v-model="user.profile"
                      type="text"
                      class="form-control"
                      placeholder="𝙴𝚗𝚝𝚎𝚛 𝙸𝚖𝚊𝚐𝚎 𝚄𝚁𝙻"
                      required
                    />
                  </div>

                  <div class="mb-3">
                    <label for="email" class="form-label"
                      >𝙴𝚗𝚝𝚎𝚛 𝙴𝚖𝚊𝚒𝚕 𝙰𝚍𝚍𝚛𝚎𝚜𝚜 :</label
                    >
                    <input
                      v-model="user.email"
                      type="email"
                      class="form-control"
                      placeholder="𝙴𝚗𝚝𝚎𝚛 𝚈𝚘𝚞𝚛 𝙴𝚖𝚊𝚒𝚕 𝙰𝚍𝚍𝚛𝚎𝚜𝚜"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    class="btn m-3"
                    @click="this.$store.dispatch('editUser', user)"
                  >
                  𝚄𝚙𝚍𝚊𝚝𝚎 𝚄𝚜𝚎𝚛
                  </button>

                  <button
                    type="button"
                    class="btn"
                    @click="this.$store.dispatch('deleteUser', user.id)"
                  >
                  𝙳𝚎𝚕𝚎𝚝𝚎 𝙰𝚌𝚌𝚘𝚞𝚗𝚝
                  </button>
                </div>
              </div>
            </form>
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
  computed: {
    user() {
      return this.$store.state.user;
    },
  },
};
</script>

<style scoped>
img {
  height: 300px;
  width: 320px;
  aspect-ratio: 1;
}
</style>
