<template>
  <div id="app">

    <router-view/>

  </div>
</template>

<script>
export default {
  name: 'App',

}
</script>

<style lang="scss">
  //@import "~bootstrap/scss/bootstrap" //方法一
  @import "./assets/all"; //方法二 把bootstrap放在 all.scss

</style>
