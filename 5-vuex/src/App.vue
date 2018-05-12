<template>
    <div id="app">
        <product-list :products="products"></product-list>
        <add-product @onAddProduct="handleAddProduct"></add-product>

    </div>
</template>

<script>
    import ProductList from '../src/components/ProductList';
    import AddProduct from '../src/components/AddProduct';

    export default {
        name: 'app',
        components: {
            ProductList,
            AddProduct
        },
        created() {
            this.$store.dispatch('getProducts');
        },
        //5/ Instead of data, we're using 'computed' to get products from injected $store
        computed: {
            products() {
                return this.$store.state.products;
            }
        },
        //5/ methods will now use dispatch function with name of action and payload
        methods: {
            handleAddProduct(product) {
                this.$store.dispatch('addProduct', product);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
