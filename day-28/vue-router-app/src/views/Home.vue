<template>
  <div class="home">
    
    <Posts tipe="popular" />
  </div>
</template>

<script>
// @ is an alias to /src
import Posts from "@/views/Posts.vue";

export default {
  name: "Home",
  components: {
    Posts
  }
};
</script>
