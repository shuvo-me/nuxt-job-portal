<template>
  <div
    class="flex w-full items-center bg-gray-50 border border-gray-300 rounded-md text-[1.4rem] px-2 focus-within:ring-1 focus-within:ring-emerald-600 transition-all duration-100"
  >
    <span class="text-gray-500">
      <i :class="iconClass" />
    </span>
    <select
      id="countries"
      class="rounded-lg w-full bg-transparent p-3 outline-none text-[1.3rem] text-gray-900 capitalize"
      @change="$emit('select')"
    >
      <option selected class="text-gray-400" v-text="optionTitle" />

      <option
        :value="opt.value"
        v-for="opt in options"
        :key="opt.value"
        v-text="opt.title"
      />
    </select>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  iconClass: string;
  optionTitle: string;
  options?: Array<{
    title: string;
    value: string;
  }>;
}>();
</script>

<style>
</style>