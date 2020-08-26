<template>
  <div class="about flex flex-wrap mt-10">
    <!-- <h1>This is an about x</h1> -->
    <div class="w-1/4 p-2 mx-auto" style="min-width:150px;" v-for="(photo, i) in photos" :key="i">
      <div class="text-left" style="max-width:min-content">
        <img style="min-width:150px" class="block mx-auto" :src="photo.thumbnailUrl" alt="" />

        <h1>{{ photo.title | capitalize }}</h1>
        <div>{{ photo.body }}</div>
        <router-link class="text-orange font-bold" :to="`photos/${photo.id}`"
          >Read More</router-link
        >
      </div>
    </div>
  </div>
</template>
