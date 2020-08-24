<template>
  <div>
    <h1 class="font-bold">Selected Item</h1>
    <div v-if="data.length < 1">Tidak ada item yang dipilih</div>
    <div class="selected-item flex flex-wrap">
      <div
        v-for="(list, idx) in data"
        class="w-1/2 sm:w-1/3 sm:px-2"
        v-bind:key="idx"
      >
       <div class="flex">
          <div class="title bg-red-600"><span>Judul {{ list.id }}</span></div>
          <button class="btn font-bold float-right bg-red-600" v-on:click="addArray(list)">-</button>
      </div>
        <div>
          <img :src="list.thumbnailUrl" class="img-box" alt="" />
        </div>
        <div class="text-center my-2">{{ list.title }}</div>
       
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
