<script setup>
import { ref } from 'vue';
import PeopleStudentCallLog from './PeopleStudentCallLog.vue';

// Modal and Form State
const opencalllog = ref(false);

// Modal and Form State
const activeForm = ref('form1');

// Set Active Form Function
const setActiveForm = (form) => {
  activeForm.value = form;
};

// Dropdown State
const dropdownOpen = ref(false);


// Sample Data for Suggested Groups
const rows = ref([
  { id: 1, number: "01", name: "مسمي أحمد محمد العروسي", status: "Coming", discount: "10%", duration: "00 class", balance: "- 4500", notes: "Good student" },
  { id: 2, number: "02", name: "محمد العروسي", status: "Not Coming", discount: "15%", duration: "00 class", balance: "0", notes: "Pending fees" },
  { id: 3, number: "03", name: "مسمي أحمد", status: "Pending", discount: "5%", duration: "00 class", balance: "- 5000", notes: "Late registration" },
  { id: 4, number: "04", name: "مسمي محمد", status: "Not Coming", discount: "50%", duration: "00 class", balance: "- 4500", notes: "Late registration" },
  { id: 5, number: "05", name: "مراد مصطفى", status: "Not Coming", discount: "78%", duration: "00 class", balance: "+ 500", notes: "Late registration" },
  { id: 6, number: "06", name: "محمود مارديني", status: "Coming", discount: "19%", duration: "00 class", balance: "+ 4500", notes: "Late registration" },
  { id: 7, number: "07", name: "معين معلوف", status: "Coming", discount: "46%", duration: "00 class", balance: "0", notes: "Late registration" },
  { id: 8, number: "08", name: "Alice Johnson", status: "Coming", discount: "46%", duration: "00 class", balance: "0", notes: "Late registration" }
]);


const isRed = ref(true); // reactive property for conditional class


// Edit Row Action
const editRow = (row) => {
  alert(`Edit student: ${row.name}`);
};
</script>


