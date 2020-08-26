<template>
  <div id="app">
    <header-nav />
    <nav-sticky/>
    <div class="flex mx-auto container justify-between" >
      <router-view />
      <sidebar-nav />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/Header.vue";
import SidebarNav from "@/components/Sidebar.vue";
import NavSticky from "@/components/NavSticky.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    SidebarNav,
    NavSticky
  },
};
</script>
