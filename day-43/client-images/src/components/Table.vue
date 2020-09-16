<template>

  <v-card>
    <all-product-modal/>
    <v-card-title>
      All Product
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table :headers="headers" :items="desserts" :search="search">
      <template v-slot:item="row">
        <tr>
          <td>{{ row.item.id }}</td>
          <td>{{ row.item.name }}</td>
          <td>{{ row.item.photo_url }}</td>
          <td>{{ row.item.price }}</td>
          <td>{{ row.item.stock }}</td>
          <td>{{ row.item.supplier.full_name }}</td>
          <td>
            <v-icon @click="deleteProduct(row.item.id)" class="delete"
              >fa fa-trash</v-icon
            >
          </td>
        </tr>
      </template>
    </v-data-table>
  </v-card>
</template>
<style scoped>
.delete {
  color: #dc3435 !important;
  box-shadow: none;
}
</style>
<script>
import { mapState, mapActions } from "vuex";
import AllProductModal from "@/components/modal/AllProduct.vue";
export default {
  data() {
    return {
      search: "",
      headers: [
        {
          text: "Id",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Name", value: "name" },
        { text: "photo_url", value: "photo_url" },
        { text: "price", value: "price" },
        { text: "stock", value: "stock" },
        { text: "supplier", value: "supplier" },
        { text: "supplier", value: "dimar" },
      ],
    };
  },
  components:{
      AllProductModal
  },
  methods: {
    ...mapActions("Auth", ["getAllProduct", "deleteProduct"]),
  },
  computed: {
    desserts: function() {
      return this.allProduct.data;
    },
    ...mapState("Auth", ["allProduct"]),
    // ...mapState(["products"]),
  },
  created() {
    this.getAllProduct();
    this.desserts = this.allProduct.data;
    console.log(this.desserts);
  },
};
</script>
