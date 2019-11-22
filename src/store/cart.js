import axios from 'axios';

export default {
  namespaced: true,
  state: {
    cart: {
      carts: [],
    },
  },
  actions: {
    getCart(context) {
      context.commit('LOADING', true, { root: true });
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      axios.get(url).then((response) => {
        if (response.data.data.carts) {
          // vm.cart = response.data.data;
          context.commit('CART', response.data.data);
        }
        context.commit('LOADING', false, { root: true });
        console.log('取得購物車', response.data.data);
      });
    },
    addtoCart(context, {id, qty}) {
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart`;
      context.commit('LOADING', true, { root: true });
      const item = {
        product_id: id,
        qty, //直接等於上方帶進來的參數
      };
      axios.post(api, {data: item}).then((response) => { //注意 參數是要寫成 {data: cart}
        console.log('加入購物車:', response);
        // vm.status.loadingItem = '';
        context.commit('LOADING', false, { root: true });
        context.dispatch('getCart');
        // vm.getCart();
      });
    },
    removeCart(context, id) {
      console.log('觸發removeCart');
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/cart/${id}`;
      context.commit('LOADING', true, { root: true });
      axios.delete(url).then((response) => {
        context.commit('LOADING', false, { root: true });
        context.dispatch('getCart'); // 重點！
        console.log('刪除購物車項目', response);
      });
    },
  },
  mutations: {
    CART(state, payload) {
      state.cart = payload;
    }
  },
  getters: {
    cart(state) {
      return state.cart; //把 cart 的資料取出來
    }
  },

};