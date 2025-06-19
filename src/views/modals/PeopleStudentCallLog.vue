<script setup>
import { ref } from 'vue';
const open = ref(false);
const rows1 = ref([
  {
    gid: "2350",
    class: "A1.1 | En | Adults",
    teacher: "Raouf Boukoucha",
    balance: -5000,
    classtype: "Regular",
    timing: "Sun, 18:00 | Tue, 18:00",
    status: "Active",
    note: "",
  },
  {
    gid: "2350",
    class: "A1.1 | En | Adults",
    teacher: "Raouf Boukoucha",
    balance: -5000,
    classtype: "Event",
    timing: "Sun, 18:00 | Tue, 18:00",
    status: "Freeze",
    note: "",
  },
  {
    gid: "2350",
    class: "A1.1 | En | Adults",
    teacher: "Raouf Boukoucha",
    balance: -5000,
    classtype: "VIP",
    timing: "Sun, 18:00 | Tue, 18:00",
    status: "Stopped",
    note: "",
  },

]);
const rows = ref([
  {
    id: "1",
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
          <div class="relative w-full h-4/5 max-w-6xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
          <h2 id="modal-title" class="text-xl font-bold text-black">
            Student Call Log
          </h2>
          <!-- Close Button -->
          <button
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
            @click="open = false"
          >
          <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z" fill="#22305C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z" fill="#22305C"/>
          </svg>
          </button>
        </div>

  <div class="max-w-6xl mx-auto bg-[#E8EBF2] border rounded-lg">
  <!-- Form -->
  <form class="space-y-4 ">
<div class="space-y-4  shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg overflow-x-auto whitespace-nowrap">
    <div class="max-w-6xl p-2 bg-[#D1D8E7] rounded-t-lg">
    <h2 class="text-lg font-semibold text-[#22305C] mb-1">
    Student Info
    </h2>
    </div>
    <div class="pr-3 pl-3 pb-3 overflow-x-auto bg-[#E8EBF2] rounded-md whitespace-nowrap">
      <!-- Row 1 -->
      <span class="text-[#22305C] text-md font-bold py-1.5 px-3">Student Name</span>
      <input
        id="amount"
        type="text"
        class="w-60 py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="مسعي أحمد محمد العروسي"
        disabled
        required
        
      />
      <span class="text-[#22305C] text-md font-bold py-1.5 px-3">Phone number</span>
      <input
        id="average"
        type="text"
        class="w-1/6 py-1.5 px-3 border text-center rounded-l-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="06 66 66 66 66"
        disabled
        required
      /><input
        id="average"
        type="text"
        class="w-1/6 py-1.5 px-3 border text-center rounded-r-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="06 66 66 66 66"
        disabled
        required
      />
      <span class="text-[#22305C] text-md font-bold py-1.5 px-3">Balance</span>
      <input
        id="amount"
        type="text"
        class="w-32 py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        :value="-4500" 
        disabled
        required
      />
      
    </div>
  </div>


  <div class="pb-2 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
  <div class="w-full rounded-lg">
  <!-- Scrollable Container -->
  <div class="overflow-y-auto h-72 rounded-lg">
    <!-- Table body for scrolling -->
    <table class="w-full">
      <thead class="bg-[#D1D8E7] rounded-lg">
      <tr class="text-left text-[#22305C] rounded-l-lg">
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">GID</th>
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Class</th>
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Teacher</th>
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Balance</th>
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Class Type</th>
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">timing</th>
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Statue</th>
        <th class="p-2 border-b border-[#D1D8E7] text-center sticky top-0 bg-[#D1D8E7]">Note</th>
      </tr>
    </thead>
      <tbody>
        <tr
          v-for="(item, index) in rows1"
          :key="index"
          @click="selectRow(index)"
          :class="[
            'cursor-pointer',
            selectedRow === index ? 'bg-[#939BAD] text-white' : '',
            'hover:bg-gray-300'
          ]"
          class="text-center text-[#22305C] font-semibold"
        >
          <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.gid }}</td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.class }}</td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.teacher }}</td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">
            <input 
            id="balance"
            type="text"
            class="py-1.5 px-3 w-32 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            :value=item.balance
            disabled
            />
          </td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">
            <input 
            id="classtype"
            type="text"
            class="py-1.5 px-3 w-32 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            :value=item.classtype
            :class="{
              'bg-[#E3F2FD] text-[#3279B2] border-[#E3F2FD]': item.classtype === 'Regular',
              'bg-[#FFF9E6] text-[#FC9B00] border-[#FFF9E6]': item.classtype === 'VIP',
              'bg-[#FFF8E1] text-[#9B3EAB] border-[#FFF8E1]': item.classtype === 'Online',
              'bg-[#F0FFF0] text-[#4FA407] border-[#F0FFF0]': item.classtype === 'Tutoring',
              'bg-[#FFF2E0] text-[#E66238] border-[#FFF2E0]': item.classtype === 'Event',
              }"
            disabled
            />
            </td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.timing }}</td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">
            <input 
            id="status"
            type="text"
            class="py-1.5 px-3 w-32 text-center font-bold border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            :value=item.status
            disabled
            :class="{
              'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': item.status === 'Active',
              'bg-[#E3F2FD] text-[#1565C0] border-[#E3F2FD]': item.status === 'Freeze',
              'bg-[#FFF8E1] text-[#FF6F00] border-[#FFF8E1]': item.status === 'Reactive',
              'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': item.status === 'Stopped',
              }"
            />
          </td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">
            <input 
            id="reason"
            type="text"
            class="py-1.5 px-3 w-32 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            placeholder="Enter Note"
            :value=item.note
            disabled
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>



</div>


  <div class="pb-2 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
  <div class="w-full rounded-lg">
  <!-- Scrollable Container -->
  <div class="overflow-y-auto h-36 rounded-lg">
    <!-- Table body for scrolling -->
    <table class="w-full ">
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
        <tr
          v-for="(item, index) in rows"
          :key="index"
          @click="selectRow(index)"
          :class="[
            'cursor-pointer',
            selectedRow === index ? 'bg-[#939BAD] text-white' : '',
            'hover:bg-gray-300'
          ]"
          class="text-center text-center text-[#22305C] font-semibold"
        >
        <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.id }}</td> 
          <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.admin }}</td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.date }}</td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">{{ item.time }}</td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">
            <input 
            id="reason"
            type="text"
            class="py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            placeholder="{{ item.reason }}"
            :value=item.reason
            disabled
            />
            </td>
          <td class="p-2 border-b border-[#D1D8E7] text-center">
            <input 
            id="reason"
            type="text"
            class="py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            :value=item.comment
            disabled
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
</div>
<div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-center">
            <select
              id="slecrelation"
              class="w-40 py-1.5 px-2 text-[#22305C] text-left border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
              required
            >
              <option value="" disabled selected>Select Reason</option>
              <option class="text-left" value="reason1">Reason 1</option>
              <option class="text-left" value="reason2">Reason 2</option>
              <option class="text-left" value="reason3">Reason 3</option>
              <option class="text-left" value="reason4">Reason 4</option>

            </select>
            <input 
            id="reason"
            type="text"
            class="w-40 y-1.5 px-2 text-left text-[#22305C] border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
            placeholder="Comment"
            />
          <button class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500">
            Save
          </button>

        </div>


  </form>

</div>

      </div>
</template>