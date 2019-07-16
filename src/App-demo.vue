<template>
  <div id="app">
    <router-link to="/home">home</router-link>
    <router-link :to="{name:'test'}">test</router-link>
    <router-view />
    <div>{{token}}</div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import './assets/css/common.scss'

export default {
	name: 'app',
	computed: {
		...mapState(['token', 'userInfo']),
	},
	methods: {
		...mapMutations(['TOKEN', 'USER_INFO']),
	},
	mounted() {
		this.TOKEN('yjy2')
	},
}
</script>

