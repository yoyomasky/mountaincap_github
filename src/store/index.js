import Vue from 'vue'
import Vuex from 'vuex'
import { isDev } from '@/assets/js/utils'
import defaultState from './states/index'
import mutations from './mutations/index'

Vue.use(Vuex)

const store = new Vuex.Store({
	strict: isDev,
	state: defaultState,
	mutations,
})

export default store
