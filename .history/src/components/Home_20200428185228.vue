<template>
  <div>
    <div class="title">
      <h1>{{message}}</h1>
    </div>
  </div>
</template>
<script>
export default {
  name: "home",
  data() {
    return {
      message: "Welcome to Your Vue.js App"
    };
  }
};
</script>
<style scoped>
ul {
  list-style: none;
}
</style>