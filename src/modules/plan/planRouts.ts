export default [
    {
        path: '/plan',
        name: 'plan-main',
        component: () => import(('./PlanIndex.vue')),
        meta: {
            requireProfile: true
        },
        children: [
            {
                path: 'create',
                name: 'plan-definition',
                component: () => import(('./views/DefinePlan.vue')),
                meta: {
                    requireProfile: true,
                    layout: 'LayoutBase'
                }
            },
        ]
    }
]