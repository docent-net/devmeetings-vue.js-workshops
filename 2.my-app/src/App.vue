<template>
  <div id="app">
      <ol>
          <li v-for="p in products" :key="p.id">{{ p.name }}</li>
      </ol>
      <p v-if="!products.length">No products!</p>
      <form @submit.prevent="onSubmit()">
          <input v-model="user_input.name"
                  name="product"
                  v-validate="'required|min:3'">
          <button>Add</button>
          <div v-show="errors.has('product')">
              {{ errors.first('product') }}
          </div>
      </form>
  </div>
</template>

<script>
import uuid from 'uuid/v4';

export default {
    name: 'app',
    data() {
        return {
            user_input: {name: '', id: 0},
            products: []
        }
    },
    methods: {
        onSubmit() {
            this.$validator.validateAll().then(result => {
                if (!result) {
                    return;
                }
                this.products.push({
                    id: uuid(),
                    ...this.user_input
                });
                this.user_input.name = '';
                // 4/ and reset validation state after adding a product
                this.$validator.reset();
            });
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
