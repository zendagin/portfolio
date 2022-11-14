<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
onMounted(() => {
  console.log(
    "Are you looking for %cthis?\n" +
    "https://github.com/zendagin/portfolio",
    "color:#00bd6f;"
  );
});
</script>