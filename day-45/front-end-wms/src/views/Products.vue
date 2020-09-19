<template>
  <div class="container wrap">
    <div class="w-full">
        <div class="flex products-menu">
            
          <router-link to="/products/main">
           Product
          </router-link>
          <router-link to="/products/in">
           In
          </router-link>
          <router-link to="/products/out">
           Out
          </router-link>
        </div>
        <router-view />
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.wrap {
    @apply mx-auto mt-10;
    height: max-content;
    min-height: 100%;
}
.products-menu a{
    @apply px-2 mr-2 bg-green-300 font-bold;
}
.products-menu a.router-link-exact-active{
    @apply text-green-700;
}

</style>
