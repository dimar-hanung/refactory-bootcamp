<template>
  <div class="about mt-10 text-left">
    <!-- <h1>This is an about x</h1> -->
    <div v-for="(album, i) in albums" :key="i">
      {{ i + 1 }}.
      <router-link
        class="text-orange font-bold"
        :to="{ name: 'Album', params: { id: album.id } }"
        >{{ album.title }}</router-link
      >
    </div>
  </div>
</template>
