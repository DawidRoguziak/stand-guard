export default [
    {
        path: '',
        name: 'profile-main',
        component: () => import((`@/modules/profile/ProfileIndex.vue`)),
        children: [
            {
                path: 'create-first-profile',
                name: 'create-first-profile',
                component: () => import((`@/modules/profile/views/FirstProfileCreate.vue`))
            }
        ]
    },
]