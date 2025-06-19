<script setup>
import { ref } from 'vue';
const open = ref(false);
const opennewclass = ref(false);
const opennewregistration = ref(false);
</script>

<template>
  <div class="p-4 bg-gray-100 rounded-lg">

    <div class="relative flex justify-between py-2 overflow-x-auto rounded whitespace-nowrap">
      <div class="inline-flex max-w-md overflow-hidden rounded min-w-max">
        <input type="text" placeholder="Search"
          class="border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"></input>
      </div>

      <div class="inline-flex max-w-md ml-3 text-[#22305C] overflow-hidden rounded-lg min-w-max">
        <select class="text-sm w-30 rounded-lg px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
          <option>All Languages</option>
          <option>English</option>
          <option>Arabic</option>
          <option>French</option>
        </select>
        <select class="text-sm w-30 rounded-lg ml-4 px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
          <option>All Ages</option>
          <option>Children</option>
          <option>Teenagers</option>
          <option>Adults</option>
        </select>
        <select class="text-sm w-30 rounded-lg ml-4 px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
          <option>All Levels</option>
          <option>Beginner</option>
          <option>Intermediate</option>
          <option>Advanced</option>
        </select>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 text-gray-600" fill="none" viewBox="0 0 24 24"
            stroke="currentColor" stroke-width="2">
            <g clip-path="url(#clip0_429_11071)">
              <path
                d="M12 2.99982C16.9706 2.99982 21 7.02925 21 11.9998C21 16.9704 16.9706 20.9998 12 20.9998C7.02944 20.9998 3 16.9704 3 11.9998C3 9.17255 4.30367 6.64977 6.34267 4.99982"
                stroke="#292929" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M3 4.49982H7V8.49982" stroke="#292929" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </g>
            <defs>
              <clipPath id="clip0_429_11071">
                <rect width="24" height="24" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>


      <div class="inline-flex ml-3 overflow-hidden rounded-lg min-w-max">
        <!-- Action Buttons -->

        <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800"
          @click="opennewregistration = true">
          New Registration</button>
        <!-- Registration Modal -->

        <button class="bg-[#3D548D] text-white text-sm ml-4 px-4 py-2 rounded-lg hover:bg-blue-800"
          @click="opennewclass = true">New Class</button>
      </div>


    </div>

    <!-- Table -->
    <div class="pt-4 ">
      <div class="overflow-x-auto rounded-lg shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="bg-[#F0F2F7] text-center even:bg-[#FFFFFF]">
              <th class="px-2 py-2"></th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Class</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Students' Number
                <div class="inline-flex items-center justify-end">
                  <a href="#"><svg class="w-3 h-3 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor" viewBox="0 0 24 24">
                      <path
                        d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                    </svg>
                  </a>
                </div>
              </th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Days</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Time</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Teacher</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Start Date</th>
              <th class="px-2 py-2 text-[#22305C] font-medium">Action</th>
            </tr>
          </thead>
          <tbody class="text-[#22305C]">
            <tr v-for="(row, index) in paginatedData" :key="index" :class="getRowClass(row.students)" class="relative">
              <!-- Table Data -->
              <td class="px-0 relative">
                <div :class="`absolute left-0 top-0 bottom-0 w-2 rounded-r-lg ${row.color}`"></div>
              </td>
              <td class="px-4 py-2 text-center text-sm">{{ row.class }}</td>
              <td class="px-4 py-2 text-center text-sm">{{ row.students }}</td>
              <td class="px-4 py-2 text-center text-sm">{{ row.days }}</td>
              <td class="px-4 py-2 text-center text-sm">{{ row.time }}</td>
              <td class="px-4 py-2 text-gray-500 text-center text-sm">Not Assigned</td>
              <td class="px-4 py-2 text-center text-sm">{{ row.startDate }}</td>
              <td class="px-4 py-2 text-center text-sm">
                <button class="p-1">
                  <svg class="w-5 h-5" viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M8.24995 20L7.84995 16.8C7.63328 16.7167 7.42912 16.6167 7.23745 16.5C7.04578 16.3833 6.85828 16.2583 6.67495 16.125L3.69995 17.375L0.949951 12.625L3.52495 10.675C3.50828 10.5583 3.49995 10.4458 3.49995 10.3375V9.6625C3.49995 9.55417 3.50828 9.44167 3.52495 9.325L0.949951 7.375L3.69995 2.625L6.67495 3.875C6.85828 3.74167 7.04995 3.61667 7.24995 3.5C7.44995 3.38333 7.64995 3.28333 7.84995 3.2L8.24995 0H13.75L14.15 3.2C14.3666 3.28333 14.5708 3.38333 14.7625 3.5C14.9541 3.61667 15.1416 3.74167 15.325 3.875L18.3 2.625L21.05 7.375L18.475 9.325C18.4916 9.44167 18.5 9.55417 18.5 9.6625V10.3375C18.5 10.4458 18.4833 10.5583 18.45 10.675L21.025 12.625L18.275 17.375L15.325 16.125C15.1416 16.2583 14.95 16.3833 14.75 16.5C14.55 16.6167 14.35 16.7167 14.15 16.8L13.75 20H8.24995ZM11.05 13.5C12.0166 13.5 12.8416 13.1583 13.525 12.475C14.2083 11.7917 14.55 10.9667 14.55 10C14.55 9.03333 14.2083 8.20833 13.525 7.525C12.8416 6.84167 12.0166 6.5 11.05 6.5C10.0666 6.5 9.23745 6.84167 8.56245 7.525C7.88745 8.20833 7.54995 9.03333 7.54995 10C7.54995 10.9667 7.88745 11.7917 8.56245 12.475C9.23745 13.1583 10.0666 13.5 11.05 13.5Z"
                      fill="#22305C" />
                  </svg>
                </button>
                <button class="p-1" @click="open = true">
                  <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.5 16.5L16.5 12L9.5 7.5V16.5ZM12 22C10.6167 22 9.31667 21.7375 8.1 21.2125C6.88333 20.6875 5.825 19.975 4.925 19.075C4.025 18.175 3.3125 17.1167 2.7875 15.9C2.2625 14.6833 2 13.3833 2 12C2 10.6167 2.2625 9.31667 2.7875 8.1C3.3125 6.88333 4.025 5.825 4.925 4.925C5.825 4.025 6.88333 3.3125 8.1 2.7875C9.31667 2.2625 10.6167 2 12 2C13.3833 2 14.6833 2.2625 15.9 2.7875C17.1167 3.3125 18.175 4.025 19.075 4.925C19.975 5.825 20.6875 6.88333 21.2125 8.1C21.7375 9.31667 22 10.6167 22 12C22 13.3833 21.7375 14.6833 21.2125 15.9C20.6875 17.1167 19.975 18.175 19.075 19.075C18.175 19.975 17.1167 20.6875 15.9 21.2125C14.6833 21.7375 13.3833 22 12 22Z"
                      fill="#22305C" />
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

  <!-- Start Group Modal -->
  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !open }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full backdrop-blur-md" @click="open = false" aria-hidden="true"></div>
    <StartGroupModal />
  </div>

  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !opennewclass }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full backdrop-blur-md" @click="opennewclass = false" aria-hidden="true"></div>
    <ClassesModal />
  </div>

  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !opennewregistration }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl opacity-70 animate-blob"
      @click="opennewregistration = false" aria-hidden="true"></div>
    <NewRegistrationModal />
  </div>

