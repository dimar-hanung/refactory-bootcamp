<template>
  <div id="nav" class="sticky">
    <div class="container mx-auto">
      <router-link to="/">Home</router-link>
      
      <router-link :to="{ name: 'Photos' }">Photos</router-link>
      <router-link :to="{ name: 'Posts' }">Posts</router-link>
      <router-link :to="{ name: 'Albums' }">Albums</router-link>
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </div>
</template>
<style scoped>
#nav {
  @apply text-left bg-gray-700 top-0;
}
#nav a {
  @apply bg-gray-700 p-2 inline-block text-white border-gray-800 border-r;
  text-decoration: none;
  margin-right: 2px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
