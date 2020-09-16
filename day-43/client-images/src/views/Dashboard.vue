<template>
  <div class="dashboard">
    <div class="box-wrap w-full mx-auto">
      <div class="box-item">
        <div>Total All Product</div>
        <div class="font-bold">18</div>
      </div>
      <div class="box-item">
        <div>Total Product In</div>
        <div class="font-bold">18</div>
      </div>
      <div class="box-item">
        <div>Total Product Out</div>
        <div class="font-bold">18</div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dashboard {
  @apply grid;
  place-items: center;
  height: 100%;
}

.box-item {
  @apply p-3 border border-blue-600 w-full mx-auto my-3 rounded;
  max-width: 250px;
}
</style>
