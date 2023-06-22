import 'vue-router'
import {createRouter, createWebHistory} from 'vue-router';
import type {NavigationGuardNext, RouteLocationNormalized} from 'vue-router';
import profileRouts from "@/modules/profile/profileRouts";
import guardRouts from "@/modules/guard/guardRouts";
import {useProfileStore} from "@/modules/profile/stores/ProfileStore";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'entry-point-of-app',
            component: () => import((`../components/views/ViewEntryPointOfApp.vue`)),
        },
        {
            path: '/profile',
            children: [
                ...profileRouts
            ],
            meta: {
                requireProfile: true
            }
        },
        {
            path: '/guard',
            children: [
                ...guardRouts
            ],
        },

        {path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import((`../components/views/View404.vue`))},
    ]
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.meta.requireProfile && !useProfileStore().isMinimumOneProfile && to.name !== 'create-first-profile') {
        return next({name: 'create-first-profile'});
    }

    return next();
});

export default router
