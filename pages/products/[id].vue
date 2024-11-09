<template>
    <div>
        <Head>
            <Title>Nuxt Dojo | {{ product.title }}</Title>
            <Meta name="description" :content="product.description" />
        </Head>
        <!-- <p>product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
            Aliquid aperiam vitae non pariatur modi omnis exercitationem iure explicabo, voluptates temporibus.
        </p> -->
        <!-- <p>{{ products.title }}</p>
        <p>{{ products.price }}</p>
        <p>{{ products.id }}</p> -->
        <productDetails :product="product" />
    </div>
</template>

<script setup>
// const id = useRoute().params.id
const {id} = useRoute().params
const url = 'https://fakestoreapi.com/products/' + id

//fatch the product
// const {data : products} = await useFetch(url)
const {data : product} = await useFetch(url, {key: id})

if(!product.value)
{
    throw createError({statusCode: 404 , statusMessage: 'Product Not Found' , fatal: true})
}
 

definePageMeta({
    layout: 'products'
})
</script>

<style  scoped>

</style>