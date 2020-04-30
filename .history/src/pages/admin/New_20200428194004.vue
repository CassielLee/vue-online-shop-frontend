<template>
  <!-- <div>
    <div class="title">
      <h1>This is Admin/New</h1>
    </div>
  </div>-->
  <product-form @save-product="addProduct" :model="model" :isEditing="isEditing"></product-form>
</template>
<script>
import ProductForm from "@/components/products/ProductForm";
export default {
  name: "New"
};
</script>