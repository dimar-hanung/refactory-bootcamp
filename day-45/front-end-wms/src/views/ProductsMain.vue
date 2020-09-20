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
      <select class="btn-lg" name="pagination" @input="changePage">
        <option selected disabled>Page {{$route.query.page}}</option>
        <option :value="index" v-for="index in products.data.totalPages" :key="index">Page {{index}}</option>
      </select>
    </div>
    <div
      class="product block sm:flex"
      v-for="(product, id) in products.data.data"
      :key="id"
    >
      <div v-if="showImage" class="img-box sm:mx-0 mx-auto">
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
import "@/assets/styles/product.css"
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
    changePage(e){
      const val = e.target.value
      const qroute = this.$route.query;
      if(!qroute.limit) qroute.limit = 5
      this.$router.push(`/products/main?limit=${qroute.limit}&page=${val}`)
      this.getProducts(this.$route.query);
    }
  },
  computed: {
    // ...mapState("Auth", ["products", "productsIn", "productsOut"]),
    ...mapState("Auth", ["products"]),
    ...mapState("Settings",["showImage"])
  },
  mounted() {
    // console.log(from)
    const qroute = this.$route.query;
      if(!qroute.limit) {
        qroute.limit = 5
        this.$router.push(`/products/main?limit=${qroute.limit}&page=${1}`)
        }
    this.getProducts(qroute);
    // this.getProductsIn();
    // this.getProductsOut();
  },
};
</script>

<style scoped>

</style>
