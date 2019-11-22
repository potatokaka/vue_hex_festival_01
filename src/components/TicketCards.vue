<template>
	<div>
		<md-card>
			<md-card-actions>
				<md-button class="md-icon-button"
									target="_blank"
									href="https://github.com/surmon-china/vue-awesome-swiper/blob/master/examples/21-infinite-loop-with-slides-per-group.vue">
					<!-- <md-icon>code</md-icon> -->
				</md-button>
			</md-card-actions>
			<md-card-media>
				<!-- swiper -->
				<swiper :options="swiperOption">
						<swiper-slide v-for="(item) in tickets" :key="item.id" class="col-md-4 col-sm-12 d-flex align-items-stretch">
								<div class="card h-100 ticket__card">
									<img :src="item.imageUrl" class="card-img-top" alt="...">
									
										<div class="card-body">
											<h5 class="card-title">{{item.title}}</h5>
											<p class="card-text">{{item.description}}</p>
											<div class="ticket__price">${{item.price}}</div>
										</div>
									
									<div class="card-footer">
										<button type="submit" class="add-to-cart cta cta-box" 
											@click.prevent="addtoCart(item.id)">
											Reserve
										</button>

									</div>
								</div>
						</swiper-slide>

					<div class="swiper-pagination" slot="pagination"></div>
					<div class="swiper-button-prev" slot="button-prev">Back</div>
					<div class="swiper-button-next" slot="button-next">See more</div>
				</swiper>
			</md-card-media>
		</md-card>

	</div>
</template>

<script>
	import $ from "jquery";
	import { mapGetters, mapActions } from 'vuex';

	export default {
		name: 'TicketCards',
		computed: {
			// ...mapState(['cart'])
			...mapGetters('ticketModules', ['tickets']),
		},
		data() {
			return {
				swiperOption: {
          slidesPerView: 3,
					// spaceBetween: 30,
					spaceBetween: 10,
          freeMode: true,
          //slidesPerGroup: 3,
          // loop: true,
          // loopFillGroupWithBlank: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          },
          centeredSlides: false,
          breakpoints: {
            1024: {
              slidesPerView: 3,
              spaceBetween: 40
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20
            },
            320: {
              slidesPerView: 1,
              spaceBetween: 10
            }
          },
        },
				cart: {},
			};
		},
		components: {

		},
		methods: {
			bgcss(url) { //建立cover圖片的CSS
				return { //注意：要用”單引號”
					'background-image': 'url('+ url +')',
					'background-position': 'center center',
					'background-size': 'cover'
				}
			},
			...mapActions('ticketModules', ['getTickets']),
			addtoCart(id, qty = 1) {
				//this.$store.dispatch('addtoCart', {id, qty}) //如有二個參數要帶入時，可改成物件的格式
				this.$store.dispatch('cartModules/addtoCart', { id, qty });
			},

		},
		created() {
    	this.getTickets();
		},
	}
</script>

<style scoped>

</style>