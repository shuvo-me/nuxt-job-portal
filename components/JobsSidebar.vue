<template>
  <aside class="bg-white max-w-[30rem] p-4 rounded-md">
    <h5 class="text-[1.6rem] font-semibold py-5 border-b">Related Jobs</h5>
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
}>();
</script>