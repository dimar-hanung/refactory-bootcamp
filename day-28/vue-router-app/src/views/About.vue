<template>
  <div class="about">
    <router-link to="website">website</router-link>
    <router-link to="pendidikan">pendidikan</router-link>
     <router-view></router-view>
  </div>
</template>
<style scoped>
.about a.router-link-exact-active {
  color: #42b983;
}
</style>