import { createRouter, createWebHistory } from 'vue-router';


import ContactsView from './views/ContactsView.vue';
import HomeView from './views/HomeView.vue';
import AboutView from './views/AboutView.vue';
import SingleCategory from './views/SingleCategory.vue';



const router = createRouter({
    history: createWebHistory(),
    routes: [

        {
            path: '/contacts',
            name: 'contacts',
            component: ContactsView
        },

        {
            path: '/',
            name: 'home',
            component: HomeView
        },

        {
            path: '/about',
            name: 'about',
            component: AboutView
        },

        {
            path: '/categories/:id',
            name: 'single-category',
            component: SingleCategory
        },
    ],
});

export { router };