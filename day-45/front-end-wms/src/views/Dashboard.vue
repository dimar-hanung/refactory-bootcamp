<template>
  <div class="dashboard bg-green-100">
    <div class="box-wrap w-full mx-auto text-center">
      <router-link to="/products/main">
        <div class="box-item">
          <div>Total All Product</div>
          <div class="font-bold">{{ products.data.totalItems }}</div>
        </div>
      </router-link>
      <router-link to="/products/in">
        <div class="box-item">
          <div>Total Product In</div>
          <div class="font-bold">{{ productsIn.totalItems }}</div>
        </div>
      </router-link>
      <router-link to="/products/out">
        <div class="box-item">
          <div>Total Product Out</div>
          <div class="font-bold">{{ productsOut.totalItems }}</div>
        </div>
      </router-link>
    </div>
    
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  methods: {
    ...mapActions("Auth", ["getProducts", "getProductsIn", "getProductsOut","getUsers"]),
    
  },
  computed: {
    ...mapState("Auth", ["products", "productsIn", "productsOut"]),
  },
  mounted() {
    // console.log(from)
    if(localStorage.getItem("firstLogin") != "1"){
      localStorage.setItem("firstLogin","1")
    }
    this.getProducts({limit:1});
    this.getProductsIn({limit:1});
    this.getProductsOut({limit:1});
    this.getUsers({limit:1});
  },
};
</script>

<style scoped>
.dashboard {
  @apply grid;
  place-items: center;
  height: auto;
}

.box-item {
  @apply p-3 border border-green-500 w-full mx-auto my-3 rounded;
  max-width: 250px;
}
</style>
