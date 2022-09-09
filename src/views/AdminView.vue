<template>
  <div id="admin">
    <div class="container text-center ">
      <h2 class="text-center">𝙿𝚛𝚘𝚍𝚞𝚌𝚝 𝚃𝚊𝚋𝚕𝚎</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#𝙸𝚍</th>
            <th scope="col" id="image">𝙸𝚖𝚊𝚐𝚎</th>
            <th scope="col">𝚃𝚒𝚝𝚕𝚎 </th>
            <th scope="col">𝙲𝚊𝚝𝚎𝚐𝚘𝚛𝚢</th>
            <th scope="col">𝙿𝚛𝚒𝚌𝚎</th>
            <th scope="col"> <a class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-regular fa-square-plus"></i>
            </a>
                </th>
          </tr>
        </thead>
        <tbody v-if="prods">
          <tr v-for="prod in prods" :key="prod.id">
            <td>{{ prod.id }}</td>
            <td id="image"><img :src="prod.img" class="img-fluid" alt="..."/></td>
            <td>{{ prod.title}}</td>
            <td>{{ prod.catergory }}</td>
            <td>R{{ prod.price }}.00</td>
            <td>
              <a  class="btn"  data-bs-toggle="modal" :data-bs-target="'#update'+prod.id">
                <i class="fa-solid fa-pen-to-square"></i>
                </a>

              <a class="btn" @click="this.$store.dispatch('deleteProd', prod.id)"><i class="fa-solid fa-trash-can"></i></a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- modals -->
  <div v-if="prods">
 <AddModal />

 <div v-for="prod in prods" :key="prod">
 <UpdateModal :prod="prod"/>
 </div>
  </div>
</template>

<script>
import AddModal from '@/components/addModal.vue';
import UpdateModal from '@/components/updateModal.vue';
export default {
    computed: {
        prods() {
            return this.$store.state.prods;
        },
    },
    mounted() {
        this.$store.dispatch("getProds");
    },
    components: { AddModal, UpdateModal }
};
</script>

<style scoped>
  #admin{
    padding-top:50px;
  }

  img{
    width:150px;
  }
  @media screen and (max-width:495px){
    #image{
      font-size:0px;
      height:0px;
      width:0px;
    }
  } 
  @media screen and (max-width:450px){
    th{
      font-size:10px;
    }
    td{
      font-size:8px;
    }
  }
</style>
