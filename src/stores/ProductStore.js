import { defineStore } from "pinia";
export const useProductStore = defineStore("ProductStore", {
    state: () => {
        return {
            products: [],
        }
    },
    actions: {
        addProduct(product) {
            this.products.push(product);
        },
        removeProduct(productId) {
            this.products = this.products.filter(product => product.id !== productId);
        },
        updateProduct(productId, updatedInfo) {
            const index = this.products.findIndex(product => product.id === productId);
            if (index !== -1) {
                this.products[index] = {...this.products[index], ...updatedInfo};
            }
        }
    }
});