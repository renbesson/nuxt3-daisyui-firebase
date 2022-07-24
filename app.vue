<template>
  <div class="container mx-auto min-h-full">
    <AppNavbar />

    <div class="card w-full bg-base-200 mx-auto m-5 shadow-xl h-full">
      <NuxtPage />
    </div>

    <AppFooter />
    <h3>{{ user?.user?.displayName }}</h3>
  </div>
</template>

<script setup>
const user = useUser();
console.log(user?.value);
</script>
