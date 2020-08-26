<template>
  <div class="sidebar-container">
    <div class="sidebar-box">
      <h2>Sidebar Links</h2>
      <div class="content">
        <a href="#">Link 1</a>
      </div>
    </div>
    <div class="sidebar-box">
      <h2>Sidebar Links</h2>
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
}
.sidebar-box{
    @apply my-2;
}
.sidebar-box h2{
    @apply font-bold border-b;
}
</style>