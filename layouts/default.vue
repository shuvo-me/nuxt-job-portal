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
import { JobDataTypes } from "~/types";
const runtimeConfig = useRuntimeConfig();
const { data, pending } = await useAsyncData(
  "sidebar-jobs",
  (): Promise<Array<JobDataTypes>> =>
    $fetch("https://jsearch.p.rapidapi.com/search", {
      params: {
        query: "frontend developer ",
        page: "1",
        num_pages: "1",
      },
      headers: {
        "X-RapidAPI-Key": runtimeConfig.public.apiKey,
        "X-RapidAPI-Host": runtimeConfig.public.apiHost,
      },
    }),
  {
    lazy: true,
    server: false,
  }
);
</script>

<style>
</style>