<template>
    <div class="container mx-auto main">
        <div class="title">
            <h1>About me</h1>
        </div>
        <div class="content">
            <section>
                <h2 class="subtitle">Who am I</h2>
                <p>
                    I am Cheng Tak Kin, a software developer from Hong Kong.
                </p>
            </section>
            <section>
                <h2 class="subtitle">What I do</h2>
                <p>
                    I am Cheng Tak Kin, a software developer from Hong Kong.
                </p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.main {
    padding-bottom: 100px;
}

section:not(:last-child) {
    @apply mb-8;
}
</style>