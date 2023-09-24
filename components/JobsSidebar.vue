<template>
  <aside class="bg-white max-w-[25rem] p-4 rounded-md">
    <div class="flex items-center justify-between">
      <h5
        class="text-[1.6rem] font-semibold py-5 border-b"
        v-text="'Related Jobs'"
      />
      <div class="flex items-center gap-x-2">
        <button
          class="bg-blue-50 text-blue-600 w-[2rem] h-[2rem] rounded-md flex items-center justify-center text-[1.4rem]"
          type="button"
          @click="$emit('prev')"
          :disabled="page === 1"
        >
          <i class="i-heroicons-chevron-left-20-solid" />
        </button>

        <small class="text-[1.3rem]" v-text="`${page}/5`" />
        <button
          class="bg-blue-50 text-blue-600 w-[2rem] h-[2rem] rounded-md flex items-center justify-center text-[1.4rem]"
          type="button"
          @click="$emit('next')"
          :disabled="page === 5"
        >
          <i role="button" class="i-heroicons-chevron-right-20-solid" />
        </button>
      </div>
    </div>
    <ul v-if="pending" class="min-w-[23rem]">
      <li v-for="i in [...new Array(5)]" :key="i" class="py-[1.5rem]">
        <job-list-skeleton-loader />
      </li>
    </ul>
    <ul class="divide-y divide-gray-200" v-else>
      <li v-for="job in jobLists" :key="job.job_id" class="py-[1.5rem]">
        <div class="flex gap-x-3 items-start">
          <img
            @error="$companyErrorLogo"
            :src="job?.employer_logo || CompanyPlaceHolderLogo"
            alt="job employer"
            class="w-[5rem] rounded-md object-cover"
          />
          <div class="">
            <h5
              v-text="job.job_title"
              class="text-[1.3rem] font-semibold opacity-90 line-clamp-1"
            />

            <p class="text-[1.3rem] font-medium flex items-center gap-x-2">
              <i class="i-heroicons-users" />
              {{ job.employer_name || "unknown" }}
            </p>

            <div class="flex mt-4 gap-x-4">
              <small class="text-[1.3rem] flex items-center">
                <i class="i-heroicons-map-pin" />
                {{ job.job_country }}
              </small>
              <small
                :class="`${
                  job.job_is_remote ? 'badge-green' : 'badge-blue'
                } px-1 rounded-full text-[1.1rem]`"
                v-text="job.job_is_remote ? 'Remote' : 'Contact'"
              />
            </div>
          </div>
        </div>
        <!-- <div></div> -->
      </li>
    </ul>
  </aside>
</template>

<script setup lang="ts">
import { JobDataTypes } from "~/types";
import CompanyPlaceHolderLogo from "~/assets/images/company-place-holder.png";
defineProps<{
  jobLists: JobDataTypes[] | null;
  pending: boolean;
  page: number;
}>();
</script>