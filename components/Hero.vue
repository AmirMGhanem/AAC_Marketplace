<template>
    <div class="hero">
        <nuxt-link to="/"><img src="~assets/images/logo.png" alt="adopt-a-contractor" class="logo"></nuxt-link>
        <h1>Adopt a Contractor</h1>
    </div>
</template>

<script >
export default {

}
</script>

<style  scoped>

.logo {
        width: 100%;
        max-width: 300px;
        margin: 0 auto;
        display: block;
    }

.hero {

    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #3f3f3f;
    font-size: 2rem;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
}
</style>