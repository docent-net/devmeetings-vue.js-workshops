<template>
  <div id="app">
      <product-list :products="products"></product-list>
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
    data() {
        return {
            products: []
        }
    },
    methods: {
        handleAddProduct(product) {
            this.products.push(product);
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
