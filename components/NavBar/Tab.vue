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

<style lang="scss" scoped>
.navbar-tab {
    display: block;
    min-height: var(--navbar-height);
    padding: var(--navbar-tab-padding);
    text-align: center;
    transition: 0.3s;
    transition-property: color;

    &:hover {
        color: var(--main-color);
    }
}
</style>