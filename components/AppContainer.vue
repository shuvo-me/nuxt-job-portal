<template>
  <div :class="`max-w-[1100px] px-5  mx-auto ${extraClass} bg-white`">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  extraClass?: string;
}>();
</script>
