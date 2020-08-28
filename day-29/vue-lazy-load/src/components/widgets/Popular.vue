<template>
  <div v-if="route!=''">
      <div class="font-bold border-b-2 border-green-800">Popular {{this.$route.name}}</div>
      <div class="border-b" v-for="(list,index) in 10" :key="index">
        {{index+1}}. <router-link class="text-orange" :to="`${$route.name.toLowerCase()}/${route[index].id}`">{{route[index].title}}</router-link>
      </div>
  </div>
</template>

<script>    
export default {
  name: "Popular",
  props: ["route"],

};
</script>
