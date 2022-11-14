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
    line-height: var(--navbar-height);
    min-height: var(--navbar-height);
    padding: var(--navbar-tab-padding);
    text-align: center;
    transition: 0.5s;

    &:hover {
        background-color: var(--main-color-light);
    }
}
</style>