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
                    requireProfile: true
                }
            },
            {
                path: 'plan-definition',
                name: 'guard-define-plan',
                component: () => import(('./views/GuardDefinePlan.vue')),
                meta: {
                    requireProfile: true
                }
            }
        ]
    }
]