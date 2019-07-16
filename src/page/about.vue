<template>
  <div>
    <v-header></v-header>
    <v-banner></v-banner>
    <v-info></v-info>
    <v-footer></v-footer>
  </div>
</template>

<script>
import pHeader from '@/components/header/pc'
import pFooter from '@/components/footer/pc'
import pBanner from '@/components/about/banner/pc'
import pInfo from '@/components/about/info/pc'
export default {
	components: {
		vHeader: pHeader,
		vFooter: pFooter,
		vBanner: pBanner,
		vInfo: pInfo,
	},
}
</script>

<style lang="scss" scoped>
</style>