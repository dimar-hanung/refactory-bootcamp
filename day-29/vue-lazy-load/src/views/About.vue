<template>
  <div class="about text-left mt-5">
    <h1 class="font-bold text-3xl">About Me</h1>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi itaque
    pariatur, nam nesciunt possimus ad? Facere, numquam beatae! Quasi saepe sit
    ipsum quia. Minima aliquid ducimus officia doloremque tempora odit.
    <div class="flex">
      <router-link to="/about/website">website</router-link>
      <router-link to="/about/pendidikan">pendidikan</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>
<style scoped>
.about a {
  @apply font-bold text-center p-2 rounded bg-gray-700 mx-auto my-5 block border-b text-white;
}

.about a.router-link-exact-active {
  color: #42b983;
}
</style>
