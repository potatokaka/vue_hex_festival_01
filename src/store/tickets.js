import axios from 'axios';

export default {
  namespaced: true, // actions, mutations, getters 會變成區域變數
  state: {
    tickets: [],
  },
  actions: {
    getTickets(context) {
      //const api = 'https://vue-course-api.hexschool.io/api/hexfestival/products?page=1';
      //const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products?page=${page}`;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;

      //vm.isLoading = true; //加入 Loading
      context.commit('LOADING', true, { root: true });
      axios.get(api).then((response) => { 
        // vm.isLoading = false;
        // vm.products = response.data.products; //把資料放入到data去
        context.commit('TICKETS', response.data.products); //把資料放入到data去
        context.commit('LOADING', false, { root: true });
      });
    },
  },
  mutations: {
    TICKETS(state, payload) {
      state.tickets = payload;
    },
  },
  getters: {
    tickets(state) {
      return state.tickets;
    },
  },

};