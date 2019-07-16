<template>
  <div class="invest-wrap">
    <v-title t="投资领域" st="Investment field"></v-title>
    <ul class="invest-list-wrap">
      <li v-for="(item ,idx) in lists" :key="item.title" @click="linkTo(idx+1)">
        <h3>{{item.title}}</h3>
        <p>{{item.desc}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import pTitle from '@/components/home/title/pc'
export default {
	components: {
		vTitle: pTitle,
	},

	data() {
		return {
			lists: [
				{
					title: 'TMT',
					desc: '（科技、媒体、通信）',
				},
				{
					title: '消费&娱乐',
					desc: '',
				},
				{
					title: '大健康',
					desc: '',
				},
				{
					title: '区块链金融',
					desc: '',
				},
			],
		}
	},
	methods: {
		linkTo(typ) {
			this.$router.push({ path: '/about', query: { typ } })
		},
	},
}
</script>

<style lang="scss" scoped>
@import '../../../assets/css/variable.scss';
.invest-wrap {
	height: 100vh;
	padding-top: 234px;
	background: url('./pc-investment-bg.jpg');
	.invest-list-wrap {
		display: flex;
		justify-content: space-between;
		width: 1200px;
		margin: 76px auto 0;
		li {
			width: 274px;
			height: 370px;
			padding-top: 220px;
			background-color: #f2f2f2;
			text-align: center;
			background-repeat: no-repeat;
			background-size: 124px;
			background-position: center 80px;
			cursor: pointer;
			&:hover {
				background-color: #fff;
			}
			@for $i from 0 through 3 {
				&:nth-of-type(#{$i + 1}) {
					background-image: url('./#{$i}.png');
				}
			}
			h3 {
				position: relative;
				padding-top: 30px;
				font-size: 22px;
				&:after {
					content: '';
					position: absolute;
					top: 0;
					left: calc(50% - 16px);
					width: 34px;
					height: 5px;
					background-color: $themeColor;
				}
			}
			p {
				font-size: 20px;
				color: #999;
			}
		}
	}
}
</style>