<template>
    <div class="nav-bar">
        <div class="container mx-auto flex justify-end">
            <NavBarTab label="About" path="/" data-cy="nav-about"></NavBarTab>
            <NavBarTab label="Works" path="/works" data-cy="nav-works"></NavBarTab>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.nav-bar > div {
    min-height: var(--navbar-height);
}
</style>