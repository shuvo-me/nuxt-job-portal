<template>
  <div
    class="flex items-center bg-gray-50 border border-gray-300 rounded-md text-[1.4rem] px-2"
  >
    <span class="text-gray-500">
      <i class="bi bi-backpack" />
    </span>
    <select
      id="countries"
      class="rounded-lg w-full bg-transparent p-3 outline-none text-[1.3rem] text-gray-900"
    >
      <option selected class="text-gray-400">Job Type</option>
      <option value="freelance">Freelance</option>
      <option value="remote">Remote</option>
      <option value="contract">Contract</option>
      <option value="on-site">On site</option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{}>();
</script>

<style>
</style>