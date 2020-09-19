<template>
  <div class="list-box">
    <div class="block">
      <post-modal v-bind:inputVal="inputVal" body="raw" postUrl="in/">
        <div slot="title">Add Product In</div>
        <div slot="form-list">
          <m-input
            labelName="Product In"
            type="number"
            v-on:input="inputVal.product_id = $event"
          />
          <m-input
            labelName="Total"
            type="number"
            v-on:input="inputVal.total = $event"
          />
        </div>
      </post-modal>
    </div>
    <div>
      <div
        class="product flex"
        v-for="(product, id) in productsIn.data"
        :key="id"
      >
        <div class="img-box">
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
        <button class="btn-lg" @click="deleteProductIn(product.id)"><font-awesome-icon :icon="['fas', 'trash']" />Delete</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import postModal from "@/components/modal/PostModal.vue";
import MInput from "@/components/modal/MInput.vue";
export default {
  components: {
    postModal,
    MInput,
  },
  data() {
    return {
      inputVal: {},
    };
  },
  methods: {
    ...mapActions("Auth", ["getProductsIn","deleteProductIn"]),
  },
  computed: {
    ...mapState("Auth", ["productsIn"]),
  },
  mounted() {
    // console.log(from)
    this.getProductsIn();
  },
};
</script>

<style scoped>
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
