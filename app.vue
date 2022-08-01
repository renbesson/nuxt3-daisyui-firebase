<template>
  <div v-if="user.isLoading === false" class="container mx-auto h-full">
    <div class="card w-full bg-base-200 mx-auto lg:m-5 shadow-xl h-full">
      <AppNavbar />
      <NuxtPage :user="user.user" />
      <AppFooter />
    </div>
  </div>
  <div v-else class="hero min-h-screen bg-base-200">
    <div class="hero-content text-center">
      <div class="max-w-md">
        <Spinner />
      </div>
    </div>
  </div>
</template>

<script setup>
initUser();
const user = useUser();
</script>
