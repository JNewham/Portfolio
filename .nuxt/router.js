import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _6d7cfc51 = () => import('..\\pages\\index.vue' /* webpackChunkName: "pages\\index" */).then(m => m.default || m)
const _05efea0c = () => import('..\\pages\\work\\QI.vue' /* webpackChunkName: "pages\\work\\QI" */).then(m => m.default || m)
const _6a66cc04 = () => import('..\\pages\\work\\LATA.vue' /* webpackChunkName: "pages\\work\\LATA" */).then(m => m.default || m)
const _5b8c54ee = () => import('..\\pages\\work\\blind-veterans.vue' /* webpackChunkName: "pages\\work\\blind-veterans" */).then(m => m.default || m)
const _9a5feaa6 = () => import('..\\pages\\work\\greenpeace.vue' /* webpackChunkName: "pages\\work\\greenpeace" */).then(m => m.default || m)
const _973584b4 = () => import('..\\pages\\work\\LWC.vue' /* webpackChunkName: "pages\\work\\LWC" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _6d7cfc51,
			name: "index"
		},
		{
			path: "/work/QI",
			component: _05efea0c,
			name: "work-QI"
		},
		{
			path: "/work/LATA",
			component: _6a66cc04,
			name: "work-LATA"
		},
		{
			path: "/work/blind-veterans",
			component: _5b8c54ee,
			name: "work-blind-veterans"
		},
		{
			path: "/work/greenpeace",
			component: _9a5feaa6,
			name: "work-greenpeace"
		},
		{
			path: "/work/LWC",
			component: _973584b4,
			name: "work-LWC"
		}
    ],
    fallback: false
  })
}
