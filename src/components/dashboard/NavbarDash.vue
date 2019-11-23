<template>
  <div>
    
    <nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
      <div class="d-flex align-items-center">
        <router-link to="/" class="">
          <img class="p-2" src="@/assets/images/logo_nomads_01_white.svg" alt="" width="80px" >
        </router-link>
        
        <router-link to="/" class="navbar-brand col-sm-3 col-md-2 mr-0">
          <small>Nomads Festival</small>
        </router-link>
      </div>

      <!-- <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search"> -->
      <ul class="navbar-nav px-3">
        <li class="nav-item text-nowrap">
          <a class="nav-link" href="#" @click.prevent="signout">Sign out</a>
        </li>
      </ul>
    </nav>
    
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    signout() {
      const vm = this;
      const api = `${process.env.APIPATH}/logout`; //登出的 API 路徑
        this.$http.post(api).then((response) => {
          //console.log(response.data);
          if (response.data.success) { //如果確認登出成功後，就把頁面切到 login 頁
            vm.$router.push('/login');
          }
        });
    },
  }
}
</script>