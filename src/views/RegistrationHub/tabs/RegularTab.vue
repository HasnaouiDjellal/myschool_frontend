<script setup>
import { ref, computed, onMounted, watch } from "vue";
import axios from "axios";
import ClassesModal from '../../modals/ClassesModal.vue'
import NewRegistrationModal from '../../modals/NewRegistrationModal.vue'

// State
const opennewclass = ref(false)
const isModalOpen = ref(false)
const searchTerm = ref("")
const tableData = ref([])
const displayedData = ref([])
const currentPage = ref(1)
const rowsPerPage = ref(10)
const languages = ref([])
const levels = ref([])
const selectedLanguage = ref('All')
const selectedAge = ref('All')
const selectedLevel = ref('All')

// Computed
const totalPages = computed(() => Math.ceil(filteredData.value.length / rowsPerPage.value))

const filteredData = computed(() => {
  return tableData.value.filter((row) => {
    try {
      // Safe extraction of language and level names
      const languageName = extractLanguageName(row).toLowerCase()
      const levelName = extractLevelName(row).toLowerCase()
      const ageGroup = row.age_group?.toLowerCase() || ''

      // Search across all string fields
      const matchesSearch = !searchTerm.value ||
        Object.values(row).some(val =>
          val && String(val).toLowerCase().includes(searchTerm.value.toLowerCase())
        )

      // Filter conditions
      const matchesLanguage = selectedLanguage.value === 'All' ||
        languageName.includes(selectedLanguage.value.toLowerCase())

      const matchesAge = selectedAge.value === 'All' ||
        ageGroup === selectedAge.value.toLowerCase()

      const matchesLevel = selectedLevel.value === 'All' ||
        levelName.includes(selectedLevel.value.toLowerCase())

      return matchesSearch && matchesLanguage && matchesAge && matchesLevel
    } catch (error) {
      console.error('Error filtering row:', row, error)
      return false
    }
  })
})

// Helper functions
function extractLanguageName(row) {
  if (!row) return ''
  if (row.language?.language_name) return row.language.language_name
  if (typeof row.language === 'string') return row.language
  if (row.class_name) return row.class_name.split(' - ')[1] || ''
  return ''
}

function extractLevelName(row) {
  if (!row) return ''
  if (row.level?.level_name) return row.level.level_name
  if (typeof row.level === 'string') return row.level
  if (row.class_name) return row.class_name.split(' - ')[0] || ''
  return ''
}

// Pagination
function paginateData() {
  const start = (currentPage.value - 1) * rowsPerPage.value
  displayedData.value = filteredData.value.slice(start, start + rowsPerPage.value)
}

function goToPage() {
  currentPage.value = Math.max(1, Math.min(currentPage.value, totalPages.value))
  paginateData()
}

const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--
    paginateData()
  }
}

const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++
    paginateData()
  }
}

// API
const token = localStorage.getItem('access_token')
const headers = { Authorization: `Bearer ${token}` }

async function fetchData() {
  try {
    const response = await axios.get('http://127.0.0.1:8000/api/classes/', { headers })

    tableData.value = response.data.map(row => {
      // Prefer backend count; fallback to existing field if needed
      const count = row.active_enrollments_count ?? row.students_number ?? 0

      // Determine styling based on active enrollment count
      let colorClass = ''
      if (count === 0) {
        colorClass = 'bg-[#D1D8E7]'
      } else if (count > 7 && count <= 13) {
        colorClass = 'bg-[#E3F5EE]'
      } else if (count > 13) {
        colorClass = 'bg-[#FCECEC]'
      }

      // Determine border color based on age group
      let leftBorderColor = ''
      switch ((row.age_group || '').toLowerCase()) {
        case 'kids': leftBorderColor = 'bg-[#FEB726]'; break
        case 'teens': leftBorderColor = 'bg-[#14B5C7]'; break
        case 'adults': leftBorderColor = 'bg-[#F98182]'; break
        default: leftBorderColor = 'bg-gray-500'
      }

      return {
        ...row,
        // normalize to use the active enrollment count everywhere
        students_number: count,
        row_class: colorClass,
        color: leftBorderColor
      }
    })

    currentPage.value = 1
    paginateData()
  } catch (error) {
    console.error("Error fetching data:", error)
  }
}

async function fetchDataForFilters() {
  try {
    const [languagesRes, levelsRes] = await Promise.all([
      axios.get('http://127.0.0.1:8000/api/languages/', { headers }),
      axios.get('http://127.0.0.1:8000/api/levels/', { headers })
    ])

    languages.value = languagesRes.data
    levels.value = levelsRes.data
  } catch (err) {
    console.error('Error fetching filter data:', err)
  }
}

// Computed property to check if filters are active
const areFiltersActive = computed(() => {
  return (
    searchTerm.value !== "" ||
    selectedLanguage.value !== "All" ||
    selectedAge.value !== "All" ||
    selectedLevel.value !== "All" ||
    currentPage.value !== 1 ||
    rowsPerPage.value !== 10
  );
});

// Reset all filters and pagination
function resetFilters() {
  searchTerm.value = "";
  selectedLanguage.value = "All";
  selectedAge.value = "All";
  selectedLevel.value = "All";
  currentPage.value = 1;
  rowsPerPage.value = 10;
  paginateData();
}
// Lifecycle
onMounted(() => {
  fetchData()
  fetchDataForFilters()
})

