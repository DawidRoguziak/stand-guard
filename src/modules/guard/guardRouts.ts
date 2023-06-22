export default [
    {
        path: '',
        name: 'guard-main',
        component: () => import(('./GuardIndex.vue')),
        children: [
            {
                path: '',
                name: 'guard-home',
                component: () => import(('./views/GuardHome.vue')),
            },
            {
                path: 'plan-definition',
                name: 'guard-define-plan',
                component: () => import(('./views/GuardDefinePlan.vue')),
            }
            ]
    }
]