export default [
    {
        path: '',
        name: 'guard-main',
        component: () => import(('./GuardIndex.vue')),
        meta: {
            requireProfile: true
        },
        children: [
            {
                path: '',
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