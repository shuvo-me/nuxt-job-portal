<template>
  <app-container extra-class="mt-[80px] rounded-md">
    <app-header />

    <div class="bg-gray-50 p-2">
      <jobs-sidebar />
      <slot />
    </div>
    <!-- <footer>Footer</footer> -->
  </app-container>
</template>

<script setup lang="ts">
</script>

<style>
</style>