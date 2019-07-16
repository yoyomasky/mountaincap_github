<template>
  <div class="banner-wrap">
    <div class="banner-bg"></div>
    <p class="banner-txt">大山资本的团队拥有成功的创业经历、丰富的运营经验以及深厚的技术背景，同时具有优秀的投资业绩。</p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.banner-wrap {
	height: calc(100vh - 128px);
}
.banner-bg {
	height: calc(100% - 86px);
	background: url('./pc-banner-bg.jpg') no-repeat center / cover;
}
.banner-txt {
	line-height: 86px;
	font-size: 20px;
	text-align: center;
}
</style>