<template>
    <div>
        <!-- <h2>product index</h2> -->
         <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products">
                <!-- <NuxtLink :to="`/products/${p.id}`">{{ p.title }}</NuxtLink> -->
                 <productCard :product="p"/>
            </div>
         </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const {data : products} = await useFetch('https://fakestoreapi.com/products')

useHead({
    title: 'Nuxt Dojo | Merch',
    meta: [
        {name: 'description', content: 'nuxt 3 Merch' }
    ]
})

</script>

<style  scoped>

</style>