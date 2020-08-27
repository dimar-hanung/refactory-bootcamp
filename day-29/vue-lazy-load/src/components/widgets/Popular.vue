<template>
  <div>
      <div class="font-bold border-b">popular {{this.$route.name}}</div>
      <div v-for="(list,index) in 10" :key="index">

        {{index+1}}. <router-link class="text-orange font-bold" :to="`${$route.name.toLowerCase()}/${route[index].id}`">{{route[index].title}}</router-link>
      </div>
  </div>
</template>

<script>    
export default {
  name: "Popular",
  data() {
    return {
      lists:()=> [],
    };
  },
  props: {
    route: Array,
  },
  created() {
  
  },
};
</script>
