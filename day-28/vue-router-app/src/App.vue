<template>
  <div id="app">
    <header-nav />
    <nav-sticky/>
    <div class="flex mx-auto mb-0 container justify-between" >
      <router-view class="min-h-screen mb-10" />
      <sidebar-nav class="min-h-screen" />
    </div>
    <footer-bot/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderNav from "@/components/Header.vue";
import SidebarNav from "@/components/Sidebar.vue";
import NavSticky from "@/components/NavSticky.vue";
import FooterBot from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    HeaderNav,
    SidebarNav,
    NavSticky,
    FooterBot
  },
};
</script>
