import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import createLogger from 'vuex/dist/logger'

// Vuex needs to be initialized as it injects some data to the components
Vue.use(Vuex);

// Let's defince new store
export default new Vuex.Store({
    //3/ A 'state' part is basically data that will be propagate to the components
    state: {
        products: []
    },
    //5/ mutations are modifying data stored in state
    mutations: {
        addProduct(state, payload) {
            state.products.push(payload.product);
        },
        setProducts(state, payload) {
            state.products = payload.products;
        }
    },

    //8/ actions can be invoked by components, and use mutations
    actions: {
        addProduct(store, payload) {
            store.commit({
                type: 'addProduct',
                product: payload
            });
        },
        async getProducts({ commit }) {
            const payload = await axios.get('products.json').then(res => res.data);
            commit({
                type: 'setProducts',
                products: payload
            });
        }
    },
    // extra: we added to logger to see what's going on
    plugins: [createLogger()]
});
