<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <template>
      <div class="product" :key="product._id">
        <p class="product_name">产品名称:{{product.name}}</p>
      </div>
    </template>
  </div>
</template>
<script>
export default {
  name: "Cart",
  data() {
    return {
      msg: "Welcome to the Cart Page"
    };
  }
};
</script>