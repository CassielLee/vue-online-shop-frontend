import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 购物车
    cart: [],
    showLoader: false,
    // 商品
    product: {}
  }
});
