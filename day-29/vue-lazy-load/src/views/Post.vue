<template>
  <div class="mt-10 text-left">
    
    <h1 class="font-bold text-2xl">{{post.title | capitalize}}</h1>
    <div>{{post.body}}</div>
   
  </div>
</template>
<script>
export default {
  name: "Home",
  data() {
    return {
      post : []
    };
  },

  created(){
      this.post = this.getById([this.posts, this.$route.params.id])[0]
  }

};
</script>
