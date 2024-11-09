<template>
    <div>
        <!-- <header>
            <nav>
                <NuxtLink to="/">Nuxt Dojo</NuxtLink>
                <ul>
                    <li><NuxtLink to="/">Home</NuxtLink></li>
                    <li><NuxtLink to="/about">About</NuxtLink></li>
                    <li><NuxtLink to="/products">Products</NuxtLink></li>
                    <li><NuxtLink to="/products/about">productAbout</NuxtLink></li>
                    <li><NuxtLink to="/products/${id}">producId</NuxtLink></li>
                </ul>
                <a href="/about">normal link -- about page</a>
            </nav>
        </header> -->

        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia corporis doloremque delectus odit laudantium debitis voluptate sint veritatis commodi quisquam eligendi eveniet
            , accusantium a temporibus unde earum iste aliquid quaerat.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
            At non error facilis saepe necessitatibus dolores cumque beatae sit sint nihil?
        </p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch('/api/currency/GBP')
    // const { data } = await useFetch('/api/ninja')
    // const { data } = await useFetch('/api/ninja?name=Navneet',{
    //     method: 'post',
    //     body: { age: 30 },
    // }
    // })
</script>

<style  scoped>
h2{
    margin-bottom: 20px;
    font-size: 36px;
}
p{
    margin: 20px 0;
}
</style>