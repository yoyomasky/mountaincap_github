<template>
  <div class="header-wrap">
    <router-link to="/">
      <img :src="logoImg" />
    </router-link>
    <nav>
      <router-link to="/">首页</router-link>
      <a href="javascript:;" @click="moveToSlide(0)">公司简介</a>
      <a href="javascript:;" @click="moveToSlide(3)">联系我们</a>
    </nav>
  </div>
</template>

<script>
import logoImg from './logo.png'
export default {
	data() {
		return {
			logoImg,
		}
	},
	computed: {
		swiper() {
			return this.$parent.$parent.$parent.$refs.mouseWheel.swiper
		},
	},
	methods: {
		moveToSlide(idx) {
			this.swiper.slideTo(idx, 500, false)
		},
	},
}
</script>

<style lang="scss" scoped>
.header-wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 126px;
	padding: 0 160px;
	background-color: #fff;
	img {
		width: 280px;
		height: 65px;
	}
	nav {
		display: flex;
		height: 30px;
		a {
			margin-left: 46px;
			font-size: 24px;
			font-weight: bold;
			line-height: 30px;
		}
	}
}
</style>