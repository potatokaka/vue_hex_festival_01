<template>
  <div id="pageTickets" >
    <loading :active.sync="isLoading"></loading>
    <Navbar></Navbar>
    <Alert/>

    <header class="products__header">
      <div class="products__header__cover-wrapper">
        <!-- title -->
      </div>
    </header>


    <!-- TICKET Cards -->
    <LineupCards />

    <Footer />
  </div>
</template>

<script>
import $ from "jquery";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Alert from "../ALertMessage";
import LineupCards from '../LineupCards';

export default {
  name: "Lineup",
  components: {
    //Pagination,
    Navbar,
    Alert,
    LineupCards,
    Footer,
  },
  data() {
    return {

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
@keyframes fadein 
  from 
    opacity: 0
  to 
    opacity: 1

#pageTickets
  animation: fadein 2s

</style>

