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
  <div class="relative w-full h-content max-w-6xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
    <!-- Modal Header -->
    <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
      <h2 id="modal-title" class="text-xl font-bold text-black">
        Teacher Call Log
      </h2>


      <!-- Close Button -->
      <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="open = false">
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

    <div class="max-w-6xl mx-auto bg-[#E8EBF2] border rounded-lg">
      <!-- Form -->
      <form class="space-y-4">
        <div
          class="space-y-4  shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg overflow-x-auto whitespace-nowrap">
          <div class="max-w-6xl p-2 bg-[#D1D8E7] rounded-t-lg">
            <h2 class="text-lg font-semibold text-gray-800 mb-1">
              Teacher Info
            </h2>
          </div>
          <div class="pr-3 pl-3 pb-3 overflow-x-auto bg-[#E8EBF2] rounded-md whitespace-nowrap">
            <!-- Row 1 -->
            <span class="text-[#22305C] text-md font-bold py-1.5 px-3">Teacher Name</span>
            <input id="amount" type="text"
              class="w-60 py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
              placeholder="مسعي أحمد محمد العروسي" disabled required />
            <span class="text-[#22305C] text-md font-bold py-1.5 px-3">Phone number</span>
            <input id="average" type="text"
              class="w-22 py-1.5 px-3 border text-center rounded-l-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
              placeholder="06 66 66 66 66" disabled required /><input id="average" type="text"
              class="w-22 py-1.5 px-3 border text-center rounded-r-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
              placeholder="06 66 66 66 66" disabled required />
          </div>
        </div>

        <div class="pb-2 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
          <div class="w-full rounded-lg ">
            <!-- Scrollable Container -->
            <div class="overflow-y-auto h-36 rounded-lg">
              <!-- Table body for scrolling -->
              <table class="w-full border-separate" style="border-spacing: 0 10px;">
                <thead class="bg-[#D1D8E7] rounded-lg">
                  <tr class="text-left text-[#22305C] rounded-l-lg">
                    <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]"></th>
                    <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Admin</th>
                    <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Date</th>
                    <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Time</th>
                    <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Reason</th>
                    <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Comment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in rows" :key="index" @click="selectRow(index)" :class="[
                    'cursor-pointer',
                    selectedRow === index ? 'bg-[#939BAD] text-white' : '',
                    'hover:bg-gray-300'
                  ]" class="even:bg-[#D1D8E7] odd:bg-[#FFFFFF] hover:bg-[#939BAD] text-center text-[#22305C]">
                    <td class="py-2 px-4 rounded-l-lg border-l border-t border-b border-[#939BAD]">{{ item.id }}</td>
                    <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ item.admin }}</td>
                    <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ item.date }}</td>
                    <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ item.time }}</td>
                    <td class="py-2 px-4 border-t border-b border-[#939BAD]">
                      <input id="reason" type="text"
                        class="py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                        placeholder="{{ item.reason }}" :value=item.reason disabled />
                    </td>
                    <td class="py-2 px-4 rounded-r-lg border-r border-t border-b border-[#939BAD]">
                      <input id="reason" type="text"
                        class="py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                        :value=item.comment disabled />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>



        </div>






        <div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-center">
          <select id="slecrelation"
            class="w-40 py-1.5 px-2 text-[#22305C] text-left border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            required>
            <option value="" disabled selected>Select Reason</option>
            <option class="text-left" value="reason1">Reason 1</option>
            <option class="text-left" value="reason2">Reason 2</option>
            <option class="text-left" value="reason3">Reason 3</option>
            <option class="text-left" value="reason4">Reason 4</option>

          </select>
          <input id="reason" type="text"
            class="w-40 y-1.5 px-2 text-left text-[#22305C] border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            placeholder="Comment" />
          <button
            class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
            Save
          </button>

        </div>


      </form>

    </div>

  </div>
</template>