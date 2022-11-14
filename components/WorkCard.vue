<template>
    <div class="content">
        <div class="flex justify-between">
            <h2 class="subtitle">{{ name}}</h2>
            <a :href="url" target="_blank">
                <button class="btn btn-blue">access</button>
            </a>
        </div>

        <div>
            <div class="py-6">
                <a class="screenshot" :href="url" target="_blank">
                    <img :src="img" />
                </a>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const {name, url, img} = defineProps({
    name: String,
    url: String,
    img: String
});
</script>

<style scoped>
.screenshot:hover {
    filter: brightness(0.9);
    transition: 0.3s;
}
</style>