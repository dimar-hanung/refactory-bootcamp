<template>
  <div class="mt-10 text-left">
    
    <h1 class="font-bold text-2xl">{{photo.title | capitalize}}</h1>
    <div><img :src="photo.url" alt=""></div>
   
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      photo : []
    };
  },
  methods:{
      getId(){
          this.photo = this.getById([this.photos, this.$route.params.id])[0]
      }
  },
  created(){
      this.getId();
  }

};
</script>
