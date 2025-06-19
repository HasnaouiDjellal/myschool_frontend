<script setup>
import { ref } from 'vue';
const opennewprinting = ref(false);
</script>

<template>
  <div>
    <h2 id="modal-title" class="text-xl font-bold text-white p-4">Printing Hub</h2>
    <div class="w-full h-[100vh] bg-[#F0F2F7] rounded-lg">
      <div>
        <!-- Tabs -->
        <div class=" flex justify-end mr-3 pb-2 pt-2 border-b border-gray-200">
          <div class="inline-flex ml-3 overflow-hidden rounded-lg min-w-max">
            <!-- Action Buttons -->
            <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 "
            @click="opennewprinting = true">New
              Printing
            </button>
          </div>
        </div>
        <div class="p-4 bg-gray-100 rounded-lg">
          <div class="relative overflow-x-auto rounded whitespace-nowrap">
            <div class="flex justify-between items-center flex-wrap gap-4 overflow-x-auto rounded">
              <div class="inline-flex max-w-md overflow-hidden rounded min-w-max">
                <label for="table-search" class="sr-only">Search</label>
                <div class="relative p-1">
                  <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                      <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                    </svg>
                  </div>
                  <input type="text" id="table-search"
                    class="py-2 block ps-12 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-60 bg-[#FFFFFF]"
                    placeholder="Search">
                </div>
              </div>

              <div class="inline-flex max-w-md ml-3 text-[#22305C] overflow-hidden rounded-lg min-w-max">
                <select class="text-sm w-36 rounded-lg px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
                  <option>All Category</option>
                  <option>English</option>
                  <option>Arabic</option>
                  <option>French</option>
                </select>
                <select class="text-sm w-36 rounded-lg ml-4 px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
                  <option>All Status</option>
                  <option>Children</option>
                  <option>Teenagers</option>
                  <option>Adults</option>
                </select>
    
                <button>
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 text-gray-600" fill="none"
                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
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
                <input id="enrolleddate" type="date"
                  class="w-full py-1.5 px-3 border text-gray-600 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
                  required />
              </div>
            </div>


          </div>
        </div>
        <!-- Tab Content -->
        <component :is="currentTabComponent" :paginated-data="paginatedData" :rows-per-page="rowsPerPage"
          :current-page="currentPage" :total-pages="totalPages" @prev-page="prevPage" @next-page="nextPage"
          @update-pagination="updatePagination" @go-to-page="goToPage" />
      </div>
    </div>
  </div>
  
  <!-- New Printing Modal -->
  <div
    :class="['modal', { 'opacity-0 pointer-events-none': !opennewprinting }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl " @click="opennewprinting = false" aria-hidden="true"></div>
    <NewPrintingModal />
  </div>
</template>

<script>
import PrintingHubComponent from "./PrintingHubComponent.vue";
import NewPrintingModal from './NewPrintingModal.vue';
export default {
  components: {
    PrintingHubComponent,
    NewPrintingModal,
  },
  data() {
    return {
      paginatedData: [],
      rowsPerPage: 10,
      currentPage: 1,
      totalPages: 0,
    };
  },
  computed: {
    currentTabComponent() {
      PrintingHubComponent.name = "PrintingHubComponent";
      return PrintingHubComponent;
    }
  },

  methods: {
    prevPage() {
      if (this.currentPage > 1) this.currentPage--;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) this.currentPage++;
    },
    updatePagination() {
      // Update pagination logic
    },
    goToPage() {
      // Logic for navigating to a specific page
    },
  },
};
</script>
