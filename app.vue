<template>
  <div dir="rtl" class="min-h-screen flex flex-col">
    <TheHeader />
    <main class="flex-grow">
      <!-- Main content goes here -->
    </main>
    <TheFooter />
  </div>
</template>

<script setup>
import TheHeader from "./components/header/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";
</script>
