<template>
    <div class="flex flex-col view">
        <NavBar></NavBar>
        <div class="flex-1">
            <slot />
        </div>
        <Footer></Footer>
    </div>
</template>

<style scoped>
.view {
    min-height: 100vh;
}
</style>