<script setup>
import { ref } from 'vue';
import PeopleStaffCallLog from '../modals/PeopleStaffCallLog.vue';
// Modal and Form State
const open = ref(false);
const openstaff = ref(false);
const openstaffprofile = ref(false);

// Table State
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
  <div class="p-4 bg-gray-100 rounded-lg">

    <div class="relative flex justify-between py-2 overflow-x-auto rounded whitespace-nowrap">
      <div class="inline-flex max-w-md overflow-hidden rounded min-w-max">
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
            class="py-2 block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-60 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]"
            placeholder="Search">
        </div>
      </div>



      <div class="inline-flex ml-3 overflow-hidden rounded-lg min-w-max">
        <button @click="openstaff = true"
          class="bg-[#3D548D] text-white text-sm ml-4 px-4 py-2 rounded-lg hover:bg-blue-800  ">New Staff</button>


      </div>


    </div>

    <!-- Table -->
    <div class="pt-4 ">
      <div class="overflow-x-auto rounded-lg shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
        <table class="min-w-full table-auto bg-[#F0F2F7]">
          <thead>
            <tr class="bg-[#F0F2F7] text-center">
              <th class="px-2 py-2 text-[#22305C] font-medium">AID</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Staff Name</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Parten Name 1</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Phone Number 2</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Birth Date</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Address</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Action</th>
            </tr>
          </thead>
          <tbody class="text-[#22305C]">
            <tr v-for="(row, index) in paginatedData" :key="index" class="relative odd:bg-[#F7F8FA]">
              <!-- Table Data -->
              <td class="px-4 py-2 text-center text-md">{{ row.aid }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.staff_name }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.parten_name }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.phone_number }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.dateofbirth }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.address }}</td>
              <td class="px-4 py-2 text-center text-md">
                <button class="p-1" @click="open = true">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M22 6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6ZM7.20522 6.79234C8.35737 5.64019 10.3016 5.72778 11.1039 7.16524L11.549 7.96275C12.0335 8.83097 11.8789 9.90936 11.2462 10.6806C11.143 10.8064 11.0195 10.9302 11.0116 11.0926C11.003 11.2684 11.0654 11.6749 11.6952 12.3048C12.3248 12.9344 12.7313 12.997 12.9072 12.9885C13.0698 12.9805 13.1937 12.857 13.3195 12.7537C14.0908 12.1211 15.1691 11.9666 16.0373 12.4511L16.8348 12.8961C18.2722 13.6984 18.3598 15.6427 17.2077 16.7948C16.5914 17.4111 15.772 17.9587 14.809 17.9952C13.382 18.0493 11.0124 17.6807 8.66585 15.3341C6.31927 12.9876 5.95075 10.6181 6.00484 9.19103C6.04135 8.22806 6.58894 7.40862 7.20522 6.79234ZM10.2056 7.66655C9.79483 6.93047 8.69094 6.76136 7.93259 7.51971C7.40088 8.05143 7.0552 8.63832 7.03277 9.22999C6.98766 10.42 7.28147 12.495 9.39322 14.6068C11.505 16.7185 13.5799 17.0124 14.77 16.9672C15.3617 16.9448 15.9486 16.5991 16.4803 16.0674C17.2386 15.309 17.0695 14.2052 16.3335 13.7944L15.536 13.3493C15.0399 13.0725 14.3429 13.167 13.8537 13.6562C13.8056 13.7042 13.4999 13.9895 12.9572 14.0159C12.4015 14.0429 11.729 13.7933 10.9679 13.0321C10.2065 12.2708 9.95694 11.598 9.98415 11.0424C10.0107 10.4995 10.2962 10.1939 10.3439 10.1462C10.8331 9.65699 10.9276 8.96015 10.6507 8.46405L10.2056 7.66655Z"
                      fill="#22305C" />
                  </svg>
                </button>
                <button class="p-1" @click="openstaffprofile = true">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M22 6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6ZM7.20522 6.79234C8.35737 5.64019 10.3016 5.72778 11.1039 7.16524L11.549 7.96275C12.0335 8.83097 11.8789 9.90936 11.2462 10.6806C11.143 10.8064 11.0195 10.9302 11.0116 11.0926C11.003 11.2684 11.0654 11.6749 11.6952 12.3048C12.3248 12.9344 12.7313 12.997 12.9072 12.9885C13.0698 12.9805 13.1937 12.857 13.3195 12.7537C14.0908 12.1211 15.1691 11.9666 16.0373 12.4511L16.8348 12.8961C18.2722 13.6984 18.3598 15.6427 17.2077 16.7948C16.5914 17.4111 15.772 17.9587 14.809 17.9952C13.382 18.0493 11.0124 17.6807 8.66585 15.3341C6.31927 12.9876 5.95075 10.6181 6.00484 9.19103C6.04135 8.22806 6.58894 7.40862 7.20522 6.79234ZM10.2056 7.66655C9.79483 6.93047 8.69094 6.76136 7.93259 7.51971C7.40088 8.05143 7.0552 8.63832 7.03277 9.22999C6.98766 10.42 7.28147 12.495 9.39322 14.6068C11.505 16.7185 13.5799 17.0124 14.77 16.9672C15.3617 16.9448 15.9486 16.5991 16.4803 16.0674C17.2386 15.309 17.0695 14.2052 16.3335 13.7944L15.536 13.3493C15.0399 13.0725 14.3429 13.167 13.8537 13.6562C13.8056 13.7042 13.4999 13.9895 12.9572 14.0159C12.4015 14.0429 11.729 13.7933 10.9679 13.0321C10.2065 12.2708 9.95694 11.598 9.98415 11.0424C10.0107 10.4995 10.2962 10.1939 10.3439 10.1462C10.8331 9.65699 10.9276 8.96015 10.6507 8.46405L10.2056 7.66655Z"
                      fill="#22305C" />
                  </svg>
                </button>
                <button class="p-1">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M10.3094 2.25002H13.6908C13.9072 2.24988 14.0957 2.24976 14.2737 2.27819C14.977 2.39049 15.5856 2.82915 15.9146 3.46084C15.9978 3.62073 16.0573 3.79961 16.1256 4.00494L16.2373 4.33984C16.2562 4.39653 16.2616 4.41258 16.2661 4.42522C16.4413 4.90933 16.8953 5.23659 17.4099 5.24964C17.4235 5.24998 17.44 5.25004 17.5001 5.25004H20.5001C20.9143 5.25004 21.2501 5.58582 21.2501 6.00004C21.2501 6.41425 20.9143 6.75004 20.5001 6.75004H3.5C3.08579 6.75004 2.75 6.41425 2.75 6.00004C2.75 5.58582 3.08579 5.25004 3.5 5.25004H6.50008C6.56013 5.25004 6.5767 5.24998 6.59023 5.24964C7.10488 5.23659 7.55891 4.90936 7.73402 4.42524C7.73863 4.41251 7.74392 4.39681 7.76291 4.33984L7.87452 4.00496C7.94281 3.79964 8.00233 3.62073 8.08559 3.46084C8.41453 2.82915 9.02313 2.39049 9.72643 2.27819C9.90445 2.24976 10.093 2.24988 10.3094 2.25002ZM9.00815 5.25004C9.05966 5.14902 9.10531 5.04404 9.14458 4.93548C9.1565 4.90251 9.1682 4.86742 9.18322 4.82234L9.28302 4.52292C9.37419 4.24941 9.39519 4.19363 9.41601 4.15364C9.52566 3.94307 9.72853 3.79686 9.96296 3.75942C10.0075 3.75231 10.067 3.75004 10.3553 3.75004H13.6448C13.9331 3.75004 13.9927 3.75231 14.0372 3.75942C14.2716 3.79686 14.4745 3.94307 14.5842 4.15364C14.605 4.19363 14.626 4.2494 14.7171 4.52292L14.8169 4.82216L14.8556 4.9355C14.8949 5.04405 14.9405 5.14902 14.992 5.25004H9.00815Z"
                      fill="#F98182" />
                    <path
                      d="M5.91512 8.45014C5.88757 8.03684 5.53019 7.72414 5.11689 7.75169C4.7036 7.77924 4.39089 8.13662 4.41844 8.54992L4.88189 15.5017C4.96739 16.7844 5.03645 17.8205 5.19842 18.6336C5.36682 19.4789 5.65324 20.185 6.24483 20.7385C6.83643 21.2919 7.55998 21.5308 8.41463 21.6425C9.23665 21.7501 10.275 21.7501 11.5606 21.75H12.4395C13.7251 21.7501 14.7635 21.7501 15.5856 21.6425C16.4402 21.5308 17.1638 21.2919 17.7554 20.7385C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9638 17.8206 19.0328 16.7844 19.1183 15.5017L19.5818 8.54992C19.6093 8.13662 19.2966 7.77924 18.8833 7.75169C18.47 7.72414 18.1126 8.03684 18.0851 8.45014L17.6251 15.3493C17.5353 16.6971 17.4713 17.6349 17.3307 18.3406C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8989 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32258 20.2485 8.60918 20.1552C7.91718 20.0647 7.54302 19.8989 7.26961 19.6431C6.9962 19.3873 6.80586 19.025 6.66951 18.3406C6.52895 17.6349 6.46492 16.6971 6.37506 15.3493L5.91512 8.45014Z"
                      fill="#F98182" />
                    <path
                      d="M9.42543 10.2538C9.83759 10.2125 10.2052 10.5133 10.2464 10.9254L10.7464 15.9254C10.7876 16.3376 10.4869 16.7051 10.0747 16.7463C9.66253 16.7875 9.295 16.4868 9.25378 16.0747L8.75378 11.0747C8.71257 10.6625 9.01328 10.295 9.42543 10.2538Z"
                      fill="#F98182" />
                    <path
                      d="M14.5747 10.2538C14.9869 10.295 15.2876 10.6625 15.2464 11.0747L14.7464 16.0747C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3376 13.2538 15.9254L13.7538 10.9254C13.795 10.5133 14.1626 10.2125 14.5747 10.2538Z"
                      fill="#F98182" />
                  </svg>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- Pagination Component -->
      <div class="flex items-center justify-between mt-4 bg-[#F0F2F7] px-4 py-2 rounded-lg">
        <!-- Rows per page -->
        <div class="flex items-center gap-2">
          <span class="text-[#22305C] text-sm">Rows per page</span>
          <select v-model="rowsPerPage" @change="updatePagination()"
            class="text-black text-sm text-left border rounded px-4 py-1">
            <option v-for="option in [5, 10, 20]" :key="option" :value="option">{{ option }}</option>
          </select>
        </div>

        <!-- Pagination navigation -->
        <div class="flex items-center gap-2">
          <span class="text-[#22305C] text-sm">Go to:</span>
          <input v-model="currentPage" @keyup.enter="goToPage()" type="number" min="1" max="totalPages"
            class="w-12 text-center text-sm text-black border rounded px-1 py-1" />
          <button @click="prevPage()" :disabled="currentPage === 1"
            class="px-2 py-2 border-b bg-[#FFFFFF] rounded-lg text-[#22305C] text-sm">
            <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.6667 14.6666L4 7.99998L10.6667 1.33331L11.85 2.51665L6.36667 7.99998L11.85 13.4833L10.6667 14.6666Z"
                fill="#22305C" />
            </svg>

          </button>
          <span class="text-[#22305C] text-sm">{{ currentPage }} of {{ totalPages }}</span>
          <button @click="nextPage()" :disabled="currentPage === totalPages"
            class="px-2 py-2 border-b bg-[#FFFFFF] rounded-lg text-[#22305C] text-sm">
            <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M5.33333 1.33335L12 8.00002L5.33333 14.6667L4.15 13.4834L9.63333 8.00002L4.15 2.51669L5.33333 1.33335Z"
                fill="#22305C" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Staff Call Log Modal -->
  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !open }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl " @click="open = false" aria-hidden="true"></div>
    <PeopleStaffCallLog />
  </div>
  <!-- New staff Modal -->
  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !openstaff }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl" @click="openstaff = false" aria-hidden="true"></div>

    <NewStaffModal/>
  </div>

  <div>
    <div
      :class="['modal', { 'opacity-0 pointer-events-none': !openstaffprofile }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
      role="dialog" aria-labelledby="modal-title">
      <!-- Overlay -->
      <div class="absolute w-full h-full filter backdrop-blur-xl " @click="openstaffprofile = false" aria-hidden="true">
      </div>

      <!-- Modal Content -->
      <div
        class="relative w-11/12 h-screen max-w-8xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
          <h2 id="modal-title" class="text-xl font-bold text-black">
            Teacher Profile
          </h2>
          <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 ">Teacher
            Availability</button>
          <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 ">Print payment
            details</button>


          <!-- Close Button -->
          <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="openstaffprofile = false">
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

        <!-- Modal -->
        <div class="max-w-8xl mx-auto bg-[#E8EBF2] rounded-lg">
          <StaffProfile />
        </div>

      </div>
    </div>
  </div>

