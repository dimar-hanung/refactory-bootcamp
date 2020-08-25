<template>
  <input
    type="text"
    v-on:input="$emit('change', $event.target.value)"
    class="input w-4/5 sm:w-full"
    placeholder="Cari..."
  />
</template>

<script>
export default {
  name: "SearchBox",
  props: {
    test: String,
  },
  model: {
    prop: "input",
    event: "change",
  },
};
</script>

<style></style>
