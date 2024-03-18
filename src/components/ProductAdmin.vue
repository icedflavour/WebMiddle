<template>
    <div class="product-admin">
        <h1>Адмін-панель</h1>
        <form>
            <input v-model="title" placeholder="Назва товару">
            <input v-model="price" placeholder="Ціна">
            <input v-on:click="addProduct" type="button" value="Додати Товар">
        </form>
        <div class="products">
            <div class="product" v-for="product in products" :key="id">
                <div class="img"></div>
                <h2>{{product.title}}</h2>
                <h2>{{product.price}}</h2>
                <input v-on:click="changeProduct(product)" class="button" type="button" value="Редагувати">
                <input v-on:click="removeProduct(product)" class="button" type="button" value="Видалити">
            </div>
        </div>
    </div>
</template>

<script>
import { useProductStore } from '../stores/ProductStore.js';
let id = 0;
export default {
    data(){
        return {
            title: '',
            price: '',
        }
    },
    computed: {
        products() {
            const productStore = useProductStore();
            return productStore.products;
        }
    },
    methods: {
        addProduct() {
            const productStore = useProductStore();
            if (this.title && this.price > 0) {
                productStore.addProduct({ id: Date.now(), title: this.title, price: this.price });
                this.title = '';
                this.price = 0;
            } else {
                alert("Заповніть дані!");
            }
        },
        removeProduct(id) {
            const productStore = useProductStore();
            productStore.removeProduct(id);
        }
    },
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
