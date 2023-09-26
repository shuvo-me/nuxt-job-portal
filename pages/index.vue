<template>
  <div class="w-full rounded-md overflow-x-hidden bg-white">
    <div
      class="bg-[url('https://template.canva.com/EAENvp21inc/1/0/1600w-qt_TMRJF4m0.jpg')] min-h-[10vh] bg-center bg-no-repeat bg-cover"
    />
    <div class="px-7">
      <div class="left">
        <div class="flex items-center p-5 border-b">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/512px-Microsoft_logo.svg.png"
            alt="company img"
            class="h-[5rem] w-[5rem]"
          />
          <div class="ml-10 flex items-center justify-between w-full">
            <div>
              <h5 class="text-[1.8rem] font-semibold">Senior UX/UI Desinger</h5>
              <span class="flex items-center text-[1.5rem] gap-x-4"
                >Microsoft
                <small class="text-blue-600">
                  <svg
                    class="w-8 h-8"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fill="currentColor"
                      d="m18.774 8.245-.892-.893a1.5 1.5 0 0 1-.437-1.052V5.036a2.484 2.484 0 0 0-2.48-2.48H13.7a1.5 1.5 0 0 1-1.052-.438l-.893-.892a2.484 2.484 0 0 0-3.51 0l-.893.892a1.5 1.5 0 0 1-1.052.437H5.036a2.484 2.484 0 0 0-2.48 2.481V6.3a1.5 1.5 0 0 1-.438 1.052l-.892.893a2.484 2.484 0 0 0 0 3.51l.892.893a1.5 1.5 0 0 1 .437 1.052v1.264a2.484 2.484 0 0 0 2.481 2.481H6.3a1.5 1.5 0 0 1 1.052.437l.893.892a2.484 2.484 0 0 0 3.51 0l.893-.892a1.5 1.5 0 0 1 1.052-.437h1.264a2.484 2.484 0 0 0 2.481-2.48V13.7a1.5 1.5 0 0 1 .437-1.052l.892-.893a2.484 2.484 0 0 0 0-3.51Z"
                    />
                    <path
                      fill="#fff"
                      d="M8 13a1 1 0 0 1-.707-.293l-2-2a1 1 0 1 1 1.414-1.414l1.42 1.42 5.318-3.545a1 1 0 0 1 1.11 1.664l-6 4A1 1 0 0 1 8 13Z"
                    />
                  </svg> </small
              ></span>
            </div>
            <div class="space-x-4">
              <small
                v-text="'Freelancer'"
                class="bg-emerald-100 text-emerald-600 px-2 text-[1.2rem] rounded-full"
              />
              <small
                v-text="'Freelancer'"
                class="bg-blue-100 text-blue-600 px-2 text-[1.2rem] rounded-full"
              />
            </div>
          </div>
        </div>
        <div class="space-y-4 mt-4">
          <dl>
            <dt
              class="text-[1.4rem] font-semibold"
              v-text="'Job Description:'"
            />
            <dl
              class="text-gray-700 text-[1.4rem] leading-[2.2rem] line-clamp-3"
            >
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Unde
              ipsa aut earum rem obcaecati consequatur molestiae? Aperiam
              debitis quaerat officia ducimus repellendus, sit est recusandae
              voluptates non quae possimus enim aut, consequatur pariatur ipsam
              iste sunt minus obcaecati veniam provident sint exercitationem
              nesciunt voluptatem excepturi. Ipsum distinctio labore eum odit
              obcaecati eveniet nulla quisquam at debitis? Earum consequuntur
              obcaecati atque? Maxime quisquam nemo, ducimus sapiente ipsam
              facilis rerum provident vero minus aspernatur, dolor repellat ipsa
              ab exercitationem sequi? Eveniet quaerat voluptates ab perferendis
              minima asperiores at veritatis temporibus, praesentium odit earum
              dolor iure recusandae, itaque culpa quisquam beatae reiciendis!
              Unde amet magni fuga excepturi eaque quidem saepe aspernatur?
              Veniam cumque aperiam qui reiciendis
            </dl>
          </dl>
          <dl class="custom-bullet">
            <dt
              class="text-[1.4rem] font-semibold"
              v-text="'Key Responsibilities:'"
            />

            <dd
              v-for="i in [...new Array(4)]"
              :key="i"
              class="text-[1.3rem] text-gray-700 my-2 line-clamp-2"
            >
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Pariatur, nemo.Lorem ipsum dolor sit, amet consectetur adipisicing
              elit. Pariatur, nemo.Lorem ipsum dolor sit, amet consectetur
              adipisicing elit. Pariatur, nemo.Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Pariatur, nemo.Lorem ipsum dolor
              sit, amet consectetur adipisicing elit. Pariatur, nemo.
            </dd>
          </dl>
        </div>
        <div class="mt-5">
          <dl>
            <dt class="text-[1.4rem] font-semibold mb-2">Requred skill:</dt>
            <dd
              v-for="skill in skills"
              :key="skill"
              v-text="skill"
              class="bg-blue-100 text-blue-600 inline-block mx-2 text-[1.2rem] px-2 rounded-full capitalize"
            />
          </dl>
        </div>
      </div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = ref([
  "wireframing",
  "figma",
  "adobe xd",
  "ui/ux design",
  "team work",
]);
</script>

<style>
</style>