import 'vue-router'
import {createRouter, createWebHistory} from 'vue-router';
import type {NavigationGuardNext, RouteLocationNormalized} from 'vue-router';
import profileRouts from "@/modules/profile/profileRouts";
import guardRouts from "@/modules/guard/guardRouts";
import {useProfileCounter} from "@/modules/profile/stores/ProfileCounter/ProfileCounter";
import planRouts from "@/modules/plan/planRouts";

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
        {
            path: '/plan',
            children: [
                ...planRouts
            ],
        },

        {path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import((`../components/views/view404/View404.vue`))},
    ]
});

router.beforeEach((to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
    if (to.meta.requireProfile && useProfileCounter().getProfilesCount === 0 && to.name !== 'create-first-profile') {
        return next({name: 'create-first-profile'});
    }

    return next();
});

export default router