// Watchers
watch([searchTerm, rowsPerPage, selectedLanguage, selectedAge, selectedLevel], () => {
  currentPage.value = 1
  paginateData()
})
</script>



<template>
  <div class="p-4 bg-gray-100 rounded-lg">
    <div class="relative flex justify-between overflow-x-auto rounded whitespace-nowrap">
      <div class="inline-flex max-w-md p-2 overflow-hidden rounded min-w-max">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative p-1">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input v-model="searchTerm" type="text" id="table-search"
            class="py-2 block ps-12 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-60 bg-[#FFFFFF]"
            placeholder="Search by name, city, parent..." />
        </div>
      </div>

      <div class="inline-flex max-w-md ml-3 p-2 text-[#22305C] font-semibold overflow-hidden rounded-lg min-w-max">
        <select v-model="selectedLanguage"
          class="text-sm w-36 rounded-lg px-4 bg-[#A0AEC9] hover:bg-[#7F8FA9] transition-colors">
          <option value="All">All Languages</option>
          <option v-for="lang in languages" :key="lang.id" :value="lang.language_name">
            {{ lang.language_name }}
          </option>
        </select>

        <select v-model="selectedAge"
          class="text-sm w-36 rounded-lg ml-4 px-4 bg-[#A0AEC9] hover:bg-[#7F8FA9] transition-colors">
          <option value="All">All Ages</option>
          <option value="kids">Kids</option>
          <option value="teens">Teens</option>
          <option value="adults">Adults</option>
        </select>

        <select v-model="selectedLevel"
          class="text-sm w-36 rounded-lg ml-4 px-4 bg-[#A0AEC9] hover:bg-[#7F8FA9] transition-colors">
          <option value="All">All Levels</option>
          <option v-for="lvl in levels" :key="lvl.id" :value="lvl.level_name">
            {{ lvl.level_name }}
          </option>
        </select>

        <button @click="resetFilters" :disabled="!areFiltersActive" class="reset-btn"
          :class="{ 'disabled-btn': !areFiltersActive }">
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


      <div class="inline-flex ml-3 p-2 overflow-hidden rounded-lg min-w-max">
        <!-- Action Buttons -->

        <button @click="isModalOpen = true"
          class="bg-[#3D548D] text-white text-sm ml-4 px-4 rounded-lg hover:bg-blue-800">
          New Registration Regular
        </button>

        <!-- Registration Modal -->

        <button class="bg-[#3D548D] text-white text-sm ml-4 px-4 rounded-lg hover:bg-blue-800"
          @click="opennewclass = true">New Class</button>
      </div>


    </div>

    <!-- Table -->
    <div class="pt-4 ">
      <div class="overflow-x-auto rounded-lg shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
        <table class="min-w-full table-auto">
          <thead>
            <tr class="bg-[#F0F2F7] text-center">
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
            <tr v-for="(row, index) in displayedData" :key="index" :class="row.row_class" class="relative">
              <!-- Table Data -->
              <td class="px-0 relative">
                <div :class="`absolute left-0 top-0 bottom-0 w-2 rounded-r-lg ${row.color}`"></div>
              </td>
              <td class="px-4 py-2 text-center text-sm font-semibold">{{ row.class_name }}</td>
              <td class="px-4 py-2 text-center text-sm font-semibold">{{ row.students_number }}</td>
              <td class="px-4 py-2 text-center text-sm font-semibold">{{ row.days }}</td>
              <td class="px-4 py-2 text-center text-sm font-semibold">{{ row.time }}</td>
              <td class="px-4 py-2 text-gray-500 text-center text-sm font-semibold">{{ row.teacher_name }}</td>
              <td class="px-4 py-2 text-center text-sm font-semibold">{{ row.start_date }}</td>
              <td class="px-4 py-2 text-center text-sm font-semibold">
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
    :class="['modal', { 'opacity-0 pointer-events-none': !isModalOpen }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
    role="dialog" aria-labelledby="modal-title">
    <!-- Overlay -->
    <div class="absolute w-full h-full filter backdrop-blur-xl opacity-70 animate-blob" @click="isModalOpen = false"
      aria-hidden="true">
    </div>
    <transition name="modal">
      <NewRegistrationModal v-if="isModalOpen" :open="isModalOpen" selectedComponent="regular"
        @close="isModalOpen = false" />
    </transition>
  </div>

</template>

<style>
.text-blue-500 {
  color: #3b82f6;
}

.border-blue-500 {
  border-color: #3b82f6;
}

.modal {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.modal.opacity-0 {
  opacity: 0;
  pointer-events: none;
}

.table-container {
  max-height: 400px;
  /* Limit the vertical height */
  overflow-y: auto;
  /* Enable vertical scrolling */
  overflow-x: auto;
  /* Enable horizontal scrolling */
  width: 100%;
  /* Ensure the table stays within the container's width */
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

table.waiting-list-table td.status.pending select {
  background-color: inherit;
  color: #22305C;
  border: 1px solid #D1D8E7;
  border-radius: 10px;
  padding: 9px 19px;
  font-size: 14px;
  width: auto;
  outline: none;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease
}

table.waiting-list-table td.status.pending select:hover,
table.waiting-list-table td.status.pending select:focus {
  background-color: #E8EDF7;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15)
}

.notcoming {
  background-color: #FFEDEC !important;
}

.coming {
  background-color: #E4FCFF !important;
}

input {
  color: #22305C !important;
  /* Ensure the text color applies regardless of other styles */
}
</style>
