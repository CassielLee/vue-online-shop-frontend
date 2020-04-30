import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "@/components/HelloWorld";
import HelloTest from "@/components/HelloTest";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: { default: HelloWorld, test: HelloTest }
    }
  ]
});
