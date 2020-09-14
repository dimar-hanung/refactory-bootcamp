<template>
  <div class="items-wrap container flex">
    <!-- {{coins}} -->
    <!-- <search-box v-model="searchQuery" v-on:change="searchItems(searchQuery)" /> -->
    <div class="item-wrap">
      <div
        v-for="(item, id) in selectedCarts"
        class="item"
        style="min-width:200px"
        v-bind:key="id"
      >
        <div class="flex">
          <img :src="item.thumbnailUrl" class="img-box" alt="" />
          <div class="w-full grid">
            <div class="flex title-wrap">
              <div class="title text-left">
                <span>Judul {{ item.id }}</span>
              </div>
              <button
                class="btn bg-red-700 font-bold float-right"
                @click="removeCart(item)"
              >
                X
              </button>
            </div>
            <div class="grid">
              <div :title="item.title" class="text-left my-1 px-2">
                {{ item.title }}
              </div>
              <div class="price-wrap">
                <span class="mx-2">{{ item.price * item.total | formatPrice }}</span>
                <button
                  @click="increaseCount({ id: item.id, increase: false })"
                  class="btn btn-before"
                >
                  -</button
                ><input type="number" :value="item.total" /><button
                  class="btn btn-after"
                  @click="increaseCount({ id: item.id, increase: true })"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="total-checkout">
      <table>
        <tr>
          <td>Sub Total</td>
          <td>: {{subTotal | formatPrice}}</td>
        </tr>
        <tr>
          <td>PPN 10%</td>
          <td>: {{ ppn | formatPrice }}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>: {{total | formatPrice}}</td>
        </tr>
      </table>
      <div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.total-checkout{
  @apply text-left bg-gray-100 p-4 mx-2 rounded-md border;
  height:max-content;
}
.price-wrap {
  @apply text-left font-bold text-blue-500 pt-2 self-end;
  place-self: end;
}
.title-wrap {
  max-height: 40px;
}
.btn-before {
  @apply font-bold;
  border-radius: 5px 0 0 5px;
}
.btn-after {
  @apply font-bold;
  border-radius: 0 5px 5px 0;
}
.items-wrap {
  @apply mx-auto;
}
.img-box {
  max-width: 150px;
  margin: 0;
}

.item {
  @apply p-2 mx-auto my-3;
}

input[type="number"]::-webkit-outer-spin-button,
input[type="number"]::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
input[type="number"] {
  width: 40px;
  text-align: center;
  height: auto;
  outline: none;
  margin: 0 2px;
  font-weight: bold;
  -moz-appearance: textfield;
}
</style>

<script>
import { mapState, mapActions } from "vuex";
// import SearchBox from "@/components/SearchBox.vue";
export default {
  name: "Home",
  components: {
    // SearchBox,
  },
  data() {
    return {
      searchQuery: "",
      // items: null,
      
    };
  },
  methods: {
    ...mapActions(["loadItems", "searchItems", "removeCart","increaseCount"]),
  },
  mounted() {
    this.loadItems();
  },
  computed: {
    ...mapState(["items"]),
    selectedCarts() {
      return this.items.filter((item) => item.selected == true);
    },
    subTotal(){
      let total = 0;
      this.selectedCarts.forEach(item => {
        total+= item.price * item.total
      })
      return total
    },
    ppn(){
      return this.subTotal * 10 / 100
    },
    total(){
      return this.subTotal - this.ppn
    }
  },
};
</script>
