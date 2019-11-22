<template>
	<div>

		<div class="container">
			<Loading :active.sync="isLoading"></Loading>

			<!-- Programs -->
			<div class="row mt-4" >
				<div class="col-md-3">
          <!-- 左側選單 (List group) -->
          <div class="list-group sticky-top">
            <a class="list-group-item list-group-item-action"
              href="#" @click.prevent="searchText = item"
              :class="{ 'active': item === searchText}"
              v-for="item in categories" :key="item">
              <!-- <i class="fa fa-street-view" aria-hidden="true"></i> -->
              {{ item }}
            </a>
            <a href="#" class="list-group-item list-group-item-action"
              @click.prevent="searchText = ''"
              :class="{ 'active': searchText === ''}">
              All
            </a>
          </div>
        </div>
				<!-- 右欄列表 -->
				<div class="col-md-9">

					<!-- Search bar -->
					<div class="d-flex mb-4">
            <form class="form-inline my-3 my-lg-0">
              <div class="input-group">
                <input class="form-control" type="text" v-model="searchText"
                  placeholder="Search" aria-label="Search">
                <div class="input-group-append">
                  <button class="btn btn-outline-secondary" type="button"
                    @click="searchText = ''">
                    <i class="fa fa-times"></i>
                  </button>
                </div>
              </div>
            </form>
            <button class="btn btn-outline-primary ml-auto d-none d-md-block" type="button"
              @click="getProducts">
              Retrive new data
            </button>
          </div>
					<!-- 卡片 -->
					<div class="tab-pane" id="list-gift">

						<div class="row ">
							<div class="col-md-4 mb-4 " v-for="item in filterData" :key="item.id">
								<div class="card border-0 lineupCard" @click="getProduct(item.id)" >
									<div style="height: 150px; background-size: cover; background-position: center"
										:style="{backgroundImage: `url(${item.imageUrl})`}">
										
									</div>

									<div class="card-footer d-flex">
										<div class="lineupCard__title">
											{{ item.title }}
										</div>
										<!-- <button type="button" class="btn btn-outline-secondary btn-sm"
											@click.prevent="getProduct(item.id)">
											<i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
											查看更多
										</button>
										<button type="button" class="btn btn-outline-danger btn-sm ml-auto"
											@click="addtoCart(item.id)">
											<i class="fas fa-spinner fa-spin" v-if="status.loadingItem === item.id"></i>
											加到購物車
										</button> -->
									</div>
								</div>
							</div>
						</div>

					</div>
					
				</div>

			</div>
			
			<!-- Modal -->
			<div class="modal fade lineupModal" id="productModal" tabindex="-1" role="dialog"
				aria-labelledby="exampleModalLabel" aria-hidden="true">
				<div class="modal-dialog" role="document">
					<div class="modal-content">
						<div class="modal-header">
							<h5 class="modal-title" id="exampleModalLabel">{{ product.title }}</h5>
							<button type="button" class="close" data-dismiss="modal" aria-label="Close">
								<span aria-hidden="true">&times;</span>
							</button>
						</div>
						<div class="modal-body pt-0">
							<img :src="product.imageUrl" class="img-fluid" alt="">
							<p class="mt-3">{{ product.description }}</p>

						</div>

					</div>
				</div>
			</div>
			<!-- END Modal -->

		</div>

	</div>
</template>

<script>
	import $ from "jquery";
	import axios from 'axios'; 

	export default {
		name: 'LineupCards',
		data() {
			return {
        products: [],
				product: {}, //單一產品
				isLoading: false,
				status: {
					loadingItem: false,
				},
				searchText: '',
				categories: [],
      }
		},
		computed: {
			filterData() {
				const vm = this;
				if (vm.searchText) {
					return vm.products.filter((item) => {
						const data = item.title.toLowerCase().includes(vm.searchText.toLowerCase()) || item.category.toLowerCase().includes(vm.searchText.toLowerCase());
						return data;
					});
				}
				return this.products; // 如果沒有輸入搜尋字，就是完整的產品列表
			},

		},
		components: {

		},
		methods: {
			getProducts() {
				const vm = this;
				// const api = 'https://vue-course-api.hexschool.io/api/hexstore/products';
				const api = 'https://vue-course-api.hexschool.io/api/hexlineup/products/all';
				// const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/products`;
				vm.isLoading = true;

				this.$http.get(api).then((response) => { 
					vm.products = response.data.products;
					vm.getCategories();
					vm.isLoading = false;
				});
				// axios({
				// 	method: 'get',
				// 	url: api,
				// 	withCredentials: true,
				// 	responseType: 'json',
				// 	// data: someJsonData,
				// })
				// 	.then(function (response) {
				// 		// response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
				// 		vm.products = response.data.products;
				// 		vm.getCategories();
				// 		vm.isLoading = false;
				// });

			},
			getProduct(id){ // 單筆資料
				const vm = this;
				//const api = 'https://vue-course-api.hexschool.io/api/hexstore/product/:id';
				//const api = `https://vue-course-api.hexschool.io/api/hexstore/product/${id}`;
				const api = `https://vue-course-api.hexschool.io/api/hexlineup/product/${id}`;
				// const api = `${process.env.APIPATH}/api/${process.env.CUSTOMPATH}/product/${id}`;
				vm.isLoading = true;
				vm.status.loadingItem = id;
				this.$http.get(api).then((response) => { 
					console.log(response);

					vm.product = response.data.product; //1.先將資料讀取進來
					vm.isLoading = false;
					$('#productModal').modal('show'); //2. 打開 Modal
					vm.status.loadingItem = '';
				});

				
			},
			getCategories() { // 分類
				const vm = this;
				const categories = new Set();
				vm.products.forEach((item) => {
					categories.add(item.category);
				});
				vm.categories = Array.from(categories);
				console.log(vm.categories);
			},

		},
		created() {
			this.getProducts();
		},
	}
</script>

<style scoped>
	

</style>