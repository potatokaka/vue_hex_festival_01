<template>
  <div>

    <!-- <nav class="col-md-2 d-none d-md-block bg-light sidebar"> -->
    <nav class="col-md-2 bg-light sidebar">
      <div class="sidebar-sticky mt-5">

        <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>Admin</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="flex-column mb-2">
          <li class="nav-item">
            <router-link to="/admin/products" class="nav-link" >
              <i class="fas fa-box-open"></i>
              Product List
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/orders" class="nav-link">
              <i class="fas fa-clipboard-list"></i>
              Order List
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin/coupons" class="nav-link">
              <i class="fas fa-ticket-alt"></i>
              Coupon
            </router-link>
          </li>

          <span class="px-3 mt-3 d-flex">LINEUP</span>

          <li class="nav-item">
            <router-link to="/admin/lineupList" class="nav-link">
              <i class="fas fa-ticket-alt"></i>
              Lineup List
            </router-link>
          </li>

        </ul>

        <!-- <h6 class="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
          <span>模擬功能</span>
          <a class="d-flex align-items-center text-muted" href="#">
            <span data-feather="plus-circle"></span>
          </a>
        </h6>
        <ul class="nav flex-column mb-2">
          <li class="nav-item">
            <router-link to="/customer_order" class="nav-link">
              <i class="fas fa-shopping-cart"></i>
              模擬訂單
            </router-link>
          </li>
        </ul> -->

      </div>
    </nav>
  </div>
</template>