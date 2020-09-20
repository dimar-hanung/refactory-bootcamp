<template>
  <div id="app" class="flex bg-green-200">
    <sidebar v-if="!$route.meta.hideNavigation" />
    <router-view class="w-full" />
  </div>
</template>
<script>
  import Sidebar from '@/components/Sidebar.vue';
  
  export default {
    components: {
      Sidebar
    },
  };
</script>
