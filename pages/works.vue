<template>
    <div class="container mx-auto main">
        <div class="title">
            <h1>My works</h1>
        </div>
        <WorkCard class="card" name="AfterSchool" url="https://afterschool.com.hk" img="/img/afterschool-website.png">
            <p>
                A large scale e-learning platform built with Nuxt2. Developed by 3 developers including me.
            </p>
            <div class="pl-6">
                <ul class="list-disc">
                    <li>Using <b>Figma</b> to cooperate with designer</li>
                    <li>Using <b>Bootstrap, breakpoints and media queries</b> to achieved responsiveness</li>
                    <li>Using <b>Vuex</b> to achieve complicated state management</li>
                    <li>Seting data like metadata, sitemap and structured
                        data for SEO purpose</li>
                    <li>Deploying on <b>AWS</b>.</li>
                </ul>
            </div>
        </WorkCard>
        <WorkCard class="card" name="Shoperuse" url="https://shoperuse.com" img="/img/shoperuse-website.png">
            <p>
                A side project worked with another partner. It is an instagram shop catalog of Hong Kong. We
                utilize the opportunity to try new technologies.
            </p>
            <div class="pl-6">
                <ul class="list-disc">
                    <li>Using <b>Windicss</b> which based on <b>Tailwind CSS</b>.</li>
                    <li>Using <b>Nuxt3</b>, with Vue 3 Composition API.</li>
                    <li>Deploying on <b>GCP</b>.</li>
                </ul>
            </div>
        </WorkCard>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.card:not(:last-child) {
    @apply mb-10;
}
</style>