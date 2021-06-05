import Vue from "vue"
import VueRouter from "vue-router"
import routes from './routes.js'
// import store from "@/store"

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history',
    routes,
    scrollBehavior(to, from, savadPosition) {
        return { x: 0, y: 0 }
    }
})

// router.beforeEach((to, from, next) => {
//     const targetPath = to.path
//     const needCheck = !!checkPaths.find(path => targetPath.indexOf(path) === 0)
//     if (needCheck) {
//         const token = store.state.users.userInfo.token
//         if (token) {
//             next()
//         } else {
//             alert('请先登入')
//             next('/login?redirect=' + targetPath)
//         }
//     } else {
//         next()
//     }
// })
export default router