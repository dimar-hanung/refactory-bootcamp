<template>
  <div>
    <button
      class="text-base rounded-md border-2 border-blue-500 text-blue-500 py-2 px-4"
      type="button"
      style="transition: all .15s ease"
      @click="printReport"
    >
      <slot></slot>
    </button>
  </div>
</template>

<script>
import Api from "@/store/api";
export default {
  props: {
    getUrl: {
      type: String,
      default: "",
    },
  },
  methods: {
    printReport() {
      Api.get(this.getUrl, {
        headers: { Authorization: `bearer ${localStorage.getItem("token")}` },
      })
        .then((res) => console.log(res))
        .catch((error) => console.log({ error }));
    },
  },
};
</script>

<style scoped></style>
