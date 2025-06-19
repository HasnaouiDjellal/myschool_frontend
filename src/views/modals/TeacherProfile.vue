<script setup>
import { ref } from 'vue';
// Modal and Form State
const open = ref(false);
const openstaff = ref(false);
const isModalOpen = ref(false);
const selectedRowData = ref(null);
const openavailability = ref(false);




</script>

<template>
  <div class="max-w-8xl mx-auto bg-[#E8EBF2] rounded-lg">
    <!-- Modal Header -->
    <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
      <h2 id="modal-title" class="text-xl font-bold text-black">
        Teacher Profile
      </h2>
      <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 "
        @click="openavailability = true">Teacher
        Availability</button>
      <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 ">Print payment
        details</button>
      <!-- Close Button -->
      <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="isModalOpen = false">
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

    <!-- ROW 1 -->
    <div class="space-y-4 text-[#22305C] rounded-lg">
      <div class="grid grid-cols-3 gap-6 bg-[#E8EBF2] rounded-lg">
        <!-- Image and Status -->
        <div class="flex flex-col items-center p-2 ">
          <img src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="Student" class="h-36 rounded-lg">
          <div class="flex items-center mt-2">
            <div class="relative">
              <select
                class="text-sm text-[#388E3C] font-medium w-32 rounded-lg px-4 py-1.5 bg-[#E8F5E9] border-[#E8F5E9] focus:ring-0 focus:ring-[#E8F5E9]"
                id="dropdownact">
                <option value="" disabled>Select</option>
                <option value="active">Active</option>
                <option value="notactive">Not Active</option>
              </select>
            </div>
            <span class="ml-4 text-gray-600">TID: 001</span>
          </div>
        </div>

        <!-- Education Info -->
        <div class="bg-[#FAF4FF] rounded-xl shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
          <div class="h-14 p-3 bg-[#E5D6F1] rounded-t-xl">
            <h2 class="text-[#22305C] text-xl font-semibold">Education Info</h2>
          </div>
          <div class="space-y-2 p-2">
            <select class="w-full p-2 border-b-1 border-[#939BAD] rounded-lg">
              <option>Select Level</option>
              <!-- Options -->
            </select>
            <input type="text" placeholder="Institution" class="w-full p-2 border-b-1 border-[#939BAD] rounded-lg">
            <input type="text" placeholder="Average" class="w-full p-2 border-b-1 border-[#939BAD] rounded-lg">
          </div>
        </div>

        <div class="bg-[#FAF4FF] rounded-xl shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
          <div class="h-14 p-3 bg-[#E5D6F1] rounded-t-xl">
            <h2 class="text-[#22305C] text-xl font-semibold">Links</h2>
          </div>
          <div class="max-h-40 pr-2 pl-2 overflow-y-auto rounded-lg">
            <table class="table-auto w-full border-separate" style="border-spacing: 0 10px;">
              <tbody>
                <tr class="bg-white text-center hover:bg-gray-50 rounded-lg" v-for="(row, index) in links" :key="index">
                  <td class="px-4 py-2 border-l border-t border-b border-[#939BAD] text-left rounded-l-lg">{{ row.name
                  }}</td>
                  <td class="px-4 py-2 border-r border-t border-b border-[#939BAD] rounded-r-lg">{{ row.relation }}</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </div>
    <!-- ROW 2 -->
    <div class="space-y-4 pt-6 pb-2 text-[#22305C] rounded-lg">
      <div class="grid grid-cols-3 gap-6 bg-[#E8EBF2] rounded-lg">
        <!-- Student Info -->
        <div class="bg-[#FAF4FF] rounded-xl shadow col-span-1 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
          <div class="h-14 p-3 bg-[#E5D6F1] rounded-t-lg">
            <h2 class="text-[#22305C] text-xl font-semibold">Teacher Info</h2>
          </div>
          <div class="space-y-2 p-2 max-h-[454px] overflow-y-auto">
            <input type="text" placeholder="First Name" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
            <input type="text" placeholder="Last Name" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
            <input type="date" placeholder="DD/MM/YYYY" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
            <input type="text" placeholder="City / Town" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
            <input type="text" placeholder="Street" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
            <select class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
              <option>Select Gender</option>
              <!-- Options -->
            </select>
            <input type="text" placeholder="Phone Number 1" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
            <input type="text" placeholder="Phone Number 2" class="w-full p-2 border-b-1 border-[#939BAD] rounded-s">
            <input type="text" placeholder="Parent Name" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
          </div>
        </div>

        <!-- Right Column -->
        <div class="col-span-2 space-y-4 max-h-[600px] overflow-y-auto">
          <!-- Student's Behavior -->
          <div class="bg-[#F6FFF7] rounded-xl shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
            <div class="h-14 p-3 bg-[#E8F5E9] rounded-t-lg">
              <h2 class="text-[#22305C] text-xl font-semibold">Teacher's CV</h2>
            </div>
            <div class="flex gap-4 p-2">
              <input type="text" placeholder="Teacher's Name" class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
            </div>
          </div>

          <!-- CPD Tracker -->
          <div class="bg-[#F6FFF7] rounded-xl shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] max-h-[380px] overflow-hidden">
            <div class="flex h-14 p-3 bg-[#E8F5E9] rounded-t-lg">
              <h2 class="text-[#22305C] text-xl font-semibold">CPD Tracker</h2>
              <div class="flex ml-auto items-center">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                  <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" id="table-search"
                    class="py-[8px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]"
                    placeholder="Search">
                </div>
              </div>
            </div>
            <div class="overflow-x-auto pr-2 pl-2">
              <div class="max-h-[420px] h-[380px]">
                <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
                  <tbody class="overflow-y-auto rounded-lg">
                    <tr v-for="(row, index) in tableData1" :key="index"
                      class="even:bg-[#E8F5E9] odd:bg-[#FFFFFF] hover:bg-green-100 text-center text-sm text-gray-800">
                      <td
                        class="py-3 px-4 border-l  border-t border-b border-[#939BAD] rounded-l-lg text-left font-semibold">
                        {{ row.workshop }}</td>
                      <td class="py-3 px-4 border-t border-b border-[#939BAD] font-semibold">{{ row.periode }} DAYS
                      </td>
                      <td class="py-3 px-4 border-t border-b border-[#939BAD] font-semibold">{{ row.date1 }}</td>
                      <td class="py-3 px-4 border-t border-b border-[#939BAD] font-semibold">{{ row.date }}</td>
                      <td class="py-1 px-4 border-r border-t border-b border-[#939BAD] rounded-r-lg font-semibold">
                        <input id="classtype" type="text"
                          class="py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D] " :value=row.classtype
                          :class="{
                            'bg-[#E3F2FD] text-[#3279B2] border-[#E3F2FD]': row.classtype === 'In Person',
                            'bg-[#FFF9E6] text-[#FC9B00] border-[#FFF9E6]': row.classtype === 'Hybrid',
                            'bg-[#F5E8FF] text-[#9B3EAB] border-[#F5E8FF]': row.classtype === 'Online',
                          }" disabled />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4 pt-6 pb-2 text-[#22305C] rounded-lg">
      <div class="bg-[#E3F2FD] rounded-xl overflow-hidden shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">

        <!-- Header -->
        <div class="flex h-14 p-3 bg-[#D2E4F1] rounded-t-lg">
          <h2 class="text-[#22305C] text-xl font-semibold">Groups and Attendance</h2>
          <div class="flex ml-auto items-center">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 left-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search"
                class="py-[8px] ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-white focus:ring-[#3D548D] focus:border-[#D1D8E7]"
                placeholder="Search">
            </div>
          </div>
        </div>

        <!-- Group Selector -->
        <div class="mb-4 px-4 pt-2">
          <label class="block text-sm font-medium text-gray-700 mb-1">Select Group:</label>
          <select v-model="selectedGroupId"
            class="w-full md:w-1/3 p-2 border border-[#939BAD] rounded-lg focus:ring-pink-500">
            <option v-for="group in teacher.groups" :key="group.id" :value="group.id">
              {{ group.name }}
            </option>
          </select>
        </div>

        <!-- Attendance Table -->
        <div class="overflow-x-auto px-4 pb-4" v-if="selectedGroup">
          <div class="mb-2 text-gray-600">
            Schedule: <span class="font-medium">{{ selectedGroup.schedule }}</span>
          </div>

          <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
            <thead class="bg-[#FFFFFF]">
              <tr class="text-center border bg-[#FFFFFF] text-[#22305C]">
                <th class="py-2 px-4 rounded-l-lg">Date</th>
                <th class="py-2 px-4">Status</th>
                <th class="py-2 px-4 rounded-r-lg">Covered By</th>
              </tr>
            </thead>
            <tbody class="text-center text-[#22305C] font-semibold">
              <tr v-for="(entry, index) in selectedGroup.attendance" :key="index"
                class="hover:bg-[#939BAD] even:bg-[#D1D8E7] odd:bg-[#FFFFFF]">
                <td class="py-2 px-4 rounded-l-lg border border-[#939BAD]">
                  {{ entry.date }}
                </td>
                <td class="py-2 px-4 border border-[#939BAD]">
                  <input type="text" class="py-1 px-3 w-32 text-center rounded-lg border text-sm" :value="entry.status"
                    :class="{
                      'bg-[#E3F2FD] text-[#3279B2] border-[#E3F2FD]': entry.status === 'Absent',
                      'bg-[#FFF9E6] text-[#FC9B00] border-[#FFF9E6]': entry.status === 'Late',
                      'bg-[#F5E8FF] text-[#9B3EAB] border-[#F5E8FF]': entry.status === 'Present',
                    }" disabled />
                </td>
                <td class="py-2 px-4 rounded-r-lg border border-[#939BAD]">
                  {{ entry.covered_by?.name || '-' }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- ROW 4 -->
    <div class="space-y-4 pt-6 pb-2 text-[#22305C] rounded-lg">
      <div class="bg-[#E8EBF2] rounded-xl overflow-hidden shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
        <div class="flex h-14 p-3 bg-[#D1D8E7] rounded-t-lg ">
          <h2 class="text-[#22305C] text-xl font-semibold">Teacher Monthly Salary History</h2>
          <div class="flex ml-auto items-center">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search"
                class="py-[8px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]"
                placeholder="Search">
            </div>
          </div>
        </div>
        <div class="overflow-x-auto overflow-y-auto text-md pl-2 pr-2">
          <div class="max-h-[240px]">
            <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
              <tbody class="overflow-y-auto rounded-lg text-md font-semibold">
                <tr v-for="(row, index) in tableData3" :key="index"
                  class="even:bg-[#D1D8E7] odd:bg-[#FFFFFF] hover:bg-[#939BAD] text-center text-[#22305C]">
                  <td class="py-2 px-4 rounded-l-lg border-l border-t border-b border-[#939BAD]">{{ row.id }}</td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.group }}</td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.balance }} DA</td>
                  <td class="border-t border-b border-[#939BAD] ">
                    <input id="classtype" type="text"
                      class="py-1 px-2 w-32 text-center rounded-lg focus:ring-[#3D548D] " :value=row.classtype :class="{
                        'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': row.classtype === 'Paid',
                        'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': row.classtype === 'Not Paid',
                        'bg-[#FFF8E1] text-[#FF6F00] border-[#FFF8E1]': row.classtype === 'Exempt',
                      }" disabled />
                  </td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.date }}</td>
                  <td class="py-2 px-4 border-t border-b border-r border-[#939BAD] rounded-r-lg">{{ row.comment }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>

    <div class="space-y-4 pt-6 pb-2 text-[#22305C] rounded-lg">
      <div class="bg-[#E8EBF2] rounded-xl overflow-hidden shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
        <div class="flex h-14 p-3 bg-[#D1D8E7] rounded-t-lg ">
          <h2 class="text-[#22305C] text-xl font-semibold">Teacher Salary History</h2>
          <div class="flex ml-auto items-center">
            <label for="table-search" class="sr-only">Search</label>
            <div class="relative">
              <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="text" id="table-search"
                class="py-[8px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]"
                placeholder="Search">
            </div>
          </div>
        </div>
        <div class="overflow-x-auto overflow-y-auto text-md pl-2 pr-2">
          <div class="max-h-[240px]">
            <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
              <thead>
                <tr>
                  <th>Payment Type</th>
                  <th>TP</th>
                  <th>TL</th>
                  <th>TA</th>
                  <th>TJ</th>
                  <th>TC</th>
                  <th>Amount</th>
                  <th>Status</th>
                  <th>Date</th>
                  <th>Note</th>
                </tr>
              </thead>
              <tbody class="overflow-y-auto rounded-lg text-md font-semibold">
                <tr v-for="(row, index) in tableData4" :key="index"
                  class="even:bg-[#D1D8E7] odd:bg-[#FFFFFF] hover:bg-[#939BAD] text-center text-[#22305C]">
                  <td class="py-2 px-4 rounded-l-lg border-l border-t border-b border-[#939BAD]">
                    <input id="classtype" type="text"
                      class="py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D] " :value=row.paymenttype :class="{
                        'bg-[#E3F2FD] text-[#3279B2] border-[#E3F2FD]': row.paymenttype === 'byclass',
                        'bg-[#FFF9E6] text-[#FC9B00] border-[#FFF9E6]': row.paymenttype === 'bymonth',
                        'bg-[#F5E8FF] text-[#9B3EAB] border-[#F5E8FF]': row.paymenttype === 'tutoring',
                      }" disabled />
                  </td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.tp }}</td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.tl }}</td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.ta }}</td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.tj }}</td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.tc }}</td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.amount }}</td>
                  <td class="border-t border-b border-[#939BAD] ">
                    <input id="status" type="text" class="py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D] "
                      :value=row.status :class="{
                        'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': row.status === 'Paid',
                        'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': row.status === 'Not Paid',
                      }" disabled />
                  </td>
                  <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ row.date }} DA</td>
                  <td class="py-2 px-4 rounded-r-lg border-r border-t border-b border-[#939BAD]">{{ row.note }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- New Teacher Availability -->
  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !openavailability }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl" @click="openavailability = false" aria-hidden="true">
    </div>

    <TeacherAvailability />
  </div>


