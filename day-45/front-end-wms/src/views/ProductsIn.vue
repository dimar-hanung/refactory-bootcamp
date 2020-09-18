<template>
   <div class="list-box">
            <div v-if="productsIn.data.Product">
                <div class="product flex" v-for="(product,id) in productsIn.data" :key="id">
                    <div class="img-box">
                        <img :src="product.Product.photo_url" :alt="product.Product.photo_url">
                    </div>
                    <div class="detail-box">
                    <div class="flex">
                        <div class="px-2 bg-indigo-500 text-white">{{product.total}}</div>
                        <div :class="`px-2 ${product.total <= 5?'bg-red-300':product.total <= 15?'bg-blue-300':'bg-green-300'}`">{{product.Product.name}}</div>
                    </div>
                    <div>{{product.date}}</div>
                    <div>{{product.Product.id}}</div>
                    <div>{{product.Product.supplier.full_name}}</div>
                    </div>
                </div>
            </div>
            <div v-else>
                Tidak Ada data
            </div>
    </div>
    
</template>

<script>
  import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions("Auth", ["getProductsIn"]),
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
.list-box {
  @apply w-full;
  max-height: 700px;
  overflow-y: scroll;
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