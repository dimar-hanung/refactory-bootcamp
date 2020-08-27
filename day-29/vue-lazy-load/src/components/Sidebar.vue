<template>
  <div class="sidebar-container">
    <div class="sidebar-box">
      <router-view name="popular" :route="this[this.$route.name.toLowerCase()]" />
      <div class="content">
        
        <ul>
            <li>
                <a href="#">Link 1</a>
            </li>
            <li>
                <a href="#">Link 2</a>
            </li>
            <li>
                <a href="#">Link 3</a>
            </li>
            <li>
                <a href="#">Link 4</a>
            </li>
        </ul>

      </div>
    </div>
    <div class="sidebar-box">
      <h2>About</h2>
      <div class="content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea veritatis
        et maiores doloremque, officia soluta cum at rem distinctio! Ab nulla
        est rerum! Ex doloribus eveniet, vitae et alias qui!
      </div>
    </div>
  </div>
</template>
<style scoped>
.sidebar-container{
    @apply text-left px-3 py-10;
    background:#e5e5e5;
    min-width: 300px;
    width:300px;
    height: auto;
}
.sidebar-box{
    @apply my-2;
}
.sidebar-box h2{
    @apply font-bold border-b;
}
</style>