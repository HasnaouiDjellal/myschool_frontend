<script setup>
import { ref } from 'vue';
// Modal and Form State
const openteachercalllog = ref(false);
const openrequesetedprinting = ref(false);

</script>
<template>
  <div class="p-4 bg-gray-100 rounded-lg">
    <!-- Table -->
    <div>
      <div class="overflow-x-auto rounded-lg shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
        <table class="min-w-full table-auto bg-[#F0F2F7]">
          <thead>
            <tr class="bg-[#F0F2F7] text-center">
              <th class="px-2 py-2 text-[#22305C] font-medium"></th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Teacher</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Request</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Groupe Number</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Due Date</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Priority</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Status</th>
            </tr>
          </thead>
          <tbody class="text-[#22305C]">
            <tr v-for="(row, index) in students" :key="row.id" class="relative odd:bg-[#F7F8FA]">
              <!-- Table Data -->
              <td class="px-4 py-2 text-center text-md ">
                <button class="p-1" @click="openteachercalllog = true">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M22 6C22 3.79086 20.2091 2 18 2H6C3.79086 2 2 3.79086 2 6V18C2 20.2091 3.79086 22 6 22H18C20.2091 22 22 20.2091 22 18V6ZM7.20522 6.79234C8.35737 5.64019 10.3016 5.72778 11.1039 7.16524L11.549 7.96275C12.0335 8.83097 11.8789 9.90936 11.2462 10.6806C11.143 10.8064 11.0195 10.9302 11.0116 11.0926C11.003 11.2684 11.0654 11.6749 11.6952 12.3048C12.3248 12.9344 12.7313 12.997 12.9072 12.9885C13.0698 12.9805 13.1937 12.857 13.3195 12.7537C14.0908 12.1211 15.1691 11.9666 16.0373 12.4511L16.8348 12.8961C18.2722 13.6984 18.3598 15.6427 17.2077 16.7948C16.5914 17.4111 15.772 17.9587 14.809 17.9952C13.382 18.0493 11.0124 17.6807 8.66585 15.3341C6.31927 12.9876 5.95075 10.6181 6.00484 9.19103C6.04135 8.22806 6.58894 7.40862 7.20522 6.79234ZM10.2056 7.66655C9.79483 6.93047 8.69094 6.76136 7.93259 7.51971C7.40088 8.05143 7.0552 8.63832 7.03277 9.22999C6.98766 10.42 7.28147 12.495 9.39322 14.6068C11.505 16.7185 13.5799 17.0124 14.77 16.9672C15.3617 16.9448 15.9486 16.5991 16.4803 16.0674C17.2386 15.309 17.0695 14.2052 16.3335 13.7944L15.536 13.3493C15.0399 13.0725 14.3429 13.167 13.8537 13.6562C13.8056 13.7042 13.4999 13.9895 12.9572 14.0159C12.4015 14.0429 11.729 13.7933 10.9679 13.0321C10.2065 12.2708 9.95694 11.598 9.98415 11.0424C10.0107 10.4995 10.2962 10.1939 10.3439 10.1462C10.8331 9.65699 10.9276 8.96015 10.6507 8.46405L10.2056 7.66655Z"
                      fill="#22305C" />
                  </svg>
                </button>

                <button class="p-1" @click="openrequesetedprinting = true">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M12 6.25C12.4142 6.25 12.75 6.58579 12.75 7V13C12.75 13.4142 12.4142 13.75 12 13.75C11.5858 13.75 11.25 13.4142 11.25 13V7C11.25 6.58579 11.5858 6.25 12 6.25Z"
                      fill="#1C274C" />
                    <path
                      d="M12 17C12.5523 17 13 16.5523 13 16C13 15.4477 12.5523 15 12 15C11.4477 15 11 15.4477 11 16C11 16.5523 11.4477 17 12 17Z"
                      fill="#1C274C" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                      d="M1.25 12C1.25 6.06294 6.06294 1.25 12 1.25C17.9371 1.25 22.75 6.06294 22.75 12C22.75 17.9371 17.9371 22.75 12 22.75C6.06294 22.75 1.25 17.9371 1.25 12ZM12 2.75C6.89137 2.75 2.75 6.89137 2.75 12C2.75 17.1086 6.89137 21.25 12 21.25C17.1086 21.25 21.25 17.1086 21.25 12C21.25 6.89137 17.1086 2.75 12 2.75Z"
                      fill="#1C274C" />
                  </svg>

                </button>
              </td>
              <td class="px-4 py-2 text-center text-md">{{ row.teacher }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.request }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.groupNumber }}</td>
              <td class="px-4 py-2 text-center text-md">{{ row.dueDate }}</td>
              <td class="px-4 py-2 text-center text-md">
                <input id="priority" type="text" class="py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D] "
                  :value=row.priority :class="{
                    'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': row.priority === 'Emergency',
                    'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]': row.priority === 'High',
                    'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': row.priority === 'Normal',
                    'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]': row.priority === 'Low',
                  }" disabled />
              </td>
              <td class="px-4 py-2 text-center text-md">
                <select id="status" class="py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D] border"
                  v-model="row.status" :class="{
                    'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]': row.status === 'Canceled',
                    'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]': row.status === 'OnGoing',
                    'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]': row.status === 'Done',
                    'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]': row.status === 'NotYet',
                  }">
                  <option value="Canceled">Canceled</option>
                  <option value="OnGoing">On Going</option>
                  <option value="Done">Done</option>
                  <option value="NotYet">Not Yet</option>
                </select>
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
            class="text-black text-sm text-left border rounded px-6 py-1">
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

  <!-- Teacher Call Log Modal -->
  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !openteachercalllog }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl " @click="openteachercalllog = false" aria-hidden="true">
    </div>
    <PeopleTeacherCallLog />
  </div>

  <!-- Requested Printing Modal -->
  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !openrequesetedprinting }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl " @click="openrequesetedprinting = false"
      aria-hidden="true">
    </div>
    <RequestedPrintingModal />
  </div>



