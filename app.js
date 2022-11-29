const routes=[
    {path:'/note',component:note},
    {path:'/agenda',component:agenda},
]

const router=new VueRouter({
    routes
})

const app = new Vue({
    router
}).$mount('#app')