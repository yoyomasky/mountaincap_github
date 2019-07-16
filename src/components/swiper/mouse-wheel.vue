<!--
 * @Author: MF
 * @Date: 2019-07-16 10:17:39
 * @LastEditors: MF
 * @LastEditTime: 2019-07-16 10:47:44
 * @滚屏翻页
 -->

<template>
  <swiper :options="swiperOption" class="mouse-wheel" ref="mouseWheel">
    <slot></slot>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import swiper from '@/plugin/swiper'
export default {
	name: 'mouseWheel',
	data() {
		return {
			swiperOption: {
				direction: 'vertical',
				slidesPerView: 1,
				mousewheel: true,
				speed: 400,
				pagination: {
					el: '.swiper-pagination',
					clickable: true,
				},
			},
		}
	},
}
</script>

<style lang="scss">
$color: #d2d4d6;
.mouse-wheel {
	height: 100vh;
	.swiper-pagination {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	.swiper-pagination-bullet {
		width: 12px;
		height: 12px;
		background-color: $color !important;
		opacity: 1 !important;
	}
	.swiper-pagination-bullet-active {
		width: 20px;
		height: 20px;
		border: 3px solid $color;
		background: none !important;
	}
}
</style>
