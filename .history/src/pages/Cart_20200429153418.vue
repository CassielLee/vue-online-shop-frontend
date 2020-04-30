<template>
  <div>
    <div class="title">
      <h1>{{msg}}</h1>
    </div>
    <template>
      <div class="product" :key="product._id">
        <p class="product_name">产品名称:{{product.name}}</p>
        <p class="product_description">介绍:{{product.description}}</p>
        <p class="product_price">价格:{{product.price}}</p>
        <p class="product.manufacturer">生产厂商：{{product.manufacturer}}</p>
        <img :src="product.image" alt class="product__image" />
        <button @click="removeFromCart(product._id)">从购物车中移除</button>
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
  },
  methods: {
    removeFromCart(productId) {}
  }
};
</script>