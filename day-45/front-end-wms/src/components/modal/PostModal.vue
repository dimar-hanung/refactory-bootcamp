<template>
  <div>
    <button
      class="btn-lg"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >
      <slot name="title"></slot>
    </button>

    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
      <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <form
            class="bg-green-100 shadow-md rounded px-8 pt-6 pb-8 mb-4"
            @submit.prevent="onSubmit"
          >
            <h1 class="text-inverse font-bold mt-4 mb-8 text-xl">
              <slot name="title"></slot>
            </h1>

            <slot name="form-list"></slot>
            <input
              type="submit"
              class="bg-green-100 border border-green-500 hover:bg-green-200 cursor-pointer text-inverse w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              value="submit"
            />
            <div class="mt-4">
              <button
                class="text-inverse text-center font-bold hover:bg-green-200 p-2 rounded"
                style="transition: all .15s ease"
                v-on:click="toggleModal()"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- b -->
    </div>
    <div v-if="showModal" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";
// import axios from "axios";
// import MInput from "@/components/modal/MInput.vue";
import api from "@/store/api";
export default {
  name: "ProductAll",
  // components: { MInput },
  props: {
    inputVal: {
      type: Object,
      default: function() {
        return {};
      },
    },
    postUrl: {
      type: String,
      default: "",
    },
    body: {
      type: String,
      default: "raw",
    },
  },
  data() {
    return {
      title: "",
      showModal: false,
      // FILE: this.inputVal.FILE,
      // name: this.inputVal.name,
      // price: this.inputVal.price,
      stock: 1,
    };
  },
  methods: {
    testing(e) {
      console.log(e);
      // console.log("x",this.xname)
    },
    toggleModal() {
      console.log(this.xname);
      this.showModal = !this.showModal;
    },
    onFileUploadx(event) {
      this.FILE = event.target.files[0];
      console.log(this.FILE);
    },
    onSubmit() {
      // upload file
      let formData = new FormData();
      for (var key of Object.keys(this.inputVal)) {
        formData.append(key, this.inputVal[key]);
        console.log(key, this.inputVal[key]);
      }
      if (this.inputVal.FILE) {
        formData.append("photo", this.inputVal.FILE, this.inputVal.FILE.name);
      }

      if (this.body == "raw") {
        formData = { data: JSON.parse(JSON.stringify(Object.fromEntries(formData))) };
      }

      // formData.append("name", this.inputVal.name);
      // formData.append("price", this.inputVal.price);
      // formData.append("stock", this.inputVal.stock);
      api
        .post(this.postUrl, formData, {})
        .then((res) => {
          console.log(res);
          this.showModal = false;
        })
        .catch((err) => console.log(err));
    },
  },
};

// import axios from 'axios';
</script>
