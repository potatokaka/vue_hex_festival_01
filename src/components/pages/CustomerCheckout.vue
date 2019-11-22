<template>
  <div class="customOrders">

    <Navbar></Navbar>
    <div class="container pb-5">
      <h2 class="text-center pt-5">Payment Confirmation</h2>
      
      <div class="my-5 row justify-content-center">
        <form class="col-md-6" @submit.prevent="payOrder">
          <table class="table">
            <thead>
              <th>Item</th>
              <th>Unit</th>
              <th>Price</th>
            </thead>
            <tbody>
              <tr v-for="item in order.products" :key="item.id">
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                <td class="align-middle text-right">{{ item.final_total | currency }}</td>
              </tr>
            </tbody>
            <tfoot>
              <tr>
                <td colspan="2" class="text-right">Total</td>
                <td class="text-right">{{ order.total  | currency}}</td>
              </tr>
            </tfoot>
          </table>

          <table class="table">
            <tbody>
              <tr>
                <th width="100">Email</th>
                <td>{{ order.user.email }}</td>
              </tr>
              <tr>
                <th>Name</th>
                <td>{{ order.user.name }}</td>
              </tr>
              <tr>
                <th>Phone Number</th>
                <td>{{ order.user.tel }}</td>
              </tr>
              <tr>
                <th>Address</th>
                <td>{{ order.user.address }}</td>
              </tr>
              <tr>
                <th>Payment</th>
                <td>
                  <span v-if="!order.is_paid">Unpaid</span>
                  <span v-else class="text-success">Payment Completed.</span>
                </td>
              </tr>
            </tbody>
          </table>
          <div class="text-right" v-if="order.is_paid === false">
            <button class="btn btn-secondary">GO pay</button>
          </div>
        </form>
      </div>

    </div>
    
    <Footer />
    
  </div>
</template>

<script>
import Navbar from "../Navbar";
import Footer from "../Footer";

export default {
  data () {
    return {
      orderId: '', //先用 creted()取得路由上的 orderId
      order: {
        user: {},
      },
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    getOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order/${vm.orderId}`; //注意是 vm.orderId
      vm.isLoading = true;
      this.$http.get(api).then((response) => { 
        //console.log(response);
        vm.order = response.data.order; //1.先將資料讀取進來
        vm.isLoading = false;
      });
    },
    payOrder() {
      const vm = this;
      const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/pay/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.post(api, vm.orderId).then((response) => { 
        console.log(response);
        if (response.data.success) { //成功送出付款訂單後，再重新去取得資料，畫面上才會顯示”付款成功”
          vm.getOrder();
        }
        vm.isLoading = false;
      });
    },
  },
  created() {
    this.orderId = this.$route.params.orderId; //直接去抓 URL 帶的 orderId
    //console.log(this.orderId);
    this.getOrder();
  }
};
</script>