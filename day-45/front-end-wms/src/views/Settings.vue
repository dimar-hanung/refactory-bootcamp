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
          <div class="flex flex-wrap margin-btn">
            <button class="btn-lg mt-2" @click="selectTheme('light')">
              Light
            </button>
            <button class="btn-lg mt-2" @click="selectTheme('dark')">
              Dark
            </button>
            <button class="btn-lg mt-2" @click="selectTheme('vue')">
              Vue
            </button>
            <button class="btn-lg mt-2" @click="selectTheme('red')">
              Red
            </button>
            <button class="btn-lg mt-2" @click="selectTheme('blue')">
              Blue
            </button>
          </div>
        </div>
        <div class="settings-box">
          <div class="font-bold">General</div>
          <div>
            <input
              id="successMessage"
              @input="toastToggle('res')"
              type="checkBox"
              :checked="toastActive['res']"
            />
            
            <label for="successMessage">Show Success Message</label>
          </div>
          <div>
            <input
              id="errMessage"
              @input="toastToggle('err')"
              type="checkBox"
              :checked="toastActive['err']"
            />
            
            <label for="errMessage">Show Error Message</label>
          </div>
          <div>
            <input
              id="resErrMessage"
              @input="toastToggle('res_err')"
              type="checkBox"
              :checked="toastActive['res_err']"
            />
            
            <label for="resErrMessage">Show Response Error Message</label>
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
