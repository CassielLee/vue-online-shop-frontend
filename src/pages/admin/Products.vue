<template>
  <div>
    <div class="title">
      <h1>This is Admin</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "Products",
  computed: {
    products() {
      // 取到全局store中的值
      return this.$store.state.products[0];
    }
  }
};
</script>