<template>
  <div>
    <div class="products">
      <div class="container">This is ProuctList</div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <p class="product_name">产品名称:{{product.name}}</p>
          <p class="product_description">介绍:{{product.description}}</p>
          <p class="product_price">价格:{{product.price}}</p>
          <p class="product.manufacturer">价格:{{product.manufacturer}}</p>
          <img :src="product.image" alt class="product_image" />
          <button @click="addToCart(product)">加入购物车</button>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "product-list",
  computed: {
    products() {
      this.$store.commit("ADD_TO_CART", { product });
    }
  }
};
</script>
<style scoped>
.product {
  border-bottom: 1px solid black;
}
.product_image {
  width: 100px;
  height: 100px;
}
</style>