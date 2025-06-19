<template>
  <div>
    <h2 id="modal-title" class="text-xl font-bold text-white p-4">Groups Hub</h2>
    <div class="w-full h-[100vh] bg-[#F0F2F7] rounded-lg">
      <div>
        <!-- Tabs -->
        <div class="px-2 pt-2 border-b border-gray-200">
          <ul class="flex flex-wrap -mb-px text-sm font-medium text-center" role="tablist">
            <li v-for="tab in tabs" :key="tab.name" role="presentation">
              <button
                class="inline-block p-3 py-2 border-b-4 rounded-t-lg"
                :class="activeTab === tab.name ? 'text-[#3D548D] border-[#3D548D]' : 'text-gray-500 border-transparent'"
                @click="activeTab = tab.name"
                type="button"
                role="tab"
                :aria-controls="tab.name"
                :aria-selected="activeTab === tab.name"
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
import RegularTab from "./GroupsHubTabs/RegularTabGroupsHub.vue";
import VIPTab from "./GroupsHubTabs/VIPTabGroupsHub.vue";
import OnlineTab from "./GroupsHubTabs/OnlineTabGroupsHub.vue";
import TutoringTab from "./GroupsHubTabs/TutoringTabGroupsHub.vue";
import EventTab from "./GroupsHubTabs/EventTabGroupsHub.vue";
export default {
  components: {
    RegularTab,
    VIPTab,
    OnlineTab,
    TutoringTab,
    EventTab,
  },
  data() {
    return {
      activeTab: "regular",
      tabs: [
        { name: "regular", label: "Regular" },
        { name: "vip", label: "VIP" },
        { name: "online", label: "Online" },
        { name: "tutoring", label: "Tutoring" },
        { name: "event", label: "Event" },
      ],
      paginatedData: [],
      rowsPerPage: 10,
      currentPage: 1,
      totalPages: 0,
    };
  },
  computed: {
    currentTabComponent() {
      switch (this.activeTab) {
        case "regular":
          return "RegularTab";
        case "vip":
          return "VIPTab";
        case "online":
          return "OnlineTab";
        case "tutoring":
          return "TutoringTab";
        case "event":
          return "EventTab";
        default:
          return "RegularTab";
      }
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
};
</script>
