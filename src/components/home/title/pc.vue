<template>
  <div class="home-title">
    <h3>{{t}}</h3>
    <h4>{{st}}</h4>
  </div>
</template>

<script>
export default {
	props: {
		t: {
			required: true,
		},
		st: {
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.home-title {
	text-align: center;
	h3 {
		font-size: 32px;
		font-weight: bold;
		line-height: 1;
		letter-spacing: 2px;
	}
	h4 {
		font-size: 20px;
		line-height: 2;
	}
}
</style>