<template>
  <form @submit.prevent="saveProduct">
    <div class="col-lg-5 col-md-5 col-sm-12 col-xa-12">
      <div class="form-froup">
        <label>Name</label>
        <input type="text" placeholder="Name" v-model="mode.name" name="name" class="form-control" />
      </div>
    </div>
  </form>
</template>
<script>
export default {
  name: "ProductForm",
  props: ["model", "manufactures", "isEditing"],
  data() {}
};
</script>