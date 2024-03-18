<template>
    <router-link to="/admin"><button>Админка</button></router-link>
    <router-link to="/catalog"><button>Каталог</button></router-link>
    <router-link to="/order"><button>Корзина</button></router-link>
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
* {
    font-family: sans-serif;
}

body {
    padding: 50px;
}

form {
    display: flex;
    gap: 40px;
}

input {
    font-size: 20px;
    padding: 12px;
}

.products {
    display: flex;
    margin-top: 50px;
    flex-wrap: wrap;
}

.product {
    border: 4px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
}

.product .img {
    width: 200px;
    height: 200px;
    background-color: #ccc;
}

.product-admin {
    padding: 20px;
}

.button {
    width: 100%;
    background-color: #5a5a5a;
    color: #e5e5e5;
}
</style>
