<template>
  <div>
    <h1 class="font-bold">Search Item</h1>
    <hr />
    <div class="selected-item flex flex-wrap">
      <div v-for="(list, idx) in data" class="w-1/3 sm:px-2" v-bind:key="idx">
        <div>
          <img :src="list.thumbnailUrl" class="img-box sm:rounded-lg" alt="" />
        </div>
        <div class="hidden sm:block font-bold">Judul {{ list.id }}</div>
        <div class="hidden sm:block text-center my-2">{{ list.title }}</div>
        <button class="btn" v-on:click="addArray(list)">Tambah</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilteredItem",
  props: {
    test: String,
    data: {
      type: Array,
      required: true,
    },
  },
  model: {
    prop: "button",
    event: "click",
  },
  methods: {
    addArray(data) {
      return this.$emit("click", data);
    },
  },
};
</script>

<style></style>
