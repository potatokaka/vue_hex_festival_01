<template>
  <div>

    <div id="login" class="container-fluid d-flex align-items-center">
      <form class="form-signin" @submit.prevent="signin">
        <div class="text-center">
          <router-link to='/' class="logo mx-auto" :class="{'nav-open' : hamburgerOpen}">
            <img class="mb-5 logo-main" src="@/assets/images/logo_nomads_01.svg" alt="" width="150px" >
          </router-link>
        </div>
        <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
        <label for="inputEmail" class="sr-only" >Email address</label>
        <input type="email" v-model="user.username" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" v-model="user.password" id="inputPassword" class="form-control" placeholder="Password" required>
        <div class="checkbox mb-3">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
        <p class="mt-5 mb-3 text-muted small">&copy; 2019 Nomads Festival</p>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      user: {
        username: '',
        password: '',
      },
    };
  },
  methods: {
    signin () {
      const vm = this;
      const api = `${process.env.APIPATH}/admin/signin`;
        this.$http.post(api, vm.user).then((response) => { //記得是用 "POST"，還要帶入 vm.user 的資料
          console.log(response.data);
          if (response.data.success) {
            vm.$router.push('/admin/products'); //如果換入成功，就會導入Dashboard頁
            //vm.$router.push('/admin'); //如果換入成功，就會導入Dashboard頁
          }
        });
    },
  },
};
</script>

<style scoped>

</style>