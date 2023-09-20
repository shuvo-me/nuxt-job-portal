<template>
  <header class="py-5">
    <div class="flex justify-between items-center pb-3">
      <div class="flex items-center">
        <img
          src="~/assets/images/app-logo.png"
          alt="app logo"
          class="w-[30px]"
        />
        <h4 class="text-zinc-900 text-[2rem] font-semibold">JobScout</h4>
      </div>
      <div class="flex items-center gap-x-4">
        <ul
          class="flex items-center gap-x-[2rem] border-r border-gray-300 pr-[2rem]"
        >
          <li>
            <span role="button" class="text-[1.8rem] text-black font-bold">
              <i class="bi bi-bag" />
            </span>
          </li>
          <li>
            <span role="button" class="text-[1.8rem] text-black font-bold">
              <i class="bi bi-bell" />
            </span>
          </li>
          <li>
            <span
              role="button"
              class="text-[1.8rem] text-black font-bold relative"
            >
              <i class="bi bi-envelope"></i>
              <small
                class="h-[1.4rem] w-[1.4rem] rounded-full text-[1rem] bg-red-600 text-white absolute top-[-0.3rem] right-[-0.7rem] flex items-center justify-center"
                v-text="5"
              />
            </span>
          </li>
        </ul>
        <div role="button">
          <img
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt="profile img"
            class="h-[3.5rem] w-[3.5rem] rounded-full object-cover"
          />
        </div>
      </div>
    </div>
    <div class="mt-3">
      <form action="">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4">
          <app-search placeholder="Search ui/ux designer" :required="false" />
          <app-select />
        </div>
      </form>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style>
</style>