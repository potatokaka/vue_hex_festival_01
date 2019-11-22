<template>
  <div>
    
    <div id="container">
        <section class="sceneContainer">
            <div id="triggerOne" class="triggerShape">
                <p style="position: fixed; top:10px; left: 10px;">Take on me!</p>
            </div>
        </section>
        <section class="sceneContainer">
            <div id="triggerTwo" class="triggerShape">
                <p>Take me on!</p>
            </div>
        </section>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Test',
  data() {
    return {
      
    };
  },
  computed: {
    
  },
  methods: {
   
  },
  mounted() {
    // Create a scroll container
    var controller = new ScrollMagic.Controller();

    // Create a scene for first trigger and set properties via an object
    var sceneOne = new ScrollMagic.Scene({
        // duration: 500
        duration: 500
    }).setPin('#triggerOne');


    // Create a Scene for second trigger and set properties via an object
    var sceneTwo = new ScrollMagic.Scene({
        triggerElement: '#triggerTwo',
        duration: 460
    }).setPin('#triggerTwo');

    // Add scenes to controller
    controller.addScene([
        sceneOne,
        sceneTwo
    ]);
  
  },
  created() {

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
    font-family: 'Oswald', sans-serif;
}

#container {
    /* height: 2500px; */
    border: 1px solid black;
    /* background-image: url('../images/scaler_bg.png'); */
    background-image: linear-gradient(antiquewhite, orange);
}


.triggerShape {
    display: inline-block;
    background-color: aliceblue;
    position: relative;
    left: 45%;
    border: 1px solid antiquewhite;
    text-align: center;
    border-radius: 8px;
    min-width: 190px;
    height: 50px;
    margin: 0 auto 25px auto;
}

#triggerTwo {
    top: 500px;
}

footer {
    text-align: center;
}

</style>
