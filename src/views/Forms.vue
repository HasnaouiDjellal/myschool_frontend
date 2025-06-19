<template>
  <div>
    <h2 id="modal-title" class="text-xl font-bold text-white p-4">People Hub</h2>
    <div class="w-full h-[100vh] bg-[#F0F2F7] rounded-lg">
      <div>
        <!-- Tabs -->
        <div class="px-2 pt-2 border-b border-gray-200">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
            <li v-for="tab in tabss" :key="tab.name" role="presentation">
              <button
                class="inline-block p-3 py-2 border-b-4 rounded-t-lg"
                :class="activeTabs === tab.name ? 'text-[#3D548D] border-[#3D548D]' : 'text-gray-500 border-transparent'"
                @click="activeTabs = tab.name"
                type="button"
                role="tab"
                :aria-controls="tab.name"
                :aria-selected="activeTabs === tab.name"
              >
                {{ tab.label }}
              </button>
            </li>
          </ul>
        </div>
        <!-- Tab Content -->
        <component
          :is="currentTabComponent"
          :paginated-data="paginatedData"
          :rows-per-page="rowsPerPage"
          :current-page="currentPage"
          :total-pages="totalPages"
          @prev-page="prevPage"
          @next-page="nextPage"
          @update-pagination="updatePagination"
          @go-to-page="goToPage"
        />
      </div>
    </div>
  </div>
</template>

<script>
import StudentsTab from "./tabs/StudentsTab.vue";
import TeachersTab from "./tabs/TeachersTab.vue";
import StaffTab from "./tabs/StaffTab.vue";

export default {
  components: {
    StudentsTab,
    TeachersTab,
    StaffTab,
  },
  data() {
    return {
      activeTabs: "students",
      tabss: [
        { name: "students", label: "Students" },
        { name: "teachers", label: "Teachers" },
        { name: "staff", label: "Staff" },

      ],
      paginatedData: [],
      rowsPerPage: 10,
      currentPage: 1,
      totalPages: 0,
    };
  },
  computed: {
    currentTabComponent() {
      switch (this.activeTabs) {
        case "students":
          return "StudentsTab";
        case "teachers":
          return "TeachersTab";
        case "staff":
          return "StaffTab";
        default:
          return "StudentsTab";
      }
    },
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
