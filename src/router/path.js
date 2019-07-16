import HomeComp from '../page/home'
import AboutComp from '../page/about'
import ContactComp from '../page/contact'

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		name: 'home',
		component: HomeComp,
		meta: {
			title: '首页',
			description: '首页描述',
		},
	},
	{
		path: '/about',
		name: 'about',
		component: AboutComp,
	},
	{
		path: '/contact',
		name: 'contact',
		component: ContactComp,
	},
]

export default routes
