<template>
  <div>
    <div class="title">
      <!-- <h1>{{message}}</h1> -->
      <h1>In Stock</h1>
      <product-list />
    </div>
  </div>
</template>
<script>
import ProductList from "@/components/products/ProductList";
export default {
  name: "home",
  data() {
    return {
      message: "Welcome to Your Vue.js App"
    };
  },
  components: {
    "product-list": ProductList
  }
};
</script>
<style scoped>
</style>