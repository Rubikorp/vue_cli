import ProjectPage from "@/pages/ProjectPage.vue";
import BlockDetails from "@/pages/BlockDetails.vue";
import MainPage from "@/pages/MainPage.vue";
import NotFoundPage from '@/pages/NotFoundPage'
import ProjectDetail from "@/pages/ProjectDetail.vue";
import ArticlesNews from "@/pages/ArticlesNews.vue";
import { createRouter, createWebHistory } from "vue-router";


const routes = [
    {
        path: '/',
        name: '/home',
        component: MainPage
    },
    {
        path: '/project',
        name: 'Project',
        component: ProjectPage
    },
    {
        path: '/blog',
        name: 'Blog',
        component: BlockDetails
    },
    {
        path: '/project-detail',
        name: 'Project Detail',
        component: ProjectDetail
    },
    {
        path: '/articles',
        name: 'Articles and News',
        component: ArticlesNews
    },
    {
        path: '/:CathAll(.*)',
        name: '404 page',
        component: NotFoundPage
    }

]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router;