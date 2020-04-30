import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 购物车
    cart: [],
    showLoader: false,
    // 选择的商品
    product: {},
    // 所有商品
    products: [{ name: "MAC" }]
  }
});
