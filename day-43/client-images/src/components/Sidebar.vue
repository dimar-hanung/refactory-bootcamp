<template>
  <div class="sidebar" id="nav">
    <h1>{{user_login}}</h1>
    <div class="m-5">
      <img src="@/assets/logo.png" alt="" />
    </div>
    <router-link to="dashboard" class="side-lists">
      Dashboard
    </router-link>
    <router-link to="product" class="side-lists">
      Product
    </router-link>
    <router-link to="user" class="side-lists">
      User
    </router-link>
    <router-link to="login">Log Out</router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  props: {
    user_login: String
  }
};
</script>


<style>

.sidebar{
    @apply bg-white;
    max-width:300px;
    min-width: 250px;
    height: 100%;
}
.side-lists{
    @apply block bg-gray-200 py-3 my-2;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}



#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
