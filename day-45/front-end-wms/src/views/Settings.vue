<template>
  <div class="container wrap">
    <div class="w-full">
      <div class="flex products-menu">
        <div>
          Settings
        </div>
      </div>
      <div class="list-box">
        <div class="settings-box">
          <div class="font-bold">Theme</div>
          <div class="flex margin-btn">
            <button id="theme-btn" class="btn-lg" @click="toggleDark('light')">
              Light
            </button>
            <button id="theme-btn" class="btn-lg" @click="toggleDark('dark')">
              dark
            </button>
            <button id="theme-btn" class="btn-lg" @click="toggleDark('vue')">
              vue
            </button>
          </div>
        </div>
        <div class="settings-box">
          <div class="font-bold">General</div>
          <input
            v-model="inputAlert"
            id="alertCheck"
            @input="toggleToast"
            type="checkBox"
            :checked="inputAlert"
          />
          <label for="alertCheck">Show Toast After Request</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      inputAlert: false,
    };
  },
  methods: {
    toggleDark(theme) {
      var d = document.documentElement;
      // m = localStorage.getItem("theme");

      if (theme == "light") {
        d.setAttribute("class", "theme-light");
        localStorage.setItem("theme", "light");
      }
      if (theme == "dark") {
        d.classList.add("theme-dark");
        d.setAttribute("class", "theme-dark text-inverse");
        localStorage.setItem("theme", "dark");
      }
      if (theme == "vue") {
        d.setAttribute("class", "text-inverse");
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
    toggleToast(val) {
      console.log(val.target.checked);
      this.inputAlert = !this.inputAlert
      if (val.target.checked) {
        localStorage.setItem("toast", "true");
      } else {
        localStorage.removeItem("toast");
      }
    },
  },
  // computed: {
  //   inputAlert() {
  //     return this.data
  //   }
  // },
  mounted() {
    console.log(localStorage.getItem("toast") == "true");
    this.inputAlert = localStorage.getItem("toast") == "true";
    // this.setStorage();
  },
};
</script>

<style scoped>
.theme-button-wrap {
  @apply bg-green-100 grid;
  place-items: center;
}
.settings-box {
  @apply mb-4;
}
.products-menu div {
  @apply p-2 mr-2 bg-green-300 text-center;
  min-width: 100px;
}

label {
  @apply cursor-pointer select-none mx-2;
}
</style>
