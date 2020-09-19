<template>
  <div class="list-box">
    <div>
      <div class="img-box">
        <img :src="product.photo_url" alt="" />
      </div>
      <div>
        <div class="font-bold text-gray-800">
          Id
        </div>
        <div class="p-2 bg-gray-200">
          {{ product.id }}
        </div>
        <m-input
          labelName="Name"
          :value="product.name"
          v-on:input="inputVal.data.name = $event"
        />
        <m-input
          labelName="Stock"
          :value="product.stock"
          v-on:input="inputVal.data.stock = $event"
          type="number"
        />
        <m-input
          labelName="Price"
          :value="product.price"
          v-on:input="inputVal.data.price = $event"
          type="number"
        />
      </div>

      <div :class="`supplier ${isSupplier ? 's-hide' : ''}`">
        <div class="font-bold text-gray-800">
          Name
        </div>
        <div class="p-2 bg-gray-200">
         {{inputVal.data.supplier.full_name}} 
        </div>
        <div class="font-bold text-gray-800">
          Email
        </div>
        <div class="p-2 bg-gray-200">
          {{inputVal.data.supplier.email}} 
        </div>
        <div class="font-bold text-gray-800">
          role
        </div>
        <div class="p-2 bg-gray-200">
          {{inputVal.data.supplier.role}} 
        </div>
      </div>

      <div class="flex margin-btn">
        <button class="btn-lg" @click="toggleSupplier">Show Supplier</button>
        <button class="btn-lg" @click="editProduct(inputVal.data)">Save</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
import MInput from "@/components/modal/MInput.vue";
// import api from "@/components/store/api"
export default {
  components: {
    MInput,
  },
  data() {
    return {
      isSupplier: false,
    };
  },
  methods: {
    ...mapActions("Auth", ["getProductId", "editProduct"]),
    toggleSupplier() {
      this.isSupplier = !this.isSupplier;
    },
  },

  computed: {
    inputVal: function() {
      return { data: this.product };
    },
    ...mapState("Auth", ["product"]),
  },

  mounted() {
    this.getProductId(this.$route.params.id);
  },
};
</script>

<style scoped>
.img-box {
  @apply grid mb-3;
  place-items: center;
  width: 250px;
}
.img-box img {
  max-height: 150px;
  max-width: 250px;
  border-radius: 5px;
}
.supplier {
  transition: all ease 0.4s;
  height: 200px;
}
.s-hide {
  /* font-size: 0px; */
  height: 0px;
  transform: scaleY(0);
  transform-origin: top;
}
</style>
