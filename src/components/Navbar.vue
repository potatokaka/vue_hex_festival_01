<template>
  <div>
    <Loading :active.sync="isLoading"></Loading>

    <!-- .nav-open 打開漢堡 -->
    <nav id="siteNav" class="nav mt-md-4 mt-sm-2" :class="{'nav-open' : hamburgerOpen}">
      <a class="logo mx-auto" href="/"> 
        <img src="@/assets/images/logo_nomads_01.svg" />
      </a>
      <div class="nav-toggle" @click="hamburgerToggle">
        <span class="nav-toggle__picto">
          <i class="fa fa-bars" v-if="!hamburgerOpen"></i>
          <i class="fas fa-times" v-if="hamburgerOpen"></i>
        </span>
      </div>

      <div class="nav__bg"></div>

      <ul class="nav__items">
        <li class="nav__item">
          <router-link to='/lineup' class="nav__link">
            LINE UP
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to='/' class="nav__link">
            EXPERIENCES
          </router-link>
        </li>
        <li class="nav__item">
        <router-link to='/' class="nav__link">
          ABOUT
          </router-link>
        </li>
        <li class="nav__item">
          <router-link to='/' class="nav__link">
            INFO & TRAVEL
          </router-link>
        </li>

      </ul>


      <!-- cart----------------------------------- -->
      <div class="dropdown cart ">
        <div class="cart-toggle d-flex align-items-center" data-toggle="dropdown" data-flip="false">
          <span class="cart-toggle__label mr-1">Cart</span>
          <span class="cart-toggle__count" v-if="cart.carts.length > 0">
            <div class="circle">
              {{cart.carts.length}}
            </div>
          </span>
        </div>

        <div class="dropdown-menu dropdown-menu-right p-3" style="min-width: 300px"
          data-offset="400">
          <h6>Your Cart</h6>
          <table class="table table-sm">
            <tbody>
              <tr v-for="item in cart.carts" :key="item.id" v-if="cart.carts.length">
                <td class="align-middle text-center">
                  <a href="#" class="text-muted" @click.prevent="removeCart(item.id)">
                    <i class="far fa-trash-alt"></i>
                  </a>
                </td>
                <td class="align-middle">{{ item.product.title }}</td>
                <td class="align-middle">{{ item.qty }}{{item.product.unit}}</td>
                <td class="align-middle text-right">{{item.total | currency}}</td>
              </tr>
            </tbody>
          </table>
          <!-- <button class="btn btn-primary btn-block" linkto="/checkout">
            <i class="fa fa-cart-plus" aria-hidden="true"></i> Checkout!
          </button> -->
          <router-link to='/checkout' class="btn btn-primary btn-block">
            <i class="fa fa-cart-plus" aria-hidden="true"></i> Checkout!
          </router-link>
        </div>

      </div>

    </nav>
    
    <div id="cart">
      <div id="cart__bg"></div>
    </div>

    <div></div>

  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import $ from "jquery";
import { TweenMax } from 'gsap';

export default {
  name: "Navbar",
  data() {
    return {
      hamburgerOpen: false,
    }
  },
  computed: {
    //...mapState(['cart'])
    ...mapGetters('cartModules', ['cart']),
    ...mapGetters(['isLoading']),
  },
  methods: {
    // signout() {
    //   const vm = this;
    //   const api = `${process.env.APIPATH}/logout`; //登出的 API 路徑
    //   this.$http.post(api).then(response => {
    //     //console.log(response.data);
    //     if (response.data.success) {
    //       //如果確認登出成功後，就把頁面切到 login 頁
    //       vm.$router.push("/login");
    //     }
    //   });
    // },
    hamburgerToggle() {
      this.hamburgerOpen = !this.hamburgerOpen;
    },
    removeCart(id) {
      this.$store.dispatch('cartModules/removeCart', id); //注意路徑
    },
    ...mapActions('cartModules', ['getCart']),
  },
  created() {
    this.getCart();
  },
  watch: { 
    cart() { //如果 cart 的資料有變化的時候
        //從(from) 0.5 到 一倍的大小
        //元件，時間，動作
        TweenMax.from(".circle", 1.5, {
          scale: 1.1,
          opacity: 1,
          backgroundColor: "#b5c4fd",
      })
    },
  }
};
</script>

<style scoped>

</style>
