<script setup>
import { ref } from 'vue';

// Modal and Form State
const open = ref(false);
const open2 = ref(false);
const activeForm = ref('form2');

// Set Active Form Function
const setActiveForm = (form) => {
  activeForm.value = form;
};

// Dropdown State
const dropdownOpen = ref(false);

// Table State
const rows = ref([
  {
    class: "A1.1 - Fr - Teens",
    price: "4500 DA",
    schedule: "WD",
    time: "Mornings",
    instructor: "Not Assigned",
  },
  {
    class: "A1.1 - Fr - Teens",
    price: "4500 DA",
    schedule: "WD",
    time: "Mornings",
    instructor: "Not Assigned",
  },
  {
    class: "A1.1 - En - Teens",
    price: "4500 DA",
    schedule: "WD",
    time: "Mornings",
    instructor: "Raouf Boukoucha",
  },
  {
    class: "A1.1 - Fr - Teens",
    price: "4500 DA",
    schedule: "Wend",
    time: "Afternoons",
    instructor: "Arouci Mesia",
  },
]);

// Selected Row State
const selectedRow = ref(null);

// Row Selection Function
const selectRow = (index) => {
  selectedRow.value = index;
};


</script>
<template>
  <!-- Personal Info -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="flex max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Personal Info' : 'Send a Message' }}
      </h2>
      <div class="flex ml-auto">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search"
            class="py-[5px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]"
            placeholder="Search">
        </div>
      </div>
    </div>
    <!-- Row 1 -->
    <div class="grid grid-cols-1 pr-3 pl-3 md:grid-cols-3 gap-4">
      <input id="enrolledfirstname" type="text"
        class="w-full py-1.5 px-3 border border-b-1 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="First Name" required />
      <input id="Lenrolledlastname" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Last Name"
        required />
      <input id="enrolleddate" type="date"
        class="w-full py-1.5 px-3 border text-gray-600 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        required />
    </div>
    <!-- Row 2 -->
    <div class="grid grid-cols-1 pr-3 pl-3 md:grid-cols-3 gap-4">
      <input id="enrolledcity" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="City/Town"
        required />
      <input id="enrolledstreet" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Street"
        required />
      <select id="enrolledgender"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
    <!-- Row 3 -->
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-3 gap-4">
      <input id="enrolledphone1" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Phone Number 1" required />
      <input id="enrolledphone2" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Phone Number 2" required />
      <input id="enrolledparentname" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Parent Name" required />
    </div>
  </div>


  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Education Info' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-3 gap-4">
      <!-- Row 1 -->
      <select id="enrolledgender"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Level</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">A1</option>
        <option value="B2">A2</option>
      </select>
      <input id="enrolledinstitution" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Institution" required />
      <input id="enrolledaverage" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Average"
        required />
    </div>
  </div>


  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <!-- Header -->
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Preferences' : 'Send a Message' }}
      </h2>
    </div>

    <!-- Dynamic Preference Blocks -->
    <div v-for="(preference, index) in preferences" :key="index"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-2">
      <select v-model="preference.time"
        class="w-full py-2 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Time Preferences</option>
        <option value="time 1">Time 1</option>
        <option value="time 2">Time 2</option>
      </select>

      <select v-model="preference.days"
        class="w-full py-2 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Days Preferences</option>
        <option value="day1">Day 1</option>
        <option value="day2">Day 2</option>
      </select>

      <select v-model="preference.language"
        class="w-full py-2 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Language</option>
        <option value="english">English</option>
        <option value="Spanish">Spanish</option>
        <option value="French">French</option>
      </select>

      <select v-model="preference.level"
        class="w-full py-2 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Language Level</option>
        <option value="A1">A1</option>
        <option value="A2">A2</option>
        <option value="B1">B1</option>
        <option value="B2">B2</option>
      </select>
    </div>
    <div class="flex justify-end px-4 pb-4">
      <button @click="addPreference" :disabled="preferences.length >= maxPreferences"
        class="hover:scale-110 transition disabled:opacity-40 disabled:cursor-not-allowed">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
          <path d="M15 12H9M12 9V15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
    </div>

  </div>


  <div class="pb-2 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="flex max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Suggested Groups' : 'Send a Message' }}
      </h2>
      <div class="flex ml-auto">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="text" id="table-search"
            class="py-[5px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]"
            placeholder="Search">
        </div>
      </div>
    </div>

    <div class="w-full rounded-lg p-2 overflow-x-auto">
      <!-- Table -->
      <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
        <!-- Scrollable Table Body -->
        <tbody class="overflow-y-auto rounded-lg">
          <tr v-for="(item, index) in rows" :key="index" @click="selectRow(index)" :class="[
            'cursor-pointer flex-1 w-full',
            selectedRow === index ? 'bg-[#939BAD]' : '',
            'hover:bg-gray-300'
          ]" class="bg-[#FFFFFF] hover:bg-[#939BAD] text-center text-md text-gray-800">
            <td class="py-3 px-4 border-l border-t border-b border-[#939BAD] rounded-l-lg">
              <input type="checkbox" class="form-checkbox " :checked="selectedRow === index" />
            </td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ item.class }}</td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ item.price }}</td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ item.schedule }}</td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ item.time }}</td>
            <td class="py-2 px-4 border-r border-t border-b border-[#939BAD] rounded-r-lg">{{ item.instructor }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>

  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Links' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-2 gap-4">
      <!-- Row 1 -->
      <input id="Search" type="text"
        class="w-full py-1.5 px-3 border border-b-1 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Search" required />
      <select id="slecrelation"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
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

  <!-- Depts -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg overflow-x-auto">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Depts' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-6 gap-2">
      <!-- Row 1 -->
      <span class="text-[#22305C] text-md py-1.5 px-3">Due Amount</span>
      <input id="amount" type="text"
        class="w-full py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="500 dz" required />
      <input id="amount" type="text"
        class="w-full py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Amount DA" required />
      <div class="py-1.5 px-3">
        <input
          class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio" name="exempt" id="exempt" />
        <label class="mt-px inline-block text-[#22305C] pl-2 hover:cursor-pointer" for="exempt">
          Exempt
        </label>
      </div>
      <input id="average" type="text"
        class="w-full py-1.5 px-3 col-start-5 col-end-7 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Average" required />
    </div>
  </div>

  <!-- Discount -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Discount' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-5 pr-3 pl-3 pb-3 md:grid-cols-5 gap-4">
      <!-- Row 1 -->
      <input id="discountpercentage" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Enter Percentage" required />
      <select id="discountduration"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Duration</option>
        <option value="week">week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
      <input id="notetoconsider" type="text"
        class="w-full py-1.5 px-3 col-start-3 col-end-6 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Note to Consider" required />
    </div>
  </div>

  <!-- Class Fee -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Class Fee' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-2 pr-3 pl-3 pb-3 md:grid-cols-6 gap-4">
      <!-- Row 1 -->
      <div class="py-1.5 px-3">
        <input
          class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio" name="regular" id="regular" />
        <label class="mt-px inline-block text-[#22305C] pl-2 hover:cursor-pointer" for="regular">
          Regular
        </label>
      </div>
      <div class="py-1.5 px-3">
        <input
          class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio" name="charity" id="charity" />
        <label class="mt-px inline-block text-[#22305C] pl-2 hover:cursor-pointer" for="charity">
          Charity
        </label>
      </div>
      <div class="py-1.5 px-3">
        <input
          class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio" name="exempt2" id="exempt2" />
        <label class="mt-px inline-block text-[#22305C] pl-2 hover:cursor-pointer" for="exempt2">
          Exempt
        </label>
      </div>

      <span class="text-[#22305C] text-md py-1.5 px-2 col-start-1 col-end-2">Due Amount</span>

      <input id="amount2" type="text"
        class="w-full py-1.5 px-2  border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="4500 DZD"
        required />
      <input id="amount paid" type="text"
        class="w-full py-1.5 px-2 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Amount Paid" required />
    </div>
  </div>

  <!-- Important notes -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form2' ? 'Important Notes' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-1 gap-4">
      <!-- Row 1 -->
      <input id="Important Notes" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Important Notes" required />
    </div>
  </div>

  <div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-end">
    <button
      class="px-4 py-2 bg-[#C5CDDF]
           font-medium tracking-wide text-[#3D548D] transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
      @click="open = false">
      Back
    </button>
    <button
      class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
      Save and Print
    </button>

  </div>

</template>
<script>
export default {
  data() {
    return {
      preferences: [
        {
          time: '',
          days: '',
          language: '',
          level: '',
        },
      ],
      links: [
        { name: '', relation: '' }
      ],
      maxPreferences: 3,
    };
  },
  methods: {
    addPreference() {
      if (this.preferences.length < this.maxPreferences) {
        this.preferences.push({
          time: '',
          days: '',
          language: '',
          level: '',
        });
      }
    },
    addLink() {
      if (this.links.length < 3) {
        this.links.push({ name: '', relation: '' });
      }
    },
  }

};
</script>