//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)
//引用page1页面
import Index from './pages/index.vue'
import Projects from './pages/projects.vue'
import ProjectDetail from './pages/projectDetail.vue'
import Feedbacks from './pages/feedbacks.vue'

//定义routes路由的集合，数组类型
const routes = [
    //单个路由均为对象类型，path代表的是路径，component代表组件
    { path: '/index', component: Index },
    { path: '/projects', component: Projects },
    { path: '/feedbacks', component: Feedbacks },
    { path: '/projects/:id', name: ProjectDetail, component: ProjectDetail },
    { path: '', redirect: 'index' }
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
    //ES6简写，等于routes：routes
    routes
});

router.beforeEach((to, from, next) => {
    document.body.scrollTop = 0
    // firefox
    document.documentElement.scrollTop = 0
    next()
})

//抛出这个这个实例对象方便外部读取以及访问
export default router