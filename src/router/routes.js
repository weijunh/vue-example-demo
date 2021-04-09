import HelloWorld from '../components/HelloWorld'
// 并暴露路由的数组配置
export default [
    {
        path: '/hello',
        component: HelloWorld,
        meta: {
            isShowFooter: true
        }
    },
    /*{
        path: '/login',
        component: Login
    },
    {
        path: '/shop',
        component: Shop,
        children: [
            {
                path: '/shop/goods',
                component: Goods
            },
            {
                path: '/shop/ratings',
                component: Ratings
            },
            {
                path: '/shop/info',
                component: Info
            },
            {
                path: '/shop',
                redirect: '/shop/goods'
            }
        ]
    },*/

    {
        path: '/',
        redirect: '/hello'
    }
]
