<template>
  <div :class="`nav absolute sm:relative h-full sm:h-auto shadow-lg ${isSidebar?'':'close'}`">
    <a href="#" @click="sidebarToggle" :class="`sidebar-toggle ${isSidebar?'':'right-50'}`"><font-awesome-icon :icon="['fas','bars']" /></a>
    <div class="profile-box">
      <div class="profile-name bg-green-200 w-full text-center py-2">
        Admin Panel
      </div>
      <div class="img-box mx-auto mb-3 mt-6">
        <img src="@/assets/logo.png" class="mx-auto block" alt="profile" />
      </div>
      <div class="profile-name bg-green-200 w-full text-center py-3 mt-4">
        {{ user.username }}
      </div>
    </div>

    <div class="router-box">
      
      <!-- <router-link to="/dashboard">Dashboard</router-link> -->
      <router-link exact to="/dashboard"><font-awesome-icon :icon="['fas', 'home']" /> Dashboard</router-link>
      <router-link to="/products"><font-awesome-icon :icon="['fas', 'shopping-cart']" /> Products</router-link>
      <router-link to="/settings"><font-awesome-icon :icon="['fas','cog']" /> Setting</router-link>
      <router-link to="/login"><font-awesome-icon :icon="['fas','sign-out-alt']" /> Logout</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isSidebar: true
    }
  },
  computed: {
    ...mapState("Auth", ["user"]),
  },
  methods: {
    sidebarToggle() {
      this.isSidebar = !this.isSidebar;
    }
  },
};
</script>
<style scoped>
.nav {
  @apply bg-green-300;
  width: 250px;
  min-width:250px;
  transition: all ease .3s;
}
.close{
  margin-left: -250px;
}
.sidebar-toggle{
  position:absolute;
  top: 5px;
  right: 10px;
  font-size: 22px;
  transition: all ease .3s;
}

.right-50{
  right: -35px;
}

.router-box {

}

.router-box a {
  @apply block py-2 px-4 bg-green-200;
  transition: all ease .1s;
}
.router-box a:hover{
  @apply bg-green-100;
}

.router-box a.router-link-active {
  @apply text-red-700;
}
</style>
