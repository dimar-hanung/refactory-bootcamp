<template>
  <div class="list-box">
    <div class="flex margin-btn">
      <post-modal :inputVal="inputVal" body="form-data" postUrl="product/">
        <div slot="title">Add Product</div>
        <div slot="form-list">
          <m-input
            labelName="Product Name"
            type="text"
            v-on:input="inputVal.name = $event"
          />
          <m-input
            labelName="Stock"
            type="number"
            v-on:input="inputVal.stock = $event"
          />
          <m-input
            labelName="Price"
            type="number"
            v-on:input="inputVal.price = $event"
          />
          <m-input
            labelName="Product Name"
            type="file"
            v-on:input="inputVal.FILE = $event"
          />
        </div>
      </post-modal>
      <print-report getUrl="print?type=all">Print All</print-report>
    </div>
    <div class="product block sm:flex" v-for="(product, id) in products.data" :key="id">
      <div class="img-box sm:mx-0 mx-auto">
        <img :src="product.photo_url" :alt="product.photo_url" />
      </div>
      <div class="detail-box mx-auto">
        <div>
          {{ product.name | capitalize }}
        </div>
        <table>
          <tr>
            <td>Id Produk</td>
            <td>: {{ product.id }}</td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon
                :class="
                  `${
                    product.stock <= 5
                      ? 'text-red-600'
                      : product.stock <= 15
                      ? 'text-blue-600'
                      : 'text-green-600'
                  }`
                "
                :icon="['fas', 'cube']"
              />
              Stok
            </td>
            <td>: {{ product.stock }}</td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon
                class="text-yellow-600"
                :icon="['fas', 'tag']"
              />
              Price
            </td>
            <td>: {{ product.price | formatPrice }}</td>
          </tr>
          <tr>
            <td><font-awesome-icon :icon="['fas', 'user']" /> Supplier</td>
            <td>: {{ product.supplier.full_name }}</td>
          </tr>
        </table>

        <div class="flex margin-btn">
          <button @click="deleteProduct(product.id)" class="delete btn-lg">
            <font-awesome-icon :icon="['fas', 'trash']" /> Delete
          </button>
          <router-link :to="`edit/${product.id}`" class="delete btn-lg">
            <font-awesome-icon :icon="['fas', 'edit']" /> Edit
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import PostModal from "@/components/modal/PostModal.vue";
import MInput from "@/components/modal/MInput.vue";
import PrintReport from "@/components/PrintReport.vue";
export default {
  data() {
    return {
      inputVal: {},
    };
  },
  components: {
    PostModal,
    MInput,
    PrintReport,
  },
  methods: {
    // ...mapActions("Auth", ["getProducts", "getProductsIn", "getProductsOut"]),
    ...mapActions("Auth", ["getProducts", "deleteProduct"]),
  },
  computed: {
    // ...mapState("Auth", ["products", "productsIn", "productsOut"]),
    ...mapState("Auth", ["products"]),
  },
  mounted() {
    // console.log(from)
    this.getProducts();
    // this.getProductsIn();
    // this.getProductsOut();
  },
};
</script>

<style scoped>
.product {
  @apply py-2 px-3 my-2 border-b border-green-300 bg-green-100;
}
.img-box {
  @apply grid;
  place-items: center;
  width: 150px;
}
.img-box img {
  max-height: 150px;
  max-width: 150px;
  border-radius: 5px;
  transition: all ease .5s;
}
.img-box:hover img{
  transition-delay: 1s;
  transform:scale(2)
}
.detail-box {
  margin-left: 20px;
  max-height: 100%;
}
</style>
