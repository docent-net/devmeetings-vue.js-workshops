<template>
    <form @submit.prevent="onSubmit()">
        <input v-model="user_input.name"
               name="product"
               v-validate="'required|min:3'">
        <button>Add</button>
        <div v-show="errors.has('product')">
            {{ errors.first('product') }}
        </div>
    </form>
</template>

<script>
    import uuid from 'uuid/v4';

    export default {
        name: 'AddProduct',
        data() {
            return {
                user_input: {id: '', name: ''},
            }
        },
        methods: {
            onSubmit() {
                this.$validator.validateAll().then(result => {
                    if (!result) {
                        return;
                    }
                    this.$emit('onAddProduct', {
                        id: uuid(),
                        ...this.user_input
                    });
                    this.user_input.name = '';
                    this.$validator.reset();
                });
            }
        }
    }
</script>