<template>
  <!-- Modal Content -->
  <div class="relative w-11/12 h-full max-w-4xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
    <!-- Modal Header -->
    <div class="flex justify-between items-center mb-2 border-b pb-2">
      <h2 id="modal-title" class="text-xl font-bold text-[#22305C]">Start Group</h2>
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

    <div class="max-w-4xl mx-auto bg-gray-100 border rounded-lg">
      <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] rounded-lg ">
        <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
          <div class="text-lg font-semibold text-gray-800 mb-1 flex items-center">
            <h3 class="flex-1">Group Info</h3>
            <div class="w-[62px]"></div>
            <span class="group-detail text-center flex-1">A1.1 | Fr | Teens</span>
            <div class="flex-1"></div>
            <button>
              <svg class="ml-auto" width="32" height="33" viewBox="0 0 32 33" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd"
                  d="M15.9234 2.16667H18C18.5522 2.16667 19 2.61439 19 3.16667C19 3.71895 18.5522 4.16667 18 4.16667H16C12.829 4.16667 10.5514 4.16879 8.81807 4.40183C7.11352 4.63101 6.08589 5.06686 5.32636 5.82641C4.56681 6.58594 4.13096 7.61356 3.90179 9.31811C3.66875 11.0514 3.66663 13.329 3.66663 16.5C3.66663 19.6709 3.66875 21.9485 3.90179 23.6819C4.13096 25.3864 4.56681 26.414 5.32636 27.1736C6.08589 27.9332 7.11352 28.3691 8.81807 28.5981C10.5514 28.8312 12.829 28.8333 16 28.8333C19.1709 28.8333 21.4485 28.8312 23.1818 28.5981C24.8864 28.3691 25.914 27.9332 26.6736 27.1736C27.4332 26.414 27.869 25.3864 28.0981 23.6819C28.3312 21.9485 28.3333 19.6709 28.3333 16.5V14.5C28.3333 13.9477 28.781 13.5 29.3333 13.5C29.8856 13.5 30.3333 13.9477 30.3333 14.5V16.5765C30.3333 19.6544 30.3333 22.0664 30.0804 23.9484C29.8213 25.8747 29.2809 27.3948 28.0878 28.5879C26.8948 29.7809 25.3746 30.3213 23.4484 30.5804C21.5664 30.8333 19.1544 30.8333 16.0765 30.8333H15.9234C12.8456 30.8333 10.4335 30.8333 8.55157 30.5804C6.62525 30.3213 5.10523 29.7809 3.91215 28.5879C2.71907 27.3948 2.17861 25.8747 1.91963 23.9484C1.6666 22.0664 1.66661 19.6544 1.66663 16.5765V16.4235C1.66661 13.3456 1.6666 10.9336 1.91963 9.05162C2.17861 7.1253 2.71907 5.60527 3.91215 4.41219C5.10523 3.21911 6.62525 2.67866 8.55157 2.41967C10.4335 2.16665 12.8456 2.16666 15.9234 2.16667ZM22.3606 3.53457C24.1845 1.71071 27.1416 1.71071 28.9654 3.53457C30.7893 5.3584 30.7893 8.31544 28.9654 10.1393L20.1013 19.0035C19.6062 19.4985 19.2961 19.8087 18.9501 20.0787C18.5425 20.3965 18.1014 20.6691 17.6348 20.8915C17.2386 21.0803 16.8225 21.2189 16.1584 21.4403L12.2856 22.7312C11.5706 22.9695 10.7824 22.7835 10.2494 22.2505C9.71652 21.7176 9.53043 20.9293 9.76876 20.2143L11.0597 16.3416C11.281 15.6775 11.4197 15.2613 11.6085 14.8652C11.8309 14.3985 12.1034 13.9575 12.4214 13.5499C12.6913 13.2038 13.0014 12.8937 13.4965 12.3987L22.3606 3.53457ZM27.5512 4.94878C26.5084 3.90598 24.8177 3.90598 23.7749 4.94878L23.2728 5.45094C23.303 5.57875 23.3453 5.73103 23.4042 5.90089C23.5953 6.45163 23.9569 7.17695 24.64 7.85999C25.323 8.54303 26.0484 8.90462 26.599 9.0957C26.7689 9.15463 26.9212 9.19698 27.049 9.22724L27.5512 8.72508C28.594 7.68228 28.594 5.99157 27.5512 4.94878ZM25.4734 10.8028C24.7856 10.5069 23.9842 10.0326 23.2257 9.2742C22.4673 8.5158 21.993 7.71443 21.6972 7.02648L14.9566 13.767C14.4013 14.3224 14.1834 14.5427 13.9984 14.7799C13.7698 15.0729 13.5738 15.3901 13.414 15.7256C13.2845 15.9973 13.1849 16.2905 12.9365 17.0356L12.3606 18.7632L13.7368 20.1393L15.4644 19.5635C16.2094 19.3151 16.5026 19.2155 16.7744 19.086C17.1098 18.9261 17.427 18.7301 17.7201 18.5016C17.9573 18.3165 18.1776 18.0987 18.7329 17.5433L25.4734 10.8028Z"
                  fill="#1C274C" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="overflow-x-auto px-4 mt-[16px] ml-[16px]">
        <!-- Parent scrollable container -->
        <div class="flex flex-col space-y-4">
          <!-- Row 1: Study Time and Sessions Number -->
          <div class="flex items-center gap-[16px] mt-1"> <!-- Restored gap of 16px -->
            <!-- Study Time -->
            <div class="flex items-center">
              <label for="study-time" class="text-sm font-medium" style="color: #22305C;">Study Time</label>

              <input id="study-time" type="text"
                placeholder="Sun, 18:00 | Mon, 18:00 | Tue, 18:00 | Wed, 18:00 | Thu, 18:00"
                class="ml-[8px] px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-[400px]" />
            </div>
            <div class="w-[62px]"></div>
            <!-- Sessions Number -->
            <div class="flex items-center">
              <label for="session-number" class="text-sm font-medium" style="color: #22305C;">Sessions Number</label>
              <input id="session-number" type="text" placeholder="16"
                class="ml-[8px] px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-11" />
            </div>
          </div>

          <!-- Row 2: Teacher and Room Number -->
          <div class="flex items-center gap-[16px]">
            <!-- Teacher -->
            <div class="flex items-center">
              <label for="teacher" class="text-sm font-medium w-[70px]" style="color: #22305C;">Teacher</label>
              <input id="teacher" type="text" placeholder="Raouf Boukoucha"
                class="ml-[8px] px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-[400px]" />
            </div>
            <div class="w-[62px]"></div>
            <!-- Room Number -->
            <div class="flex items-center">
              <label for="room-number" class="text-sm font-medium  w-[110px]" style="color: #22305C;">Room
                Number</label>
              <input id="room-number" type="text" placeholder="08"
                class="ml-[8px] px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-11" />
            </div>
          </div>

          <!-- Row 3: Start Date -->
          <div class="flex items-center gap-[16px]">
            <div class="flex items-center mb-[8px]">
              <label for="teacher" class="text-sm font-medium  w-[70px]" style="color: #22305C;">Start Date</label>
              <input id="Sday" type="text" placeholder="DD / MM / YYYY"
                class="ml-[8px] px-3 py-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-sm w-[130px]" />
            </div>
          </div>
        </div>
      </div>
    </div>


    <!-- Search -->

    <div class="relative p-4 m-2">
      <!-- Search and Button Container -->
      <div class="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4 w-full">

        <!-- Search Input with Icon -->
        <div class="relative w-full sm:w-[300px]">
          <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
              viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input type="search" id="search"
            class="pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm w-full"
            placeholder="Search" />
        </div>

        <!-- Start Group Button -->
        <button
          class="font-bold px-4 py-2 rounded-lg text-white bg-[#3D548D] hover:bg-[#2A4A6A] focus:outline-none focus:ring-2 focus:ring-blue-400">
          Start Group
        </button>
      </div>
    </div>

    <div>
      <div class="overflow-x-auto overflow-y-auto text-md pl-2 pr-2">
        <div class="max-h-[480px]">
          <table class="min-w-full border-separate p-2 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] rounded-lg"
            style="border-spacing: 0 10px;">
            <thead>
              <tr class="text-black">
                <th></th>
                <th></th>
                <th></th>
                <th>Student Name</th>
                <th>Status</th>
                <th>Discount</th>
                <th>Duration</th>
                <th>Balance</th>
                <th>Notes</th>
              </tr>
            </thead>
            <tbody class="overflow-y-auto rounded-lg text-md font-semibold">
              <tr v-for="row in rows" :key="row.id" class="hover:bg-[#939BAD] text-center text-[#22305C]" :class="{
                notcoming: row.status === 'Not Coming',
                coming: row.status === 'Coming',
                pending: row.status === 'Pending'
              }">
                <td class="py-1 px-1 rounded-l-lg border-l border-t border-b border-[#939BAD]">
                  <input id="link-checkbox" type="checkbox" value=""
                    class="w-4 h-4 text-blue-600 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                </td>
                <td class="py-1 px-1 border-t border-b border-[#939BAD]">
                  <span class="text-center">{{ row.number }}</span>
                </td>
                <td class="py-1 px-1 border-t border-b border-[#939BAD]">
                  <button @click="opencalllog = true">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect x="0.370361" width="24" height="24" rx="4" fill="#22305C" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M11.0325 5.55366C9.96281 3.63704 7.37045 3.52025 5.83425 5.05645C5.01255 5.87816 4.28243 6.97075 4.23375 8.25471C4.16163 10.1574 4.65299 13.3167 7.78176 16.4455C10.9105 19.5743 14.0699 20.0657 15.9726 19.9935C17.2566 19.9449 18.3491 19.2148 19.1709 18.393C20.707 16.8569 20.5902 14.2645 18.6736 13.1949L17.6103 12.6014C16.3587 11.903 14.7795 12.2006 13.7445 13.2231C13.7258 13.2367 13.6207 13.309 13.4369 13.3179C13.2023 13.3293 12.6604 13.2459 11.8209 12.4064C10.9812 11.5666 10.898 11.0245 10.9094 10.7902C10.9184 10.6066 10.9906 10.5015 11.0042 10.4829C12.0267 9.44779 12.3244 7.8686 11.6259 6.617L11.0325 5.55366ZM6.80408 6.02629C7.81522 5.01515 9.28706 5.24063 9.83478 6.22206L10.4283 7.2854C10.7974 7.94687 10.6715 8.87599 10.0192 9.52823C9.95554 9.59191 9.57493 9.99939 9.53949 10.7231C9.50322 11.4641 9.83597 12.3611 10.8511 13.3762C11.8659 14.391 12.7626 14.7239 13.5035 14.6878C14.2272 14.6526 14.6348 14.2723 14.6989 14.2083C15.3511 13.556 16.2805 13.4299 16.9419 13.7991L18.0052 14.3925C18.9866 14.9402 19.2121 16.4121 18.201 17.4233C17.4921 18.1322 16.7096 18.5931 15.9207 18.623C14.3339 18.6832 11.5673 18.2914 8.75159 15.4757C5.93592 12.66 5.54417 9.8934 5.60432 8.30666C5.63423 7.51776 6.09513 6.73524 6.80408 6.02629Z"
                        fill="white" />
                    </svg>
                  </button>
                </td>
                <td class="py-1 px-1 border-t border-b border-[#939BAD]">
                  <span>{{ row.name }}</span>
                </td>
                <td class="py-1 px-1 border-t border-b border-[#939BAD]">
                  <select class="rounded-lg" v-model="row.status">
                    <option value="Pending">Pending</option>
                    <option value="Coming">Coming</option>
                    <option value="Not Coming">Not Coming</option>
                  </select>
                </td>
                <td class="py-1 px-1 border-t border-b border-[#939BAD]">{{ row.discount }}</td>
                <td class="py-1 px-1 border-t border-b border-[#939BAD]">{{ row.duration }}</td>
                <td class="py-1 px-1 border-t border-b border-[#939BAD]">{{ row.balance }}</td>
                <td class="py-1 px-1 rounded-r-lg border-r border-t border-b border-[#939BAD]">
                  <button>
                    <svg class="w-12 h-12" viewBox="0 0 71 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M35.5555 5.58139C36.0178 5.58139 36.3927 5.95623 36.3927 6.4186V13.1163C36.3927 13.5786 36.0178 13.9535 35.5555 13.9535C35.0931 13.9535 34.7183 13.5786 34.7183 13.1163V6.4186C34.7183 5.95623 35.0931 5.58139 35.5555 5.58139Z"
                        fill="#22305C" />
                      <path
                        d="M35.5557 17.5814C36.1723 17.5814 36.672 17.0816 36.672 16.4651C36.672 15.8486 36.1723 15.3488 35.5557 15.3488C34.9392 15.3488 34.4395 15.8486 34.4395 16.4651C34.4395 17.0816 34.9392 17.5814 35.5557 17.5814Z"
                        fill="#22305C" />
                      <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M23.5557 12C23.5557 5.37258 28.9282 0 35.5557 0C42.1831 0 47.5557 5.37258 47.5557 12C47.5557 18.6275 42.1831 24 35.5557 24C28.9282 24 23.5557 18.6275 23.5557 12ZM35.5557 1.67442C29.853 1.67442 25.2301 6.29734 25.2301 12C25.2301 17.7026 29.853 22.3256 35.5557 22.3256C41.2583 22.3256 45.8812 17.7026 45.8812 12C45.8812 6.29734 41.2583 1.67442 35.5557 1.67442Z"
                        fill="#22305C" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>


      </div>


    </div>
    <div
      :class="['modal', { 'opacity-0 pointer-events-none': !opencalllog }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
      role="dialog" aria-labelledby="modal-title">
      <!-- Overlay -->
      <div class="absolute w-full h-full backdrop-blur-md" @click="opencalllog = false" aria-hidden="true"></div>
      <PeopleStudentCallLog />
    </div>
  </div>


