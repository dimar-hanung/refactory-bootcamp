<template>
  <div class="items-wrap container">
    <!-- {{coins}} -->
    <search-box v-model="searchQuery" v-on:change="searchItems(searchQuery)" />
    <div
      v-for="(item, id) in items"
      class="item"
      style="min-width:200px"
      v-bind:key="id"
    >
      <div class="flex">
        <div class="title">
          <span>Judul {{ item.id }}</span>
        </div>
        <button
          :class="`btn plus ${item.selected ? 'added' : ''}`"
          @click="item.selected ? already() : pushToCart(item)"
        >
          {{ item.selected ? "✔️" : "+" }}
        </button>
      </div>
      <div>
        <img :src="item.thumbnailUrl" class="img-box" alt="" />
      </div>
      <div class="text-left font-bold text-blue-500 pt-2">
        {{ item.price | formatPrice }}
      </div>
      <div :title="item.title" class="text-left my-1">
        {{ item.title }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.plus {
  @apply font-bold float-right;
}

.added {
  background: #bee3f8 !important;
  cursor: not-allowed;
  /* pointer-events: none; */
}

.items-wrap {
  @apply flex flex-wrap mx-auto;
  max-width: 860px;
}

.item {
  @apply w-1/3 p-2 mx-auto;
}
</style>

<script>
import { mapState, mapActions } from "vuex";
import SearchBox from "@/components/SearchBox.vue";
export default {
  name: "Home",
  components: {
    SearchBox,
  },
  data() {
    return {
      searchQuery: "",
      // items: null
    };
  },
  methods: {
    ...mapActions(["loadItems", "searchItems", "pushToCart"]),
    already: function() {
      console.log("S");
    },
  },
  mounted() {
    this.loadItems();
  },
  computed: mapState(["items"]),
};
</script>
