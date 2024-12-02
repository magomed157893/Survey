import { createRouter, createWebHistory } from "vue-router";

import HomeView from "@/views/HomeView.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: HomeView
        },
        {
            path: "/admin",
            name: "Admin",
            component: () => import("@/views/AdminView.vue")
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/"
        }
    ]
});

export default router;
