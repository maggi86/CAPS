<template>
  <div class="profile">
    <div class="container">
      <div v-if="user">
        <div class="row mx-auto justify-content-center">
          <img
            src="https://i.postimg.cc/j5FpNC5V/istockphoto-508704980-612x612-removebg-preview-1.png"
          />
          </div>
          <div class="row mx-auto text-center">
          <h2>{{ user.fname }}</h2>
        </div>
        <div class="row">
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione,
              minus id veniam laborum eaque porro autem reprehenderit at,
              possimus eum, numquam soluta animi nemo blanditiis molestias
              doloremque ea rem perferendis accusamus neque qui nobis omnis?
              Rerum debitis, enim adipisci impedit quis facilis ea! Suscipit
              eaque fuga nihil atque laboriosam, dolores consequuntur nobis
              facere voluptatem ex accusantium id? Minus hic omnis, maiores at
              reiciendis quae exercitationem quos adipisci placeat, ipsum quas
              doloribus qui? Tempore, eligendi sed? Fuga, repudiandae libero?
              Nisi laboriosam labore delectus aliquam, ea voluptas soluta, quia
              quaerat autem officiis cupiditate repudiandae numquam
              exercitationem nostrum doloribus, illum suscipit omnis
              dignissimos!
            </p>
          </div>
          <div class="col">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              totam reprehenderit consequatur et dolor, ullam cumque,
              dignissimos cum architecto quas corrupti neque nihil, placeat aut
              eos quasi quo velit voluptate deserunt itaque repellat. Tempore
              soluta fugiat autem aspernatur sequi obcaecati provident, dolor
              doloremque. Error deleniti alias quidem maxime ratione ipsum
              consequuntur provident accusamus incidunt? Fuga recusandae, quis
              officia architecto rem odio dolor laboriosam! Eaque magnam fuga
              maxime harum esse ipsam voluptatibus eveniet, laudantium eum
              accusamus repellendus dignissimos, molestiae tenetur pariatur
              cupiditate inventore animi quam quo cumque nisi hic ea doloribus?
              Obcaecati sint expedita non maxime explicabo qui quod distinctio
              modi!
            </p>
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
