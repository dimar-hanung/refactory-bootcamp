<template>
  <div data-app id="app" class="flex" >
    <sidebar
      :user_login="this.user.username"
      v-if="!$route.meta.hideNavigation"
    />
    <div class="container content-wrap">
      <div class="main-content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from "@/components/Sidebar.vue";
// import Tabel from "@/components/Table.vue";
// import Test from "@/components/Test.vue";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    Sidebar,
  },
  computed: {
    ...mapState("Auth", ["user","token"]),
  },
 
};
</script>
