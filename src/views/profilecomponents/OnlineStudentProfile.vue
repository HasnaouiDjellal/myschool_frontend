<script setup>
import { ref } from 'vue';
// Modal and Form State
const open = ref(false);
const openstaff = ref(false);
const isModalOpen = ref(false);
const selectedRowData = ref(null);




</script>

<template>
      <div class="max-w-8xl mx-auto bg-[#E8EBF2] rounded-lg">

<!-- ROW 1 -->
<div class="space-y-4 text-[#22305C] rounded-lg">
      <div class="grid grid-cols-3 gap-6 bg-[#E8EBF2] rounded-lg">
<!-- Image and Status -->
        <div class="flex flex-col items-center p-2 ">
          <img src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg" alt="Student" class="h-36 rounded-lg">
         <div class="flex items-center mt-2">
          <div class="relative">
          <select class="text-sm text-[#388E3C] font-medium w-32 rounded-lg px-4 py-1.5 bg-[#E8F5E9] border-[#E8F5E9] focus:ring-0 focus:ring-[#E8F5E9]"
                  id="dropdownact">
          <option value="" disabled>Select</option>
            <option value="active">Active</option>
            <option value="notactive">Not Active</option>
          </select>
        </div>
          <span class="ml-4 text-gray-600">SID: 001</span>
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
                 <tr 
                  class="bg-white text-center hover:bg-gray-50 rounded-lg" 
                  v-for="(row, index) in links" 
                  :key="index">
                  <td class="px-4 py-2 border-l border-t border-b border-[#939BAD] text-left rounded-l-lg">{{ row.name }}</td>
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
      <h2 class="text-[#22305C] text-xl font-semibold">Student Info</h2>
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
        <h2 class="text-[#22305C] text-xl font-semibold">Student's Behavior</h2>
      </div>
      <div class="grid grid-cols-2 gap-4 p-2">
        <select class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
          <option>Constant participation</option>
          <!-- Options -->
        </select>
        <select class="w-full p-2 border-b-1 border-[#939BAD] rounded-md">
          <option>Behaved</option>
          <!-- Options -->
        </select>
      </div>
    </div>

    <!-- Progress Track -->
    <div class="bg-[#F6FFF7] rounded-xl shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] overflow-hidden">
<div class="flex h-14 p-3 bg-[#E8F5E9] rounded-t-lg">
  <h2 class="text-[#22305C] text-xl font-semibold">Progress Track</h2>
  <div class="flex ml-auto items-center">
    <label for="table-search" class="sr-only">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="text" id="table-search" class="py-[8px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]" placeholder="Search">
    </div>
  </div>
</div>
<div class="overflow-x-auto overflow-y-auto text-lg pr-2 pl-2">
  <div class="max-h-[320px]">
    <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
      <tbody class="overflow-y-auto rounded-lg">
        <tr
          v-for="(row, index) in tableData1"
          :key="index"
          class="even:bg-[#E8F5E9] odd:bg-[#FFFFFF] hover:bg-green-100 text-center text-sm text-gray-800">
          <td class="py-3 px-4 border-l border-t border-b border-[#939BAD] rounded-l-lg">{{ row.id }}</td>
          <td class="py-3 px-4 border-t border-b border-[#939BAD]">{{ row.level }}</td>
          <td class="py-3 px-4 border-t border-b border-[#939BAD]">{{ row.teacher }}</td>
          <td class="py-3 px-4 border-t border-b border-[#939BAD]">{{ row.note }}</td>
          <td class="py-3 px-4 border-t border-b border-[#939BAD]">{{ row.date }}</td>
          <td class="py-3 px-4 border-r border-t border-b border-[#939BAD] rounded-r-lg">{{ row.feedback }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
  </div>
</div>
</div>

<!-- ROW 4 -->
<div class="space-y-4 pt-6 pb-2 text-[#22305C] rounded-lg">
<div class="bg-[#E8EBF2] rounded-xl overflow-hidden shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
<div class="flex h-14 p-3 bg-[#D1D8E7] rounded-t-lg ">
  <h2 class="text-[#22305C] text-xl font-semibold">Event History</h2>
  <div class="flex ml-auto items-center">
    <label for="table-search" class="sr-only">Search</label>
    <div class="relative">
      <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
        <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
        </svg>
      </div>
      <input type="text" id="table-search" class="py-[8px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]" placeholder="Search">
    </div>
  </div>
</div>
<div class="overflow-x-auto overflow-y-auto text-md pl-2 pr-2">
  <div class="max-h-[434px]">
    <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
      <tbody class="overflow-y-auto rounded-lg text-md font-semibold">
        <tr
          v-for="(row, index) in tableData2"
          :key="index"
          class="even:bg-[#D1D8E7] odd:bg-[#FFFFFF] hover:bg-[#939BAD] text-center text-[#22305C]">
          <td class="py-3 px-4 rounded-l-lg border-l border-t border-b border-[#939BAD]">{{ row.id }}</td>
          <td class="py-3 px-4 border-t border-b border-[#939BAD]">{{ row.group }}</td>
          <td class="py-3 px-4 border-t border-b border-[#939BAD]">{{ row.balance }} DA</td>
          <td class="border-t border-b border-[#939BAD] ">
            <input 
          id="classtype"
          type="text"
          class="py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D] "
          :value=row.classtype
          :class="{
            'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': row.classtype === 'Paid',
            'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': row.classtype === 'Not Paid',
            'bg-[#FFF8E1] text-[#FF6F00] border-[#FFF8E1]': row.classtype === 'Exempt',
            }"
          disabled
          />
          </td>
          <td class="py-3 px-4 border-t border-b border-[#939BAD]">{{ row.date }}</td>
          <td class="py-3 px-4 border-t border-b border-r border-[#939BAD] rounded-r-lg">{{ row.comment }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
</div>

</div>
</template>

<script>
export default {
  components: {

},
data() {
return {
  activeTab: "regular",
    tableData1: [
      {
        id: 2354,
        level: "A1.1 - Fr - Teens",
        teacher: "Teacher",
        note: "Note",
        date: "DD/MM/YYYY",
        feedback: "feedback",
      },
      // Add more rows here as needed
      { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
      { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
      { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
      { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
      { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
      { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
      { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },

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
    links: [
      { name: "John Doe", relation: "Father" },
      { name: "Jane Doe", relation: "Mother" },
      { name: "Sam Smith", relation: "Brother" },
      { name: "Sam Smith", relation: "Brother" },
      { name: "Sam Smith", relation: "Brother" },
      // Add more rows here
    ],

};
},
computed: {

},
methods: {

},



};
</script>