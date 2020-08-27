<template>
  <div>
    <div class="banner">
      <div class="container flex mx-auto">
        <img alt="Vue logo" src="../assets/logo.png" />
        <div class="banner-title">Dimar Blog</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.banner {
  @apply p-2 bg-gray-800 text-white;
  min-height: 100px;
}
.banner-title {
  @apply grid text-5xl text-center w-full;
  place-content: center;
}
</style>
