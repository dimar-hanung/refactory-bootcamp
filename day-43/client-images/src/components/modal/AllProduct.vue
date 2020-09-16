<template>
  <div>
    <button
      class="float-left text-base rounded-md border-2 border-blue-500 text-blue-500 py-2 px-4"
      type="button"
      style="transition: all .15s ease"
      v-on:click="toggleModal()"
    >
      Add Product
    </button>

    <div
      v-if="showModal"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <!-- a -->
      <div class="mx-auto">
        <div class="w-full max-w-xs mx-auto mt-8">
          <form
            class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
            @submit.prevent="onSubmit"
          >
            <h1 class="text-gray-700 font-bold mt-4 mb-8 text-xl">
              Add Product
            </h1>

            <!-- Product Name -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="productname"
                >Product Name</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="productname"
                type="text"
                v-model="name"
              />
            </div>

            <!-- Stock -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="stock"
                >Stock</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="stock"
                type="number"
                v-model="stock"
              />
            </div>

            <!-- Price -->
            <div class="mb-4">
              <label
                class="text-left block text-gray-700 text-base font-bold mb-2"
                for="price"
                >Price</label
              >
              <input
                class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="price"
                v-model="price"
                type="number"
              />
            </div>

            <!-- Photo -->
            <div class="mb-4">
              <div class="form-group">
                <input type="file" @change="onFileUploadx" />
              </div>
             
            </div>

            
            <input type="submit" class="bg-white border border-blue-500 hover:bg-blue-500 hover:text-white text-blue-500 w-full font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" value="submit" />
            <div class="mt-4">
              <button
                class="text-blue-500 text-center font-bold"
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
import axios from "axios";
export default {
  name: "ProductAll",
  components: {},
  data() {
    return {
      showModal: false,
      FILE: "",
      name: "",
      price: 0,
      stock: 0,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    onFileUploadx(event) {
      this.FILE = event.target.files[0];
      console.log(this.FILE);
    },
    onSubmit() {
      // upload file
      const formData = new FormData();
      formData.append("photo", this.FILE, this.FILE.name);
      formData.append("name", this.name);
      formData.append("price", this.price);
      formData.append("stock", this.stock);
      axios
        .post("http://localhost:3000/api/v1/product/", formData, {})
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.log(err));
    },
  },
};

// import axios from 'axios';
</script>
