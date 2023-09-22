<template>
  <aside class="bg-white max-w-[30rem] p-4 rounded-md">
    <h5 class="text-[1.6rem] font-semibold border-b border-gray-100">
      Related Jobs
    </h5>
    <ul class="space-y-5">
      <li v-for="job in jobLists" :key="job.job_id">
        <div class="flex items-start gap-x-3">
          <div>
            <img
              :src="job.employer_logo || CompanyPlaceHolderLogo"
              alt="job employer"
              class="w-[4.5rem] md:[5rem] lg:w-[5.5rem] xl:w-[6rem] rounded-md object-cover"
            />
          </div>
          <div class="line-clamp-1">
            <h5
              v-text="job.job_title"
              class="text-[1.4rem] md:text-[1.5rem] font-semibold opacity-90"
            />
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