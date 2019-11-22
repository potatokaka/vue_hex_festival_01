<template>
  <div>
    <Navbar></Navbar>

    <section id="first-section" class="container-fluid">
      
      <div class="hero-wrapper">
        <div class="title">Going Wild.</div>
        <div class="images">
          <div class="image-wrapper" id="first"></div>
          <div class="image-wrapper" id="second"></div>
          <div class="image-wrapper" id="third"></div>
          <div class="image-wrapper" id="forth"></div>
          <div class="image-wrapper" id="fifth"></div>
        </div>
        
        <div class="content">
          <div class="content-wrapper">
            
            <div class="container headline__wrapper">
              <h2 class="ticket__headline">
              <span class="ticket__sub ticket__sub__blue">A Place Like No Other</span>
              </h2>
              <div class="header-subtitle">— festival nomads —</div>
            </div>
            
            <div class="content-images">
              <div class="content-image-wrapper one">
                <img src="../assets/images/thumb_01-1.jpg"/>
              </div>
              <div class="content-image-wrapper two">
                <img src="../assets/images/thumb_02-2.jpg"/>
              </div>
              <div class="content-image-wrapper three">
                <img src="../assets/images/thumb_03.jpg"/>
              </div>
              <div class="content-image-wrapper four">
                <img src="../assets/images/thumb_04.jpg"/>
              </div>
            </div>
            <p class="text">
              A multi award-winning music, arts and culture festival, located in our magical coastal home of Portmeirion, with an eclectic mix of iconic and the best new artists. Our main stage is a Mediterranean-inspired, Grade II-listed fantasy village, surrounded by estuary, mountains and woodlands. During the festival, the village and surrounding woodlands come alive as a unique series of surreal and inspiring venues.
            </p>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script>
import Navbar from "./Navbar";

export default {
  name: 'HomeBanner',
  components: {
    Navbar,
  },
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  methods: {
   
  },
   mounted() {

    let controller = new ScrollMagic.Controller();

    let timeline = new TimelineMax();
    timeline
    // .to('.logo img', 6, {
    //     width: '120px'
    // }, '-=1')
    .to('#fifth', 6, {
        y: -500
    }, '-=6')
    .to('#forth', 6, {
        y: -400
    }, '-=6')
    .to('#third', 6, {
        y: -300
    }, '-=6')
    .to('#second', 6, {
        y: -200
    }, '-=6')
    .to('#first', 6, {
        y: -100
    }, '-=6')
    .to('.content, .blur', 6, {
        // top: '0%',
        top: '35%',
    }, '-=6')
    // .to('.title, nav, .footer-wrapper', 6, {
    //     y: -600,
    // }, '-=6')  
    .to('.headline__wrapper', 3, {
        // y: -80,
        y: -50,
    }, '-=4')
    .from('.one', 3, {
        top: '0px',
        autoAlpha: 0
    }, '-=4')
    .from('.two', 3, {
        top: '0px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.three', 3, {
        top: '0px',
        autoAlpha: 0
    }, '-=3.5')
    .from('.four', 3, {
        top: '0px',
        autoAlpha: 0
    }, '-=3.5')
    .to('.text', 3, {
        // y: 60,
        y: 70,
        //autoAlpha: 0,
    }, '-=4')

    let scene = new ScrollMagic.Scene({
        triggerElement: 'section',
        duration: '200%',
        triggerHook: 0
    })
    .setTween(timeline)
    .setPin('section')
    // .addIndicators()
    .addTo(controller);

  },
  created() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
*{
    // margin: 0;
    padding-left: 0;
    padding-right: 0;
}
</style>
