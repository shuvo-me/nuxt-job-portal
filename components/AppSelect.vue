<template>
  <div
    class="flex items-center bg-gray-50 border border-gray-300 rounded-md text-[1.4rem] px-2"
  >
    <span class="text-gray-500">
      <i class="bi bi-backpack" />
    </span>
    <select
      id="countries"
      class="text-sm rounded-lg w-full bg-transparent p-3 outline-none text-[1.3rem] text-gray-900"
    >
      <option selected class="text-gray-400">Choose a country</option>
      <option value="US">United States</option>
      <option value="CA">Canada</option>
      <option value="FR">France</option>
      <option value="DE">Germany</option>
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{}>();
</script>

<style>
</style>