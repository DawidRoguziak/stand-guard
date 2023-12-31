export default [
    {
        path: '/guard',
        name: 'guard-main',
        component: () => import(('./GuardIndex.vue')),
        meta: {
            requireProfile: true
        },
        children: [
            {
                path: 'home',
                name: 'guard-home',
                component: () => import(('./views/GuardHome.vue')),
                meta: {
                    requireProfile: true,
                    layout: 'LayoutBase'
                }
            }
        ]
    }
]