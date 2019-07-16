<template>
  <v-mouse-wheel>
    <swiper-slide>
      <v-header></v-header>
      <v-banner></v-banner>
    </swiper-slide>
    <swiper-slide>
      <v-investment></v-investment>
    </swiper-slide>
    <swiper-slide>
      <v-service></v-service>
    </swiper-slide>
    <swiper-slide>
      <v-case></v-case>
      <v-footer></v-footer>
    </swiper-slide>
  </v-mouse-wheel>
</template>
<script>
import vMouseWheel from '@/components/swiper/mouse-wheel'
import pHeader from '@/components/header/pc'
import pBanner from '@/components/home/banner/pc'
import pInvestment from '@/components/home/investment/pc'
import pService from '@/components/home/service/pc'
import pCase from '@/components/home/case/pc'
import pFooter from '@/components/footer/pc'
export default {
	components: {
		vMouseWheel,
		vHeader: pHeader,
		vBanner: pBanner,
		vInvestment: pInvestment,
		vService: pService,
		vCase: pCase,
		vFooter: pFooter,
	},
}
</script>