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
import store from '../store';

export default {
    name: 'app',
    components: {
        ProductList,
        AddProduct
    },
    created() {
        store.fetchProducts();
    },
    data() {
        return {
            sharedState: store.state
        }
    },
    methods: {
        handleAddProduct(product) {
            store.addProduct(product);
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
