<template>
  <app-container extra-class="mt-[80px] rounded-md">
    <app-header />

    <div class="bg-gray-50 p-2 flex">
      <jobs-sidebar :job-lists="data" :pending="pending" :page="page" />
      <slot />
    </div>
    <!-- <footer>Footer</footer> -->
  </app-container>
</template>

<script setup lang="ts">
import { ResponseTypes } from "~/types";
const runtimeConfig = useRuntimeConfig();
const page = ref<number>(1);

const { data, pending } = await useAsyncData(
  "sidebar-jobs",
  (): Promise<ResponseTypes> =>
    $fetch("https://jsearch.p.rapidapi.com/search", {
      params: {
        query: "frontend developer",
        page: page.value.toString(),
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
    transform: (jobs) => jobs.data,
    watch: [page],
  }
);
</script>

<style>
</style>