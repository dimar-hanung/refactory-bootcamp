<template>
  <div>
    <div id="theme-btn" class="text-inverse" @click="toggleDark">test</div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDark() {
      var d = document.documentElement,
        m = localStorage.getItem("theme");

      if (m == "dark") {
        d.classList.add("theme-dark");
      }

      if (d.classList.contains("theme-dark")) {
        d.classList.remove("theme-dark");
        localStorage.removeItem("theme");
      } else {
        d.classList.add("theme-dark");
        localStorage.setItem("theme", "dark");
      }
    },
  },
};
</script>

<style scoped></style>
