<template>
  <div class="customOrders">

    <Navbar></Navbar>

    <div class="container pb-5">
      <div class="row pt-5">

        <!-- Cart -->
        <div class="col-md-6 right-line">
          <div class="mb-5 row col-md-12 justify-content-center">
            <table class="table mt-4">
              <thead>
                <th></th>
                <th>Item</th>
                <th>Unit</th>
                <th>Price</th>
              </thead>
              <tbody>
                <tr v-for="item in cart.carts" :key="item.id">
                  <td class="align-middle">
                    <button type="button" class="btn btn-outline-secondary btn-sm"
                      @click="removeCart(item.id)">
                      <i class="far fa-trash-alt"></i>
                    </button>
                  </td>
                  <td class="align-middle">
                    {{ item.product.title }}
                    <div class="text-success" v-if="item.coupon">
                      use coupon
                    </div>
                  </td>
                  <td class="align-middle">{{ item.qty }}/{{ item.product.unit }}</td>
                  <td class="align-middle text-right">{{ item.final_total | currency }}</td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <td colspan="3" class="text-right">Total</td>
                  <td class="text-right">{{ cart.total | currency }}</td>
                </tr>
                <tr v-if="cart.final_total !== cart.total">
                  <td colspan="3" class="text-right text-success">sale</td>
                  <td class="text-right text-success">{{ cart.final_total | currency }}</td>
                </tr>
              </tfoot>
            </table>
            <div class="input-group mb-3 input-group-sm">
              <input type="text" class="form-control" v-model="coupon_code" placeholder="Enter your coupon">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button" @click="addCouponCode">
                  Coupon code
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- END Cart -->

        <!-- Order Form -->
        <div class="col-md-6">
          <form class="col-md-11" @submit.prevent="createOrder">
            <div class="form-group">
              <label for="useremail">Email</label>
              <input type="email" class="form-control" name="email" id="useremail"
                v-model="form.user.email" placeholder="Email" 
                v-validate="'required|email'"
                :class="{'is-invalid' : errors.has('email')}">
              <span class="text-danger" v-if="errors.has('email')">{{ errors.first('email') }}</span>
            </div>
          
            <div class="form-group">
              <label for="username">Full Name</label>
              <input type="text" class="form-control" name="name" id="username"
                :class="{'is-invalid' : errors.has('name')}"
                v-model="form.user.name" placeholder="Full Name"  v-validate="'required'">
              <span class="text-danger" v-if="errors.has('name')">Please enter your full name</span>
            </div>
          
            <div class="form-group">
              <label for="usertel">Phone Number</label>
              <input type="tel" class="form-control" id="usertel"  name="tel"
                :class="{'is-invalid' : errors.has('tel')}"
                v-model="form.user.tel" placeholder="Phone Number" v-validate="'required|digits:10'">
              <span class="text-danger" v-if="errors.has('tel')">Please enter your phone number</span>
            </div>
          
            <div class="form-group">
              <label for="useraddress">Address</label>
              <input type="text" class="form-control" name="address" id="useraddress" 
                :class="{ 'is-invalid' : errors.has('address')}"
                v-model="form.user.address" placeholder="Address" v-validate="'required'">
              <span class="text-danger" v-if="errors.has('address')">Please enter your address</span>
            </div>
          
            <div class="form-group">
              <label for="comment">Something to say</label>
              <textarea name="" id="comment" class="form-control" cols="30" rows="10" v-model="form.message"></textarea>
            </div>
            <div class="text-right">
              <button class="btn btn-secondary">Check Out!</button>
            </div>
          </form>
        </div>
        <!-- END Order For -->

        </div>
    </div>

    <Footer />

  </div>
</template>

<script>
import $ from 'jquery';
import Navbar from "../Navbar";
import Footer from "../Footer";
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'CustomerOrder',
  components: {
    Navbar,
    Footer,
  },
  computed: {
    //...mapState(['cart'])
    ...mapGetters('cartModules', ['cart']),
    ...mapGetters(['isLoading']),
  },
  data () {
    return {
      coupon_code:'',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {

    removeCart(id) {
      this.$store.dispatch('cartModules/removeCart', id); //注意路徑
    },
    ...mapActions('cartModules', ['getCart']),

    addCouponCode() { //coupon本身要先建立，才能從API去查詢
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/coupon`;
      const coupon = {
        code: vm.coupon_code,
      };
      vm.isLoading = true;
      this.$http.post(url, { data: coupon }).then((response) => {
        console.log(response);
        vm.getCart();
        vm.isLoading = false;
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/order`;
      const order = vm.form; //直接去抓 vm 的就可以了
      //vm.isLoading = true;
      this.$validator.validate().then((result) => {  //整個表單會一次驗證，若Ok再送出
        if (result) {
          this.$http.post(url, { data: order }).then((response) => {
              console.log('訂單已建立', response);
              if (response.data.success) {
                vm.$router.push(`/checkout/${response.data.orderId}`); //若訂單成功建立，會轉至CustomerCheckout頁
              };
              vm.isLoading = false;
          });
        } else {
          console.log('欄位填寫不完整');
        }
      });
    },
  },
  created() {
    this.getCart();
  },
};
</script>