<template>
  <div>
    <h1 class="font-bold mb-5">Selected Item</h1>
    <hr />
    <div v-if="data.length < 1">Tidak ada item yang dipilih</div>
    <div class="justify-between flex mt-5" v-else>
      <div><b>Total : </b> {{ data | sumPrice | formatPrice }}</div>

      <button class="btn" v-if="data.length > 0" v-on:click="error">
        Beli
      </button>
    </div>
    <div class="selected-item flex flex-wrap">
      <div
        v-for="(list, idx) in data"
        class="w-1/3 p-2 mx-auto"
        style="min-width:200px"
        v-bind:key="idx"
      >
        <div class="flex">
          <div class="title bg-red-600">
            <span>Judul {{ list.id }}</span>
          </div>
          <button
            class="btn font-bold float-right bg-red-600"
            v-on:click="addArray(list)"
          >
            -
          </button>
        </div>
        <div>
          <img :src="list.thumbnailUrl" class="img-box" alt="" />
        </div>
        <div class="text-center my-2">{{ list.price | formatPrice }}</div>
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
  filters: {
    sumPrice: function(value) {
      console.log(value);
      return value.reduce((a, b) => a + parseInt(b.price), 0);
    },
  },
  methods: {
    addArray(data) {
      return this.$emit("click", data);
    },
    error() {
      this.$toast.info(`Sedang di proses`, {
          position: "top-right",
          duration: 5000,
          pauseOnHover: true,
          // all of other options may go here
        });
      setTimeout(() => {
        this.$toast.error(`Server Sibuk`, {
          position: "top-right",
          duration: 5000,
          pauseOnHover: true,
          // all of other options may go here
        });
      }, Math.random() * 5000);
    },
  },
};
</script>

<style></style>
