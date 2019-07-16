<template>
  <div class="about-info">
    <select v-model="optionIdx" @change="optionTyp">
      <option value="0">全部</option>
      <option v-for="(item,idx) in optionList" :value="idx+1" :key="item">{{item}}</option>
    </select>

    <div class="company-list">
      <div v-for="(items,idx1) in listData" :key="idx1" :class="{isFirstRow:idx1===0}">
        <div
          class="list-item"
          v-for="(item,idx2) in items"
          :class="{active:idxOfList[0]===idx1 &&idxOfList[1]===idx2}"
          :key="item.url"
          v-show="item.show"
          @click="listClick(idx1,idx2)"
        >
          <img v-if="item.active" :src="item.activeUrl" alt />
          <img v-else :src="item.url" alt />
        </div>

        <transition name="list">
          <div class="company-list-detail" v-if="idx1===idxOfList[0]">
            <h3>{{items[idxOfList[1]]['h3']}}</h3>
            <h4>{{items[idxOfList[1]]['h4']}}</h4>
            <p>{{items[idxOfList[1]]['p1']}}</p>
            <p>{{items[idxOfList[1]]['p2']}}</p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { getQuery } from '@/assets/js/utils'
import { get } from 'http'
export default {
	data() {
		return {
			//idxOfList: [0, 0],
			idxOfList: [],
			listData: [
				[
					{
						url: require('./1.png'),
						activeUrl: require('./a1.jpg'),
						active: false,
						h3: '佳都科技',
						h4: 'Tmt(科技、媒体与通信）',
						p1: '中国人工智能技术与产品提供商',
						p2: '上海证券交易所A股主板上市企业,股票代码：600728',
						show: true,
						type: 1,
					},
					{
						url: require('./2.png'),
						activeUrl: require('./a2.jpg'),
						active: false,
						h3: '量子生物',
						h4: '大健康',
						p1: '以生物技术创新为驱动力的全球健康产业创业型企业',
						p2: '深圳证券交易所上市企业,股票代码：300149',
						show: true,
						type: 2,
					},
					{
						url: require('./8.png'),
						activeUrl: require('./a8.png'),
						active: false,
						h3: 'XVG',
						h4: '区块链金融',
						p1: '基于比特币技术的开源加密货币',
						p2: '',
						show: true,
						type: 1,
					},
					{
						url: require('./4.png'),
						activeUrl: require('./a4.png'),
						active: false,
						h3: 'IOST',
						h4: '区块链金融',
						p1: '成为未来在线服务的底层架构',
						p2: 'https://iost.io/cn/',
						show: true,
						type: 4,
					},
				],
				[
					{
						url: require('./5.png'),
						activeUrl: require('./a5.png'),
						active: false,
						h3: 'eosio',
						h4: '区块链金融',
						p1: '基于EOS软件项目之上发布的代币，被称为区块链3.0',
						p2: '',
						show: true,
						type: 1,
					},
					{
						url: require('./6.png'),
						activeUrl: require('./a6.jpg'),
						active: false,
						h3: 'Ethereum',
						h4: '区块链金融',
						p1: '截至2018年2月，以太币是市值第二高的加密货币，仅次于比特币。',
						p2: '',
						show: true,
						type: 1,
					},
					{
						url: require('./7.png'),
						activeUrl: require('./a7.png'),
						active: false,
						h3: 'Neo',
						h4: '区块链金融',
						p1: '一种智能经济分布式网络',
						p2: '',
						show: true,
						type: 1,
					},
				],
			],
			optionList: ['TMT', '消费&娱乐', '大健康', '区块链金融'],
			optionIdx: 0,
		}
	},
	mounted() {
		const { typ, id } = getQuery()
		if (typ) {
			this.optionIdx = typ
			this.optionTyp()
		}
		if (id) {
			const idArr = id.split('')
			console.log(idArr)
			this.listClick(...idArr)
		}
	},
	methods: {
		optionTyp() {
			// select更新数据
			const _typ = this.optionIdx * 1
			// this.listData.map(items => {
			// 	return items.map(item => {
			// 		if (_typ === 0) {
			// 			item.show = true
			// 		} else {
			// 			item.show = false
			// 			if (item.type === _typ) {
			// 				item.show = true
			// 			}
			// 		}
			// 		return item
			// 	})
			// })
		},
		listClick(idx1, idx2) {
			idx1 = idx1 * 1
			idx2 = idx2 * 1
			this.listToInit()
			this.idxOfList = [idx1, idx2]
			this.listData[idx1][idx2]['active'] = true
		},
		listToInit() {
			this.idxOfList = []
			this.listData.map(items => {
				return items.map(item => (item.active = false))
			})
		},
	},
}
</script>

<style lang="scss" scoped>
.about-info {
	width: 960px;
	margin: 40px auto;
	select {
		width: 200px;
		height: 40px;
		margin-bottom: 36px;
		text-indent: 0.5em;
		border-radius: 6px;
	}
	.company-list > div {
		display: flex;
		flex-wrap: wrap;
		&.isFirstRow {
			.list-item {
				border-top: none;
			}
		}
		.list-item {
			display: flex;
			justify-content: center;
			align-items: center;
			width: 25%;
			height: 90px;
			border-left: 1px solid #d5d5d5;
			border-top: 1px solid #d5d5d5;
			cursor: pointer;
			&:nth-child(4n-3) {
				border-left: none;
			}
			background-color: #aeaeae;
			&.active {
				background-color: #fff;
			}
			img {
				max-width: 80%;
				max-height: 80%;
			}
		}
	}
	.company-list-detail {
		padding-left: 30px;
		height: 180px;
		overflow: hidden;
		h3 {
			padding-top: 26px;
			font-size: 16px;
			line-height: 2;
		}
		h4,
		p {
			color: #666;
			font-size: 12px;
		}
		h4 {
			width: 208px;
			margin-bottom: 8px;
			line-height: 26px;
			border-bottom: 2px solid #e9dac8;
		}
		p {
			line-height: 16px;
			&:last-child {
				padding-bottom: 50px;
			}
		}
	}
	.list-enter-active,
	.list-leave-active {
		transition: all 0.5s;
	}
	.list-enter,
	.list-leave-to {
		height: 0;
	}
}
</style>