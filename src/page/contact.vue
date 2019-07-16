<template>
  <div>
    <v-header></v-header>
    <v-mouse-wheel>
      <swiper-slide>
        <v-banner></v-banner>
      </swiper-slide>
      <swiper-slide>about</swiper-slide>
      <swiper-slide>contact</swiper-slide>
    </v-mouse-wheel>
  </div>
</template>

<script>
import vMouseWheel from '@/components/swiper/mouse-wheel'
import vBanner from '@/components/home/banner/pc'
import vHeader from '@/components/header/pc'
export default {
	components: {
		vMouseWheel,
		vBanner,
		vHeader,
	},
}
</script>
