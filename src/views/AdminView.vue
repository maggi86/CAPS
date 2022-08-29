<template>
  <div id="admin">
    <div class="container text-center p-5">
      <h2 class="text-center">Products Table</h2>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#id</th>
            <th scope="col">title</th>
            <th scope="col">Category</th>
            <th scope="col">Price</th>
            <th scope="col"> <a class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <i class="fa-regular fa-square-plus"></i>
            </a>
                </th>
          </tr>
        </thead>
        <tbody v-if="prods">
          <tr v-for="prod in prods" :key="prod.id">
            <td>{{ prod.id }}</td>
            <td>{{ prod.title }}</td>
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

<style scoped></style>
