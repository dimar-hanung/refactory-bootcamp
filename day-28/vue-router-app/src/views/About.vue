<template>
  <div class="about">
    <router-link to="/about/website">website</router-link>
    <router-link to="/about/pendidikan">pendidikan</router-link>
     <router-view></router-view>
  </div>
</template>
<style scoped>
.about a.router-link-exact-active {
  color: #42b983;
}
</style>