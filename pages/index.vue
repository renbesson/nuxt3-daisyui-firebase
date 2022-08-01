<template>
  <div class="h2">{{ user }}</div>
</template>

<script setup>
const { user } = useUser()?.value;
</script>
