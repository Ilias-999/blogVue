import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import ArticleList from './components/ArticleList.vue';
import Article from './components/Article.vue';
import MyAccount from './components/MyAccount.vue';
import GuestBook from './components/GuestBook.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const routes = [
    { path: '/', component: ArticleList, name: 'ArticleList' },
    { path: '/Article/:id', component: Article, name: 'Article' },
    { path: '/MyAccount', component: MyAccount, name: 'MyAccount' },
    { path: '/GuestBook', component: GuestBook, name: 'GuestBook' }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

createApp(App).use(router).mount('#app');