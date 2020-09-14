<template>
  <div class="items-wrap container flex mx-auto justify-center">
    <!-- {{coins}} -->
    <!-- <search-box v-model="searchQuery" v-on:change="searchItems(searchQuery)" /> -->
    <list-cart />
    <checkout />
  </div>
</template>

<style scoped>
.total-checkout{
  @apply text-left bg-gray-100 p-4 mx-2 rounded-md border;
  height:max-content;
}
</style>

<script>

import ListCart from "@/components/ListCart.vue";
import Checkout from "@/components/Checkout.vue";
export default {
  name: "Home",
  components: {
    ListCart,
    Checkout
  },
};
</script>
