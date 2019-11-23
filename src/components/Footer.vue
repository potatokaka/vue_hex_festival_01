<template>
  <div>
    
    <footer id="footer">
      <div id="footer__inner">

         <nav id="footer__nav">
          <ul>
            <li class="footer__nav__item">
              <router-link to='/lineup' class="footer__nav__link">
                LINE UP
              </router-link>
            </li>
            <li class="footer__nav__item">
              <router-link to='/' class="footer__nav__link">
                EXPERIENCES
              </router-link>
            </li>
            <li class="footer__nav__item">
              <router-link to='/' class="footer__nav__link">
                ABOUT
              </router-link>
            </li>
            <li class="footer__nav__item">
              <router-link to='/' class="footer__nav__link">
                INFO & TRAVEL
              </router-link>
            </li>
          </ul>

          <div id="footer__social">
            <div class="footer__social__item">
              <a class="footer__social__link" href="#" target="_blank">
                <i class="fab fa-twitter"></i>
              </a>
            </div>
            <div class="footer__social__item">
              <a class="footer__social__link" href="#" target="_blank">
                <i class="fab fa-instagram"></i>
              </a>
            </div>
            <div class="footer__social__item">
              <a class="footer__social__link" href="#" target="_blank">
                <i class="fab fa-facebook"></i>
              </a>
            </div>
          </div>
          
        </nav>

        <div id="footer__logo">
          <!-- <a href="/">
            <img src="@/assets/images/logo_nomads_01_white.svg" alt="logo"/>
          </a> -->
          <router-link to='/' class="nav__link">
            <img src="@/assets/images/logo_nomads_01_white.svg" class="logo-main" alt="logo"/>
          </router-link>

          <a id="footer__credits" class="mt-3" href="/">© 2019 Nomads Festival</a>
        </div>

      </div>

    </footer>

  </div>
</template>

<script>

</script>

<style scoped>

</style>
