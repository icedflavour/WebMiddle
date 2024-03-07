import { createRouter, createWebHashHistory } from 'vue-router';
import Catalog from "./components/Catalog.vue";
import Order from "./components/Order.vue";
import ProductAdmin from "./components/ProductAdmin.vue";

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        { path: '/admin', component: ProductAdmin, alias: '/'},
        { path: '/catalog', component: Catalog },
        { path: '/order', component: Order },
      ]
})