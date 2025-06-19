<script setup>
import { ref } from 'vue';
const openstaff = ref(false);
</script>
<template>
    <!-- Modal Content -->
    <div class="relative w-full h-[52vh] max-w-6xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
      <!-- Modal Header -->
      <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
        <h2 id="modal-title" class="text-xl font-bold text-black">
          New Staff
        </h2>

        <!-- Close Button -->
        <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="openstaff = false">
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
        <!-- Form 1 -->

        <form class="space-y-4">
          <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <div class="max-w-6xl p-2 bg-[#D1D8E7] rounded-t-lg">
              <h2 class="text-lg font-semibold text-gray-800 mb-1">
                Staff Info
              </h2>
              <!-- Row 1 -->
            </div>
            <div class="grid grid-cols-1 pr-3 pl-3 md:grid-cols-3 gap-4 ">
              <input id="First Name" type="text"
                class="w-full py-1.5 px-3 border border-b-1 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="First Name" required />
              <input id="Last Name" type="text"
                class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="Last Name" required />

              <input id="date" type="date"
                class="w-full py-1.5 px-3 border text-gray-600 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                required />
            </div>
            <!-- Row 2 -->
            <div class="grid grid-cols-1 pr-3 pl-3 md:grid-cols-3 gap-4">
              <input id="city" type="text"
                class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="City/Town" required />
              <input id="street" type="text"
                class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="Street" required />
              <select id="gender"
                class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                required>
                <option value="" disabled selected>Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <!-- Row 3 -->
            <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-3 gap-4">
              <input id="phone1" type="text"
                class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="Phone Number 1" required />
              <input id="phone2" type="text"
                class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="Phone Number 2" required />
            </div>
          </div>

          <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <div class="max-w-6xl p-2 bg-[#D1D8E7] rounded-t-lg">
              <h2 class="text-lg font-semibold text-gray-800 mb-1">
                Education Info
              </h2>
            </div>
            <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-6 gap-4">
              <!-- Row 1 -->
              <select id="selclevel"
                class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                required>
                <option value="" disabled selected>Select Level</option>
                <option value="A1">A1</option>
                <option value="A2">A2</option>
                <option value="B1">A1</option>
                <option value="B2">A2</option>
              </select>
              <input id="institution" type="text"
                class="w-full py-1.5 px-3 col-start-2 col-end-7 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="Institution" required />
            </div>
          </div>

          <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <div class="max-w-6xl p-2 bg-[#D1D8E7] rounded-t-lg">
              <h2 class="text-lg font-semibold text-gray-800 mb-1">
                Links
              </h2>
            </div>
            <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-2 gap-4">
              <!-- Row 1 -->
              <input id="Search" type="text"
                class="w-full py-1.5 px-3 border border-b-1 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                placeholder="Search" required />
              <select id="slecrelation"
                class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                required>
                <option value="" disabled selected>Select Relation</option>
                <option value="father">Father</option>
                <option value="mother">Mother</option>
                <option value="sister">Sister</option>
                <option value="brother">Brother</option>
              </select>
              <button class="col-start-6 pr-2">
                <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
                  <path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#1C274C" stroke-width="1.5"
                    stroke-linecap="round" />
                </svg>
              </button>
            </div>
          </div>



          <div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-end">
            <button
              class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
              Save
            </button>

          </div>


        </form>

      </div>

    </div>
</template>