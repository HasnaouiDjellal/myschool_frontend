<script setup>
import { ref } from 'vue';
const open = ref(false);
const rows = ref([
  {
    id: "1",
    admin: "Raouf Boukhoucha",
    date: "DD/MM/YYYY",
    time: "00:00",
    reason: "New group",
    comment: "Not Comming",
  },
  {
    id: "2",
    admin: "Raouf Boukhoucha",
    date: "DD/MM/YYYY",
    time: "00:00",
    reason: "New group",
    comment: "Not Comming",
  },
  {
    id: "3",
    admin: "Raouf Boukhoucha",
    date: "DD/MM/YYYY",
    time: "00:00",
    reason: "New group",
    comment: "Not Comming",
  },
  {
    id: "4",
    admin: "Raouf Boukhoucha",
    date: "DD/MM/YYYY",
    time: "00:00",
    reason: "New group",
    comment: "Not Comming",
  },

]);
</script>

<template>

  <!-- Modal Content -->
  <div class="relative w-full max-w-xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-6 overflow-auto">
  <!-- Modal Header -->
  <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
    <h2 id="modal-title" class="text-xl font-bold text-black">New Printing</h2>

    <!-- Close Button -->
    <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="open = false">
      <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z" fill="#22305C" />
        <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z" fill="#22305C" />
      </svg>
    </button>
  </div>

  <!-- Modal Content -->
  <div class="max-w-xl mx-auto bg-[#E8EBF2] border rounded-lg px-4 py-2">
    <div class="flex flex-wrap gap-x-6 mb-4">
      <div class="flex items-center">
        <input class="your-radio-classes" type="radio" name="category" id="languages" />
        <label class="ml-2 text-[#22305C] hover:cursor-pointer" for="languages">Languages</label>
      </div>
      <div class="flex items-center">
        <input class="your-radio-classes" type="radio" name="category" id="tutoring" />
        <label class="ml-2 text-[#22305C] hover:cursor-pointer" for="tutoring">Tutoring</label>
      </div>
      <div class="flex items-center">
        <input class="your-radio-classes" type="radio" name="category" id="administration" />
        <label class="ml-2 text-[#22305C] hover:cursor-pointer" for="administration">Administration</label>
      </div>
      <div class="flex items-center">
        <input class="your-radio-classes" type="radio" name="category" id="event" />
        <label class="ml-2 text-[#22305C] hover:cursor-pointer" for="event">Event</label>
      </div>
    </div>

    <!-- Category Select -->
    <div class="flex items-center gap-x-4 mb-4">
      <label class="w-28 text-[#22305C] font-bold" for="category">Category</label>
      <div class="flex-1">
        <select id="category" class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
          <option value="" disabled selected>Category</option>
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
        </select>
      </div>
    </div>

    <!-- Group Select -->
    <div class="flex items-center gap-x-4 mb-4">
      <label class="w-28 text-[#22305C] font-bold" for="group">Group</label>
      <div class="flex-1">
        <select id="group" class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
          <option value="" disabled selected>Group</option>
          <option value="A1">2358 | A1.1 - Fr - Teens | Mon,18:00 - Wed, 18:00</option>
          <option value="A2">A2</option>
          <option value="B1">B1</option>
          <option value="B2">B2</option>
        </select>
      </div>
    </div>

    <!-- Bookname Input -->
    <div class="flex items-center gap-x-4 mb-4">
      <label class="w-28 text-[#22305C] font-bold" for="bookname">Bookname</label>
      <div class="flex-1">
        <input id="bookname" type="text" class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Bookname" required />
      </div>
    </div>

    <!-- Unit and Quantity Input -->
    <div class="flex items-center gap-x-4 mb-4">
      <label class="w-28 text-[#22305C] font-bold" for="unit">Unit</label>
      <div class="flex-1">
        <input id="unit" type="text" class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Unit" required />
      </div>

      <label class="w-28 text-[#22305C] font-bold" for="quantity">Quantity</label>
      <div class="flex-1">
        <input id="quantity" type="text" class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Quantity" required />
      </div>
    </div>

    <!-- Note Input -->
    <div class="flex items-center gap-x-4 mb-4">
      <label class="w-28 text-[#22305C] font-bold" for="note">Note</label>
      <div class="flex-1">
        <input id="note" type="text" class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Note" required />
      </div>
    </div>
  </div>

  <!-- Form Footer -->
  <form class="space-y-4">
    <div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-end">
      <button class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
        Add
      </button>
    </div>
  </form>
</div>


</template>