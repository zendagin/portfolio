<template>
    <div class="container mx-auto main">
        <div class="title">
            <h1>My works</h1>
        </div>
        <section class="content">
            <div class="flex justify-between">
                <h2 class="subtitle">AfterSchool</h2>
                <a href="https://afterschool.com.hk" target="_blank">
                    <button class="btn btn-blue">access</button>
                </a>
            </div>

            <div>
                <div class="py-6">
                    <img src="~/assets/img/afterschool-website.png" />
                </div>
                <div>
                    <p>
                        A large scale e-learning platform built with Nuxt2. Worked with profession designer through
                        Figma. Using
                        Vuex to achieved complicated state management. Setup data like metadata, sitemap and structured
                        data, for SEO purpose.
                    </p>
                    <p>
                        The frontend is developed by 3 developers including me.
                    </p>
                </div>
            </div>
        </section>
        <section class="content">
            <div class="flex justify-between">
                <h2 class="subtitle">Shoperuse</h2>
                <a href="https://shoperuse.com" target="_blank">
                    <button class="btn btn-blue">access</button>
                </a>
            </div>

            <div>
                <div class="py-6">
                    <img src="~/assets/img/shoperuse-website.png" />
                </div>
                <div>
                    <p>
                        A side project worked with another partner. It is an instagram shop catalog of Hong Kong. We
                        utilize the opportunity to try new technologies like Nuxt3, windicss and deploying on Google App
                        Engine.
                    </p>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main {
    padding-bottom: 100px;
}

section:not(:last-child) {
    @apply mb-10;
}
</style>