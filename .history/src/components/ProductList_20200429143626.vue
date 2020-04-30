<template>
  <div>
    <div class="products">
      <div class="container">This is ProuctList</div>
      <template v-for="product in products">
        <div :key="product._id" class="product"></div>
      </template>
    </div>
  </div>
</template>