</template>
<script>
import PeopleStudentCallLog from './PeopleStudentCallLog.vue';
export default {
  components: {
    PeopleStudentCallLog
  },
};
</script>

<style>
.modal {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal.opacity-0 {
  opacity: 0;
  pointer-events: none;
}

.waiting-list-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  border-radius: 10px;
  overflow: hidden
}

.waiting-list-table th,
.waiting-list-table td {
  padding: 15px 10px;
  text-align: center;
  font-size: 14px;
  border: none
}

.waiting-list-table th {
  background-color: #D1D8E7;
  color: #22305C;
  font-weight: 600
}

.waiting-list-table td {
  color: #22305C
}

.waiting-list-table tr:nth-child(even) {
  background-color: #F8FAFD
}

.waiting-list-table tr:nth-child(odd) {
  background-color: #E8EDF7
}

.waiting-list-table tr:hover {
  background-color: #D1D8E7
}

.waiting-list-table td.status.balanced {
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.2);
  padding: 10px 20px;
  display: inline-block;
  margin-top: 5.5px;
  position: relative;
  top: 0;
  left: 13px;
  width: 115px;
  height: 40px
}

.notcoming {
  background-color: #FFEDEC !important;
}

.coming {
  background-color: #E4FCFF !important;
}

input {
  color: #22305C !important;
}
</style>