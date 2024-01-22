<script>
    export default {
        data() {
            return {
                products: [
                    {id: 1, title: "Best Product Ever", price: 240, description: "Example Boring Copypasted Text"},
                    {id: 2, title: "Worst Product Ever", price: 99, description: "Example Boring Copypasted Text"},
                    {id: 3, title: "Best Product Today", price: 120, description: "Example Boring Copypasted Text"},
                    {id: 4, title: "Best Bimbas Destroyer", price: 999, description: "Example Boring Copypasted Text"},
                ],
                title: '',
                price: '',
                description: '',
            }
        },
        methods: {
            CreateProduct(){
                const newProduct = {
                    id: Date.now(),
                    title: this.title,
                    price: this.price,
                    description: this.description,
                }
                this.products.push(newProduct);
                this.title = '';
                this.price = '';
                this.description = '';
            },
        }
    }
</script>

<template>
    <div class="product-add">
        <form @submit.prevent>
            <h3>Add new Product</h3>
            <input v-bind:value="title" @input="title = $event.target.value" type="text" placeholder="Product Title">
            <input v-bind:value="price" @input="price = $event.target.value" type="text" placeholder="Product Price">
            <input v-bind:value="description" @input="description = $event.target.value" type="text" placeholder="Product Description">
            <button type="btn" @click="CreateProduct()">Create</button>
        </form>
    </div>
    <div class="wrapper">
        <div class="product-item" v-for="product in products">
            <div class="product-image">IMAGE</div>
            <div class="decor"></div>
            <div class="product-content">
                <div class="product-title">{{ product.title }}</div>
                <div class="product-title">{{ product.description }}</div>
                <span><div>Price</div><div>{{ product.price }} $</div></span>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .wrapper {
        display: flex;
        gap: 40px;
        flex-wrap: wrap;
        justify-content: space-between;
        margin: 60px 120px;
    }

    .product-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 200px;
        height: 320px;
        border: 4px rgb(230, 232, 230) solid;
        border-radius: 8px;
        font-size: large;
        font-weight: 600;

    }

    .product-item span {
        display: flex;
        justify-content: space-between;
        margin: 10px;
        width: 180px;
        align-self: stretch;
    }

    .product-image {
        background-color: rgb(230, 232, 230);
        width: 180px;
        height: 180px;
        margin: 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #888888;
    }

    .product-title {
        width: 180px;
    }

    .decor  {
        background-color: rgb(230, 232, 230);
        width: 160px;
        height: 4px;
        border-radius: 2px;
        margin: 12px 0;
    }

    .product-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex: 1;
    }

    .product-add {
        margin: 40px auto;
        border: solid 2px rgb(196, 205, 196);
        border-radius: 8px;
        padding: 16px;
        width: 250px;
    }

    .product-add form {
        display: flex;
        flex-direction: column;
        align-items: stretch;
        gap: 12px;
    }

    form input, form button{
        font-size: 16px;
        font-weight: 600;
        padding: 8px;
        border: 0px;
    }

    button:hover {
        background-color: #c4c4c4;
        color: aliceblue;
    }


</style>
