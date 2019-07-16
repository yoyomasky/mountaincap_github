<template>
  <div class="service-wrap">
    <v-title t="我们的服务" st="Our Service"></v-title>
    <ul class="service-list">
      <li>战略发展</li>
      <li>品牌建设</li>
      <li>全球扩张</li>
      <li>市场营销</li>
      <li>人才引进</li>
      <li>财税管理</li>
    </ul>
    <p class="service-txt">除资本支持外，大山资本团队还在战略发展、品牌建设、全球扩张、市场营销、人才引进、财税管理等多方面助力企业发展，帮助被投企业获得成功。</p>
  </div>
</template>
 
<script>
import pTitle from '@/components/home/title/pc'
export default {
	components: {
		vTitle: pTitle,
	},
}
</script>

<style lang="scss" scoped>
.service-wrap {
	height: 100vh;
	padding: 240px 0;
}
.service-list {
	display: flex;
	width: 1200px;
	margin: 80px auto 0;
	li {
		flex: 1;
		padding-top: 80px;
		font-size: 22px;
		line-height: 50px;
		text-align: center;
		background-repeat: no-repeat;
		background-position: center top;
		background-size: 80px;
		@for $i from 1 through 6 {
			&:nth-of-type(#{$i}) {
				background-image: url('./icon-#{$i}.jpg');
			}
		}
	}
}
.service-txt {
	width: 1100px;
	margin: 60px auto 30px;
	font-size: 20px;
	line-height: 1.5;
}
</style>