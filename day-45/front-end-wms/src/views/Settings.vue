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
            <button id="theme-btn" class="btn-lg" @click="selectTheme('light')">
              Light
            </button>
            <button id="theme-btn" class="btn-lg" @click="selectTheme('dark')">
              dark
            </button>
            <button id="theme-btn" class="btn-lg" @click="selectTheme('vue')">
              vue
            </button>
          </div>
        </div>
        <div class="settings-box">
          <div class="font-bold">General</div>
          <div>
            <input
              id="alertCheck"
              @input="toastToggle"
              type="checkBox"
              :checked="toastActive"
            />
            <label for="alertCheck">Show Toast After Request</label>
          </div>
          <div>
            <input
              id="showImage"
              @input="imageVisibility"
              type="checkBox"
              :checked="showImage"
            />
            <label for="showImage">Show Image Product</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState("Settings", ["showImage", "reqAlert", "toastActive"]),
  },
  methods: {
    ...mapActions("Settings", [
      "imageVisibility",
      "selectTheme",
      "toastToggle",
    ]),
  },
};
</script>

<style scoped>
input {
  width: auto;
}
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