</template>


<script>
import TeacherAvailability from './TeacherAvailability.vue';
export default {
  components: {
    TeacherAvailability,

  },
  name: 'TeacherGroupsAndAttendance',
  data() {
    return {
      activeTab: "regular",
      tableData1: [
        // Add more rows here as needed
        { workshop: "A1.1 - Fr - Teens", periode: 3, date1: "DD/MM/YYYY", date: "DD/MM/YYYY", classtype: "In Person" },
        { workshop: "A1.1 - Fr - Teens", periode: 3, date1: "DD/MM/YYYY", date: "DD/MM/YYYY", classtype: "Hybrid" },
        { workshop: "A1.1 - Fr - Teens", periode: 5, date1: "DD/MM/YYYY", date: "DD/MM/YYYY", classtype: "Online" },
        { workshop: "A1.1 - Fr - Teens", periode: 5, date1: "DD/MM/YYYY", date: "DD/MM/YYYY", classtype: "In Person" },
        { workshop: "A1.1 - Fr - Teens", periode: 5, date1: "DD/MM/YYYY", date: "DD/MM/YYYY", classtype: "In Person" },
        { workshop: "A1.1 - Fr - Teens", periode: 5, date1: "DD/MM/YYYY", date: "DD/MM/YYYY", classtype: "In Person" },
        { workshop: "A1.1 - Fr - Teens", periode: 5, date1: "DD/MM/YYYY", date: "DD/MM/YYYY", classtype: "In Person" },
      ],
      tableData2: [
        {
          id: 2354,
          group: "A1.1 - Fr - Teens",
          balance: 2000,
          classtype: "Not Paid",
          date: "DD/MM/YYYY",
          comment: "comment",
        },
        // Add more rows here as needed
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Paid", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Paid", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },


      ],
      tableData3: [
        {
          id: 2354,
          group: "A1.1 - Fr - Teens",
          balance: 2000,
          classtype: "Not Paid",
          date: "DD/MM/YYYY",
          comment: "comment",
        },
        // Add more rows here as needed
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Paid", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Paid", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },


      ],
      tableData4: [
        // Add more rows here as needed
        { paymenttype: "bymonth", tp: 12, tl: 12, ta: 12, tj: 12, tc: 12, amount: 12, status: "Paid", date: "DD/MM/YYYY", note: "note" },
        { paymenttype: "byclass", tp: 12, tl: 12, ta: 12, tj: 12, tc: 12, amount: 12, status: "Paid", date: "DD/MM/YYYY", note: "note" },
        { paymenttype: "tutoring", tp: 12, tl: 12, ta: 12, tj: 12, tc: 12, amount: 12, status: "Paid", date: "DD/MM/YYYY", note: "note" },
      ],
      links: [
        { name: "John Doe", relation: "Father" },
        { name: "Jane Doe", relation: "Mother" },
        { name: "Sam Smith", relation: "Brother" },
        { name: "Sam Smith", relation: "Brother" },
        { name: "Sam Smith", relation: "Brother" },
        // Add more rows here
      ],
      selectedGroupId: null,
      teacher: {
        name: 'John Doe',
        groups: [
          {
            id: 1,
            name: 'Grade 8 - Science',
            schedule: 'Mon & Wed',
            attendance: [
              { date: '2025-05-01', status: 'Present' },
              { date: '2025-05-02', status: 'Absent', covered_by: { name: 'Ms. Alice' } },
              { date: '2025-05-03', status: 'Present' },
            ]
          },
          {
            id: 2,
            name: 'Grade 9 - Math',
            schedule: 'Tue & Thu',
            attendance: [
              { date: '2025-05-01', status: 'Absent', covered_by: { name: 'Mr. Ahmed' } },
              { date: '2025-05-02', status: 'Present' },
              { date: '2025-05-03', status: 'Present' },
            ]
          }
        ]
      },

    };
  },
  computed: {
    selectedGroup() {
      return this.teacher.groups.find(group => group.id === this.selectedGroupId) || null;
    }
  },
  created() {
    if (this.teacher.groups.length > 0) {
      this.selectedGroupId = this.teacher.groups[0].id;
    }
  }



};
</script>
