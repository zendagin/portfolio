<template>
    <div class="nav-bar">
        <div class="container mx-auto">
            <NavBarTab label="About" path="/"></NavBarTab>
            <NavBarTab label="Works" path="/works"></NavBarTab>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav-bar {
    background-color: var(--color-1);
    min-height: var(--navbar-height);
}
</style>