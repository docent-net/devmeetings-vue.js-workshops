<template>
    <div>
        <ol>
            <li v-for="p in products" :key="p.id">{{ p.name }}</li>
        </ol>
        <p v-if="!products.length">No products!</p>
    </div>
</template>

<script>
    export default {
        name: "ProductList",
        // The case is, we have to define props (inputs)
        props: {
            // Here we also added some basic props validation
            products: {
                type: Array,
            }
        }
    }
</script>

<style scoped>

</style>