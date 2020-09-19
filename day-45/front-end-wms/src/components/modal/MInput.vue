<template>
  <div class="mb-4">
    <label
      class="text-left block text-gray-700 text-base font-bold mb-2"
      for="productname"
      >{{labelName}}</label
    >
    <input
      class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      id="productname"
      :type="type"
      v-on:input="checkType"
    />
  </div>
</template>

<script>
export default {
    data() {
        return {
            FILE: '',
        }
    },
props: {
    labelName: {
        type: String,
        default: ""
    },
    type:{
        type: String,
        defult:"text"
    }
},
methods: {
    checkType(event) {
        if(this.type !== 'file'){
            this.$emit('input', event.target.value)
        }else{
            this.FILE = event.target.files[0];
            this.$emit('input', this.FILE)
            console.log(this.FILE);
        }
      
      
    },
},

};
</script>

<style scoped></style>
