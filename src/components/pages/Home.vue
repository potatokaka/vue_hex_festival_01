<template>
  <div>
    <loading :active.sync="isLoading"></loading>
    <!-- <Navbar></Navbar> -->
    <Alert/>

    <HomeBanner />

    <!-- LINE UP -->
    <div id="home-lineup">
      
      <div id="home-lineup__overlay"></div>

      <div class=" lazyloaded" id="home-lineup__img">
        <picture style="display: none;">
          <source>
          <img class="lazyautosizes lazyloaded" sizes="1181px" alt="festival" >
       </picture>
      </div>

      <div id="home-lineup__title-wrapper">
        <h2 id="home-lineup__title">
          <span>Music </span>
          <span>experiences </span>
          <span>& activities </span>
          <span>culture </span>
          <span>food & drink.</span>
        </h2>

        <button type="submit" class="add-to-cart cta cta-box mt-3">
          <router-link to='/lineup' class="nav__link">
            Line Up
          </router-link>
        </button>
      </div>
    </div>

    <!-- TICKET Cards -->
    <section class="tickets">
      <div class="container">
        <h2 class="ticket__headline">
          <span class="ticket__sub">The Funkest Festival</span>
        </h2>
        <div class="header-subtitle">— festival nomads —</div>

        <!-- DECORATION ELEMENTS -->
        <div class="home__section-1__top">
          <div class="home__section-1__letter">
            <img src="@/assets/images/element_02.png" alt="element">
          </div>
        </div>

        <TicketCards/>

      </div>
    </section>

    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from "../Navbar";
import HomeBanner from "../HomeBanner";
import Footer from "../Footer";
import Alert from "../ALertMessage";
import TicketCards from '../TicketCards';

export default {
  name: "Tickets",
  components: {
    //Pagination,
    Navbar,
    HomeBanner,
    Alert,
    TicketCards,
    Footer,
  },
  data() {
    return {
      //products: [], //空陣列
      //pagination: {}, //空物件
      tempProduct: {}, //空物件
      isNew: false,
      isLoading: false,
    };
  },
  methods: {
    
  },
  created() {
    // this.getProducts();
  }
};
</script>
<style scoped lang="sass">


</style>