</template>

<script>
import PeopleStaffCallLog from "../modals/PeopleStaffCallLog.vue";
import NewStaffModal from '../modals/NewStaffModal.vue';
import StaffProfile from '../modals/StaffProfile.vue';
export default {
  components: {
    PeopleStaffCallLog,
    NewStaffModal,
  },
  data() {
    return {
      activeTab: "regular",
      tableData: [
        { aid: "AID", staff_name: "مسعي أحمد محمد لعروسي", parten_name: "0666666666", phone_number: "0666666666", dateofbirth: "26/12/2024", address: "حي 19 مارس 1962 الوادي" },
        { aid: "AID", staff_name: "مسعي أحمد محمد لعروسي", parten_name: "0666666666", phone_number: "0666666666", dateofbirth: "26/12/2024", address: "حي 19 مارس 1962 الوادي" },
        { aid: "AID", staff_name: "مسعي أحمد محمد لعروسي", parten_name: "0666666666", phone_number: "0666666666", dateofbirth: "26/12/2024", address: "حي 19 مارس 1962 الوادي" },
        { aid: "AID", staff_name: "مسعي أحمد محمد لعروسي", parten_name: "0666666666", phone_number: "0666666666", dateofbirth: "26/12/2024", address: "حي 19 مارس 1962 الوادي" },
        { aid: "AID", staff_name: "مسعي أحمد محمد لعروسي", parten_name: "0666666666", phone_number: "0666666666", dateofbirth: "26/12/2024", address: "حي 19 مارس 1962 الوادي" },
        { aid: "AID", staff_name: "مسعي أحمد محمد لعروسي", parten_name: "0666666666", phone_number: "0666666666", dateofbirth: "26/12/2024", address: "حي 19 مارس 1962 الوادي" },
      ],
      rowsPerPage: 10,
      currentPage: 1,
      paginatedData: [],
    };
  },
  computed: {
    totalPages() {
      return Math.ceil(this.tableData.length / this.rowsPerPage);
    },
  },
  methods: {
    updatePagination() {
      this.currentPage = 1; // Reset to the first page
      this.paginateData();
    },
    paginateData() {
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      this.paginatedData = this.tableData.slice(start, end);
    },
    goToPage() {
      if (this.currentPage < 1) this.currentPage = 1;
      if (this.currentPage > this.totalPages) this.currentPage = this.totalPages;
      this.paginateData();
    },
    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
        this.paginateData();
      }
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
        this.paginateData();
      }
    },
  },
  watch: {
    tableData: {
      handler() {
        this.paginateData();
      },
      immediate: true,
    },
  },
  mounted() {
    this.paginateData();
  },
};
</script>

<style>
.text-blue-500 {
  color: #3b82f6;
}

.border-blue-500 {
  border-color: #3b82f6;
}
</style>