</template>

<script>
import PeopleTeacherCallLog from '../modals/PeopleTeacherCallLog.vue';
import RequestedPrintingModal from './RequestedPrintingModal.vue';
export default {
  components: {
    PeopleTeacherCallLog,
    RequestedPrintingModal,
  },
  data() {
    return {
      rowsPerPage: 10,
      currentPage: 1,
      tableData: [ // Use tableData instead of students directly
        {
          id: 1,
          teacher: 'Mr. Smith',
          request: 'Extra class session',
          groupNumber: 'G01',
          dueDate: '2025-04-20',
          priority: 'High',
          status: 'OnGoing'
        },
        {
          id: 2,
          teacher: 'Ms. Johnson',
          request: 'Exam reschedule',
          groupNumber: 'G02',
          dueDate: '2025-04-22',
          priority: 'Emergency',
          status: 'NotYet'
        },
        {
          id: 3,
          teacher: 'Dr. Brown',
          request: 'Replacement needed',
          groupNumber: 'G03',
          dueDate: '2025-04-18',
          priority: 'Normal',
          status: 'Done'
        },
        {
          id: 4,
          teacher: 'Mr. Lee',
          request: 'Change classroom',
          groupNumber: 'G04',
          dueDate: '2025-04-25',
          priority: 'Low',
          status: 'Canceled'
        }
      ],
      students: [],
      openteachercalllog: false,
      openrequesetedprinting: false,
      selectedComponent: "",
    };
  },
  mounted() {
    this.paginateData();
  },
  computed: {
    totalPages() {
      return Math.ceil(this.tableData.length / this.rowsPerPage);
    },
  },
  methods: {
    updatePagination() {
      this.currentPage = 1;
      this.paginateData();
    },
    paginateData() {
      if (!Array.isArray(this.tableData)) return; // ✅ Guard clause
      const start = (this.currentPage - 1) * this.rowsPerPage;
      const end = start + this.rowsPerPage;
      this.students = this.tableData.slice(start, end);
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