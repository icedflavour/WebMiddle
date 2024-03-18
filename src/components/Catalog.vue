<template>
    <div class="products">
        <div class="product" v-for="product in products" :key="id">
            <div class="img"></div>
            <h2>{{product.title}}</h2>
            <h2>{{product.price}}</h2>
            <input v-on:click="changeProduct(product)" class="button" type="button" value="Редагувати">
            <input v-on:click="removeProduct(product)" class="button" type="button" value="Видалити">
        </div>
    </div>
</template>

<script>
import { useProductStore } from '../stores/ProductStore.js';

export default {
    setup() {
        const productStore = useProductStore();
        return { products: productStore.products };
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