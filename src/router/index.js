import Vue from 'vue'
import Router from 'vue-router'
import routes from './path'

Vue.use(Router)

const router = new Router({
	routes,
	mode: 'history',
	fallback: true,
	linkActiveClass: 'active',
})

export default router
