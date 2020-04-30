import Vue from "vue";
import Vuex from "vuex";
import Router from "vue-router";
import Home from "@/pages/Home";
// import Admin from "@/components/Admin";
import Cart from "@/pages/Cart";

import Index from "@/pages/admin/Index";
import New from "@/pages/admin/New";
import Products from "@/pages/admin/Products";
import Edit from "@/pages/admin/Edit";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/admin",
      name: "Admin",
      component: Index,
      children: [
        { path: "new", name: "New", component: New },
        { path: "edit/:id", name: "Edit", component: Edit },
        { path: "", name: "Products", component: Products }
      ]
    },
    { path: "/cart", name: "Cart", component: Cart }
  ]
});
