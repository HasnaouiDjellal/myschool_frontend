<script setup>
import { ref } from 'vue';
const newlanguage = ref(false);
</script>
<template>

  <!-- Modal Content -->
  <div
    class="relative w-11/12 max-w-[400px] mt-4 rounded-2xl overflow-auto h-auto flex flex-col pb-4 bg-slate-200 shadow-[0px_0px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
    <div
      class="flex gap-10 justify-between items-center self-stretch px-4 py-3 w-full text-xl font-medium rounded-t-2xl rounded-b-none bg-slate-300 min-h-[62px] text-blue-950">

      <h2 id="newClassTitle" class="self-stretch my-auto">New language</h2>
      <!-- Close Button -->
      <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="newlanguage = false">
        <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z"
            fill="#22305C" />
          <path fill-rule="evenodd" clip-rule="evenodd"
            d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z"
            fill="#22305C" />
        </svg>
      </button>
    </div>


    <!-- Language  -->

    <div class="flex gap-2 items-center pl-4 mt-4 w-full max-w-sm">

      <input type="text" id="updateLanguage" name="updateLanguage" placeholder="Enter Language"
        class=" placeholder-gray-500 gap-2 self-stretch px-2 my-auto bg-white rounded-lg border border-gray-400 border-solid min-h-[40px] min-w-[240px] w-[368px]"
        required />
    </div>
    <!-- Button -->
    <div class="flex gap-2 items-center pl-4 mt-4 w-full max-w-sm text-base text-white whitespace-nowrap">
      <!-- Push this div to the right -->
      <div class="flex gap-4 items-center ml-auto my-auto">
        <button type="submit" class="gap-4 self-stretch px-4 py-2 my-auto rounded-lg bg-slate-600 min-h-[40px]"
          style="background-color: #3D548D;" onmouseover="this.style.backgroundColor='#2A4A6A'"
          onmouseout="this.style.backgroundColor='#3D548D'">
          Save
        </button>
      </div>
    </div>

  </div>
</template>