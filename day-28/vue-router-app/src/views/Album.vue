<template>
  <div class="mt-10 text-left">
    
    <h1 class="font-bold text-2xl">{{album.title | capitalize}}</h1>
   <div class="flex flex-wrap">
       <div class="w-1/3" v-for="(albumPhoto,i) in albumPhotos" :key="i">
           <img :src="albumPhoto.url" alt="">
       </div>
   </div>
   
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      album : [],
      albumPhotos: []
    };
  },
   created(){
      this.album = this.getById([this.albums, this.$route.params.id])[0]
      this.albumPhotos = this.photos.filter(photo=>photo.albumId==this.album.id)
  }

};
</script>
