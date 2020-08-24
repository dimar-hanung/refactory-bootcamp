<template>
  <div class="container mx-auto" style="max-width:600px">
    <search-box v-model="searchQuery" v-on:change="filteredResources" />
    <selected-item
      :data="selectedItem"
      v-model="sButton"
      v-on:click="removeItem"
    />
    {{ loading ? "loading..." : "" }}
    <hr />
    <filtered-item
      :data="filter"
      v-model="fButton"
      v-on:click="addItem"
    />

    <!-- <img v-bind:src="logoDimar" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import data from "../assets/data.js";
console.log(data);
import SearchBox from "@/components/SearchBox.vue";
import SelectedItem from "@/components/SelectedItem.vue";
import FilteredItem from "@/components/FilteredItem.vue";
// kalo sekarang coba dim?
// itu url nya udah aku benerin, coba buka lagi deh wkwkkw

export default {
  name: "Home",
  components: {
    SearchBox,
    SelectedItem,
    FilteredItem,
  },
  data() {
    return {
      loading: "",
      resources: data,
      filter: [],
      searchQuery: "",
      fButton: "",
      sButton: "",
      selectedItem: [],
    };
  },
  methods: {
    addItem: function() {
      this.selectedItem.push(this.fButton);
      this.filter = this.filter.filter((data) => data.id != this.fButton.id);
      this.resources = this.resources.filter((data) => data.id != this.fButton.id);
      console.log(this.selectedItem);
      console.log(this.fButton.id);
    },
    removeItem: function() {
      this.resources.push(this.fButton);
      this.filter.push(this.sButton);
      this.selectedItem = this.selectedItem.filter(
        (data) => data.id != this.sButton.id
      );
    },
    filteredResources: async function() {
      console.log(this.searchQuery);
      this.loading = true;
      if (this.searchQuery.length >= 3) {
        this.filter = [];
        await this.wait(100);
        this.filter = this.resources.filter(
          (data) => data.title.indexOf(this.searchQuery) != -1
        );
        this.filter = this.filter.filter((data) => data)
      } else {
        this.filter = this.resources;
      }
      this.loading = false;
    },
    wait: async function(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    },
    
  },
  created() {
    this.filteredResources();
  },
};
</script>
