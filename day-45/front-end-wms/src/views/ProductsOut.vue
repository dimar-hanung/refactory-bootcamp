<template>
  <div class="list-box">
    <div class="flex margin-btn">
      <post-modal v-bind:inputVal="inputVal" body="raw" postUrl="out/">
        <div slot="title">Add Product Out</div>
        <div slot="form-list">
          <m-input
            labelName="Product Name"
            type="number"
            v-on:input="inputVal.product_id = $event"
          />
          <m-input
            labelName="Stock"
            type="number"
            v-on:input="inputVal.total = $event"
          />
        </div>
      </post-modal>
      <print-report getUrl="print?type=out">Print Out</print-report>
      <select class="btn-lg" name="pagination" @input="changePage">
        <option selected disabled>Page {{$route.query.page}}</option>
        <option :value="index" v-for="index in productsOut.totalPages" :key="index">Page {{index}}</option>
      </select>
    </div>
    <div
      class="product block sm:flex"
      v-for="(product, id) in productsOut.data"
      :key="id"
    >
      <div v-if="showImage" class="img-box sm:mx-0 mx-auto">
        <img
          :src="product.Product.photo_url"
          :alt="product.Product.photo_url"
        />
      </div>
      <div class="detail-box">
        
        <table>
          <tr>
            <td>Id Produk</td>
            <td>: {{ product.Product.id }}</td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon
                :class="
                  `${
                    product.total <= 5
                      ? 'text-red-600'
                      : product.stock <= 15
                      ? 'text-blue-600'
                      : 'text-green-600'
                  }`
                "
                :icon="['fas', 'cube']"
              />
              Total
            </td>
            <td>: {{ product.total }}</td>
          </tr>
          <tr>
            <td>
              <font-awesome-icon
                :icon="['fas', 'calendar']"
              />
              Date
            </td>
            <td>: {{ product.date }}</td>
          </tr>
          <tr>
            <td><font-awesome-icon :icon="['fas', 'user']" /> Supplier</td>
            <td>: {{ product.Product.supplier.full_name }}</td>
          </tr>
        </table>
        <button @click="deleteProductOut(product.id)" class="btn-lg"><font-awesome-icon :icon="['fas', 'trash']" /> Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import postModal from "@/components/modal/PostModal.vue";
import MInput from "@/components/modal/MInput.vue";
import PrintReport from "@/components/PrintReport.vue";
import "@/assets/styles/product.css"
export default {
  components: {
    postModal,
    MInput,
    PrintReport
  },
  data() {
    return {
      inputVal: {}
    }
  },
  methods: {
    ...mapActions("Auth", ["getProductsOut","deleteProductOut"]),
     changePage(e){
      const val = e.target.value
      const qroute = this.$route.query;
      if(!qroute.limit) qroute.limit = 5
      this.$router.push(`/products/out?limit=${qroute.limit}&page=${val}`)
      this.getProductsOut(this.$route.query);
    }
  },
  computed: {
    ...mapState("Auth", ["productsOut"]),
    ...mapState("Settings",["showImage"])
  },
  mounted() {
    // console.log(from)
    this.getProductsOut(this.$route.query);
  },
};
</script>

<style scoped>

</style>
