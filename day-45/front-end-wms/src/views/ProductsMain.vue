<template>
  <div class="list-box">
    <div class="flex">
      <print-report getUrl="print?type=all">Print All</print-report>
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
      
    </div>
    <div class="product flex" v-for="(product, id) in products.data" :key="id">
      <div class="img-box">
        <img :src="product.photo_url" :alt="product.photo_url" />
      </div>
      <div class="detail-box">
        <div class="flex">
          <div class="px-2 bg-indigo-500 text-white">{{ product.stock }}</div>
          <div
            :class="
              `px-2 ${
                product.stock <= 5
                  ? 'bg-red-300'
                  : product.stock <= 15
                  ? 'bg-blue-300'
                  : 'bg-green-300'
              }`
            "
          >
            {{ product.name }}
          </div>
        </div>
        <div>{{ product.price | formatPrice }}</div>
        <div>{{ product.id }}</div>
        <div>{{ product.supplier.full_name }}</div>
        <button @click="deleteProduct(product.id)" class="delete">
          <font-awesome-icon :icon="['fas', 'trash']" /> Delete
        </button>
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
    PrintReport
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
.list-box {
  @apply w-full;
  /* max-height: 700px; */
  /* overflow-y: scroll; */
}
.product {
  @apply py-2 my-2 shadow bg-green-100;
}
.img-box {
  @apply grid;
  place-items: center;
  width: 150px;
}
.img-box img {
  max-height: 150px;
  max-width: 150px;
}
.detail-box {
  margin-left: 20px;
  max-height: 100%;
}
</style>
