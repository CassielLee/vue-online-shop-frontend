<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xa-12">
      <div class="form-froup">
        <label>Name</label>
        <input type="text" placeholder="Name" v-model="model.name" name="name" class="form-control" />
      </div>
      <div class="form-froup">
        <label>Price</label>
        <input
          type="number"
          placeholder="Price"
          v-model="model.price"
          name="price"
          class="form-control"
        />
      </div>
      <div class="form-froup">
        <label>Manufactures</label>
        <input
          type="text"
          placeholder="Manufactures"
          v-model="model.manufactures"
          name="manufactures"
          class="form-control"
        />
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "ProductForm",
  props: ["model", "manufactures", "isEditing"],
  methods: {
    saveProduct() {
      this.$emit("saveProduct", this.model);
    }
  },
  data() {}
};
</script>