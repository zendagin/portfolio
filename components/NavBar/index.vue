<template>
    <div class="nav-bar">
        <div class="container mx-auto flex">
            <NavBarTab label="About" path="/"></NavBarTab>
            <NavBarTab label="Works" path="/works"></NavBarTab>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav-bar {
    min-height: var(--navbar-height);
}
</style>