<template>
  <aside class="bg-white max-w-[30rem] p-4 rounded-md">
    <div class="flex items-center justify-between">
      <h5
        class="text-[1.6rem] font-semibold py-5 border-b"
        v-text="'Related Jobs'"
      />
      <div class="flex items-center gap-x-2">
        <small
          class="bg-blue-50 text-blue-600 w-[2rem] h-[2rem] rounded-md flex items-center justify-center text-[1.4rem]"
          role="button"
          @click="$emit('prev')"
        >
          <i class="i-heroicons-chevron-left-20-solid" />
        </small>

        <small class="text-[1.3rem]" v-text="`${page}/3`" />
        <small
          class="bg-blue-50 text-blue-600 w-[2rem] h-[2rem] rounded-md flex items-center justify-center text-[1.4rem]"
          role="button"
          @click="$emit('next')"
        >
          <i role="button" class="i-heroicons-chevron-right-20-solid" />
        </small>
      </div>
    </div>
    <ul class="divide-y divide-gray-200">
      <li v-for="job in jobLists" :key="job.job_id" class="py-[1.5rem]">
        <div class="flex gap-x-3 items-start">
          <div>
            <img
              @error="$companyErrorLogo"
              :src="job?.employer_logo || CompanyPlaceHolderLogo"
              alt="job employer"
              class="w-[4.5rem] md:[5rem] rounded-md object-cover"
            />
          </div>
          <div class="">
            <h5
              v-text="job.job_title"
              class="text-[1.4rem] font-semibold opacity-90"
            />

            <p
              class="text-[1.3rem] font-medium flex items-center gap-x-2 line-clamp-1"
            >
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