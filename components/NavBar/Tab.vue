<template>
    <nuxt-link class="navbar-tab" :to="path">
        {{ label}}
    </nuxt-link>
</template>

<script setup lang="ts">
const {label, path} = defineProps({
    label: String,
    path: String
});
</script>

<style scoped>
.navbar-tab {
    line-height: var(--navbar-height);
    padding: var(--navbar-tab-padding);
    text-align: center;
}
</style>