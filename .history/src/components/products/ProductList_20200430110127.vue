<template>
  <div>
    <div class="products">
      <div class="container">This is ProuctList</div>
      <template v-for="product in products">
        <div :key="product._id" class="product">
          <p class="product_name">产品名称:{{product.name}}</p>
          <p class="product_description">介绍:{{product.description}}</p>
          <p class="product_price">价格:{{product.price}}</p>
          <p class="product.manufacturer">价格:{{product.manufacturer.name}}</p>
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
  // 调用生命周期函数
  created() {
    console.log("this.products");
    if (this.products.legth === 0) {
      this.$store.dispatch("allProducts");
    }
  },
  computed: {
    // 获取最新产品的信息
    products() {
      return this.$store.state.products;
    }
  },
  methods: {
    // 将产品添加到购物车
    addToCart(product) {
      console.log("---当前加入购物车的商品---", product);
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