</template>

<script>
import StartGroupModal from '../../modals/StartGroupModal.vue';
import ClassesModal from '../../modals/ClassesModal.vue';
import NewRegistrationModal from '../../modals/NewRegistrationModal.vue';
export default {
  components: {
    StartGroupModal,
    ClassesModal,
    NewRegistrationModal,
  },
  data() {
    return {
      activeTab: "regular",
      tableData: [
        { class: "A1.1 | En | Adults", students: 15, days: "Weekend Days", time: "Mornings", startDate: "26/12/2024", color: 'bg-[#F98182]' },
        { class: "A1.1 | Fr | Teens", students: 14, days: "Weekend Days", time: "Mornings", startDate: "26/12/2024", color: 'bg-[#14B5C7]' },
        { class: "A1.1 | Fr | Kids", students: 13, days: "Weekend Days", time: "Mornings", startDate: "26/12/2024", color: 'bg-[#FEB726]' },
        { class: "A1.1 | Fr | Adults", students: 8, days: "Weekend Days", time: "Mornings", startDate: "26/12/2024", color: 'bg-[#F98182]' },
        { class: "A1.1 | Fr | Adults", students: 15, days: "Weekend Days", time: "Mornings", startDate: "26/12/2024", color: 'bg-[#F98182]' },
        { class: "A1.1 | Fr | Adults", students: 0, days: "Weekend Days", time: "Mornings", startDate: "26/12/2024", color: 'bg-[#14B5C7]' },
        { class: "A1.1 | Fr | Adults", students: 5, days: "Weekend Days", time: "Mornings", startDate: "26/12/2024", color: 'bg-[#F98182]' },

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
    getRowClass(students) {
      if (students > 10) return "bg-[#FCECEC]";
      if (students > 5) return "bg-[#E3F5EE]";
      if (students == 0) return "bg-[#D1D8E7]";
      return "bg-[#F0F2F7]";
    },
    getColor(row) {
      if (row.students > 10) return "bg-red-500";
      if (row.students > 5) return "bg-yellow-500";
      return "bg-green-500";
    },

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
