<template>
  <div id="app">
      <product-list :products="sharedState.products"></product-list>
      <!-- With @ we can listen to onAddProduct event and assign handleAddProduct-->
      <add-product @onAddProduct="handleAddProduct"></add-product>
  </div>
</template>

<script>

import ProductList from '../src/components/ProductList'
import AddProduct from '../src/components/AddProduct'

export default {
    name: 'app',
    components: {
        ProductList,
        AddProduct
    },
    created() {
        // store.fetchProducts();
    },
    //5/ Instead of data, we're using 'computed' to get products from injected $store
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    // data() {
    //     return {
    //         sharedState: store.state
    //     }
    // },
    // methods: {
    //     handleAddProduct(product) {
    //         store.addProduct(product);
    //     }
    // }
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
