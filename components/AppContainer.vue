<template>
  <div :class="`max-w-[1250px] px-5  mx-auto ${extraClass} `">
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  extraClass?: string;
}>();
</script>
