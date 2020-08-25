<template>
  <div class="container mx-auto" style="max-width:600px">
    <search-box v-model="searchQuery" v-on:change="filteredResources" />
    <selected-item
      :data="selectedItem"
      v-model="sButton"
      v-on:click="removeItem"
    />

    <hr />

    <div
      class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4"
      role="alert"
      v-if="searchQuery.length !== 0 && searchQuery.length < 3"
    >
      <p class="font-bold">Peringatan</p>
      <p>Pencarian akan berjalan setelah 3 kata.</p>
    </div>

    <filtered-item
      :data="searchItem"
      :loading="loading"
      v-model="fButton"
      v-on:click="addItem"
    />
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
      searchItem: [],
      searchQuery: "",
      fButton: "",
      sButton: "",
      selectedItem: [],
    };
  },
  methods: {
    addItem: function() {
      this.$toast.success(`<b>Judul ${this.fButton.id}</b> Added to list`,{
  position:"top-right",
  duration:5000,
  pauseOnHover:true
  // all of other options may go here
});
      this.selectedItem.push(this.fButton);
      this.searchItem = this.searchItem.filter(
        (data) => data.id != this.fButton.id
      );
      this.resources = this.resources.filter(
        (data) => data.id != this.fButton.id
      );
    
    },
    removeItem: function() {
      this.resources.push(this.fButton);
      this.searchItem.push(this.sButton);
      this.selectedItem = this.selectedItem.filter(
        (data) => data.id != this.sButton.id
      );
    },
    filteredResources: async function() {
      this.loading = true;
      if (this.searchQuery.length >= 3) {
        this.searchItem = [];
        await this.wait(1000);
        this.searchItem = this.resources.filter(
          (data) => data.title.indexOf(this.searchQuery) != -1
        );
        // this.searchItem = this.searchItem.filter((data) => data);
      } else {
        this.searchItem = this.resources;
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
