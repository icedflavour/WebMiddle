<template>
    <router-link to="/catalog"><button>В магазин</button></router-link>
    <router-link to="/admin"><button>В адмінку</button></router-link>
    <router-view></router-view>
</template>

<script>
import ProductAdmin from "./components/ProductAdmin.vue"
import Catalog from "./components/Catalog.vue"
import Order from "./components/Order.vue"
export default {
    components: {
        ProductAdmin, Catalog, Order
    }
}
</script>


<style scoped>
    
</style>
