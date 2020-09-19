<template>
  <div class="theme-button-wrap">
    <div class="flex margin-btn">
      <button id="theme-btn" class="btn-lg" @click="toggleDark('light')">Light</button>
      <button id="theme-btn" class="btn-lg" @click="toggleDark('dark')">dark</button>
      <button id="theme-btn" class="btn-lg" @click="toggleDark('vue')">vue</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toggleDark(theme) {
      var d = document.documentElement;
        // m = localStorage.getItem("theme");

      if (theme == "light") {
        d.setAttribute("class","theme-light")
        localStorage.setItem("theme", "light");
      }
      if (theme == "dark") {
        d.classList.add("theme-dark");
        d.setAttribute("class","theme-dark text-inverse")
        localStorage.setItem("theme", "dark");
      }
      if (theme == "vue") {
        d.setAttribute("class","text-inverse")
        localStorage.removeItem("theme");
      }

      // if (d.classList.contains("theme-light")) {
      //   d.classList.remove("theme-light");
      //   localStorage.removeItem("theme");
      // } else {
      //   d.classList.add("theme-light");
      //   localStorage.setItem("theme", "light");
      // }
    },
  },
};
</script>

<style scoped>
  .theme-button-wrap{
    @apply bg-green-100 grid;
    place-items:center;
  }

</style>
