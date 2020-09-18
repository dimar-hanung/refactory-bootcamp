<template>
  <div class="nav absolute sm:relative h-full sm:h-auto">
    <div class="profile-box">
      <div class="img-box mx-auto my-3">
        <img src="@/assets/logo.png" class="mx-auto block" alt="profile" />
      </div>
      <div class="profile-name bg-white w-full text-center py-3 my-4">
        {{ user.username }}
      </div>
    </div>

    <div class="router-box">
      <router-link to="/dashboard">Dashboard</router-link>
      <router-link to="/products">Products</router-link>
      <router-link exact to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("Auth", ["user"]),
  },
};
</script>
<style scoped>
.nav {
  @apply bg-green-300;
  width: 250px;
  min-width:250px;
 
}

.router-box {
  @apply text-center;
}

.router-box a {
  @apply block py-2 font-bold bg-green-200 text-gray-800;
  transition: all ease .1s;
}
.router-box a:hover{
  @apply bg-green-100;
}

.router-box a.router-link-active {
  @apply text-red-700;
}
</style>
