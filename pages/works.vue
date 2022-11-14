<template>
    <div class="container mx-auto main">
        <div class="title">
            <h1>My works</h1>
        </div>
        <WorkCard class="card" name="AfterSchool" url="https://afterschool.com.hk" img="/img/afterschool-website.png">
            <p>
                A large scale e-learning platform built with Nuxt2. Worked with profession designer through
                Figma. Using
                Vuex to achieved complicated state management. Setup data like metadata, sitemap and structured
                data, for SEO purpose.
            </p>
            <p>
                The frontend is developed by 3 developers including me.
            </p>
        </WorkCard>
        <WorkCard class="card" name="Shoperuse" url="https://shoperuse.com" img="/img/shoperuse-website.png">
            <p>
                A side project worked with another partner. It is an instagram shop catalog of Hong Kong. We
                utilize the opportunity to try new technologies like Nuxt3, windicss and deploying on Google App
                Engine.
            </p>
        </WorkCard>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main {
    padding-bottom: 100px;
}

.card:not(:last-child) {
    @apply mb-10;
}
</style>