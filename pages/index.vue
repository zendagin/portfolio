<template>
    <div class="container mx-auto main">
        <div class="title">
            <h1>About me</h1>
        </div>
        <div class="content">
            <section>
                <h2 class="subtitle mb-3">Who am I</h2>
                <p>
                    I am Cheng Tak Kin, a software developer from Hong Kong.
                </p>
                <p>
                    Graduated from The University Hong Kong on 2019, with {{ exp}} years of experience in developing web
                    applications.
                </p>
            </section>
            <section>
                <h2 class="subtitle mb-3">What I do</h2>
                <p>
                    I develop applications mainly in Typescript and Vue.
                </p>
                <p>
                    The products are deployed on cloud platforms like AWS and GCP.
                </p>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
import dayjs from "dayjs";
const exp = dayjs().diff(dayjs("2019/06/30"), "years");
</script>

<style scoped>
.main {
    padding-bottom: 100px;
}

section:not(:last-child) {
    @apply mb-8;
}
</style>