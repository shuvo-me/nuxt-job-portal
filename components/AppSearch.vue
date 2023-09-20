<template>
  <div class="relative">
    <div
      class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-[1.4rem] text-gray-500"
    >
      <i class="bi bi-search" />
    </div>
    <input
      type="search"
      id="default-search"
      class="block w-full pl-[3rem] py-3 text-[1.3rem] outline-none text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-1 focus:ring-emerald-600 focus:border-0"
      :placeholder="placeholder"
      :required="required"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  placeholder: string;
  required: boolean;
}>();
</script>

<style>
</style>