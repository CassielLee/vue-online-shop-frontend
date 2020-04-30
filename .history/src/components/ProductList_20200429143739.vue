<template>
  <div>
    <div class="products">
      <div class="container">This is ProuctList</div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <p class="product_name">产品名称:{{product.name}}</p>
          <p class="product_description">介绍:{{product.description}}</p>
        </div>
      </template>
    </div>
  </div>
</template>