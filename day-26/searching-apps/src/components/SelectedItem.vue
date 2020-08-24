<template>
  <div>
    <h1>Selected Item</h1>
    <div class="selected-item flex flex-wrap">
      <div v-for="(list, idx) in data" class="w-1/3 sm:px-2" v-bind:key="idx">
        <div>
          <img :src="list.thumbnailUrl" class="img-box sm:rounded-lg" alt="" />
        </div>
        <div class="hidden sm:block text-center my-2">{{ list.title }}</div>

        <button class="btn bg-red-800" v-on:click="addArray(list)">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SelectedItem",
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
