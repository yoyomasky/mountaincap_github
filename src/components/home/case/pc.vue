<template>
  <div class="case-wrap">
    <v-title t="投资案例" st="Investment Case"></v-title>
    <ul class="case-list">
      <li
        v-for="item in caseLists"
        :key="item.class"
        :class="item.class"
        @click="linkTo(item.link)"
      ></li>
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
			caseLists: [
				{ class: 'c-0', link: '01' },
				{ class: 'c-1', link: '00' },
				{ class: 'c-2', link: '11' },
				{ class: 'c-3', link: '10' },
				{ class: 'c-4', link: '12' },
				{ class: 'c-5', link: '03' },
				{ class: 'c-6', link: '02' },
				{ class: 'c-7', link: '' },
			],
		}
	},
	methods: {
		linkTo(id) {
			this.$router.push({ path: '/about', query: { id } })
		},
	},
}
</script>

<style lang="scss" scoped>
.case-wrap {
	height: calc(100vh - 220px);
	padding-top: 150px;
	background: url('./case-pc-bg.jpg') no-repeat center top / cover;
	.home-title {
		color: #fff;
	}
	.case-list {
		width: 1200px;
		margin: 90px auto 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		li {
			width: 270px;
			height: 118px;
			margin-bottom: 20px;
			cursor: pointer;
			@for $i from 0 through 7 {
				&.c-#{$i} {
					background-image: url('./#{$i}.png');
					&:hover {
						background-image: url('./a#{$i}.jpg');
					}
				}
			}
		}
	}
}
</style>