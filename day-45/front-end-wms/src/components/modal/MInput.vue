<template>
  <div class="mb-4">
    <label
      class="text-left block text-base font-bold mb-2"
      >{{labelName}}</label
    >
    <input
      class="shadow appearance-none border border-green-500 rounded w-full py-2 px-3 bg-green-100 leading-tight focus:outline-none focus:shadow-outline"
      :type="type"
      v-on:input="checkType"
      :value="value"
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
        default:"text"
    },
    value:{
        default:""
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
