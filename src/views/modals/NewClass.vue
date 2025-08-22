<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'

// Modal state
const opennewclass = ref(false)

// Dropdown data
const languages = ref([])
const levels = ref([])
const ages = ref([
  { value: 'Kids', label: 'Kids' },
  { value: 'Teens', label: 'Teens' },
  { value: 'Adults', label: 'Adults' }
])

const days = ref([
  { value: 'Weekend', label: 'Weekend' },
  { value: 'Weekdays', label: 'Weekdays' }
])

const time = ref([
  { value: 'Morning', label: 'Morning' },
  { value: 'Afternoon', label: 'Afternoon' }
])
// Form state
const selectedLanguage = ref('')
const selectedLevel = ref('')
const selectedAgeGroup = ref('')
const selectedDays = ref('')
const selectedTime = ref('')
const price = ref('')

// Auth token
const token = localStorage.getItem('access_token')
const authHeader = { Authorization: `Bearer ${token}` }

// Load dropdown data
onMounted(async () => {
  try {
    const langRes = await axios.get('http://localhost:8000/api/languages/', { headers: authHeader })
    languages.value = langRes.data

    const levelRes = await axios.get('http://localhost:8000/api/levels/', { headers: authHeader })
    levels.value = levelRes.data
  } catch (error) {
    console.error('Error loading dropdown data:', error)
  }
})

// Create class
const createClass = async () => {
  try {
    const payload = {
      language: selectedLanguage.value,
      level: selectedLevel.value,
      age_group: selectedAgeGroup.value,
      days: selectedDays.value,
      time: selectedTime.value,
      type: 'Regular', // default
      start_date: new Date().toISOString().split('T')[0], // same as created_at
      end_date: null,
      price: price.value,
      teacher_name: '', 
      students_number: 0 
    }

    await axios.post('http://localhost:8000/api/classes/', payload, { headers: authHeader })
    alert('Class created successfully!')
    opennewclass.value = false

    // reset form
    selectedLanguage.value = ''
    selectedLevel.value = ''
    selectedAgeGroup.value = ''
    selectedDays.value = ''
    selectedTime.value = ''
    price.value = ''
  } catch (error) {
    console.error('Error creating class:', error.response?.data || error.message)
    alert('Error creating class. Check console for details.')
  }
}
</script>

<template>
  <div
    class="relative w-11/12 max-w-[400px] mt-4 rounded-2xl overflow-auto h-auto flex flex-col pb-4 bg-slate-200 shadow-[0px_0px_4px_rgba(0,0,0,0.25)]">

    <!-- Header -->
    <div
      class="flex gap-10 justify-between items-center px-4 py-3 bg-slate-300 text-blue-950 text-xl font-medium rounded-t-2xl">
      <h2>New Class</h2>
      <button @click="opennewclass = false" class="text-gray-500 hover:text-gray-700">✕</button>
    </div>

    <!-- Language -->
    <div class="pl-4 mt-4">
      <select v-model="selectedLanguage"
        class="px-3 py-2 text-[#3D548D] bg-white rounded-lg border border-gray-400 focus:ring-2 w-[368px]" required>
        <option value="" disabled>Select Language</option>
        <option v-for="lang in languages" :key="lang.id" :value="lang.id">{{ lang.language_name }}</option>
      </select>
    </div>

    <!-- Age Group -->
    <div class="pl-4 mt-4">
      <select v-model="selectedAgeGroup"
        class="px-3 py-2 text-[#3D548D] bg-white rounded-lg border border-gray-400 focus:ring-2 w-[368px]" required>
        <option value="" disabled>Select Age Group</option>
        <option v-for="age in ages" :key="age.value" :value="age.value">{{ age.label }}</option>
      </select>
    </div>

    <!-- Days -->
    <div class="pl-4 mt-4">
      <select v-model="selectedDays"
        class="px-3 py-2 text-[#3D548D] bg-white rounded-lg border border-gray-400 focus:ring-2 w-[368px]" required>
        <option value="" disabled>Select Days</option>
        <option v-for="day in days" :key="day.value" :value="day.value">{{ days.label }}</option>
      </select>
    </div>
    <!-- Time -->
    <div class="pl-4 mt-4">
      <select v-model="selectedTime"
        class="px-3 py-2 text-[#3D548D] bg-white rounded-lg border border-gray-400 focus:ring-2 w-[368px]" required>
        <option value="" disabled>Select Time</option>
        <option v-for="time in time" :key="time.value" :value="time.value">{{ time.label }}</option>
      </select>
    </div>

    <!-- Level -->
    <div class="pl-4 mt-4">
      <select v-model="selectedLevel"
        class="px-3 py-2 text-[#3D548D] bg-white rounded-lg border border-gray-400 focus:ring-2 w-[368px]" required>
        <option value="" disabled>Select Level</option>
        <option v-for="lev in levels" :key="lev.id" :value="lev.id">{{ lev.level_name }}</option>
      </select>
    </div>

    <!-- Price -->
    <div class="pl-4 mt-4">
      <input type="number" v-model="price" placeholder="Price (DA)"
        class="px-3 py-2 text-[#3D548D] bg-white rounded-lg border border-gray-400 w-[368px]" required />
    </div>

    <!-- Submit -->
    <div class="flex justify-end pr-4 mt-4">
      <button @click="createClass" class="px-4 py-2 text-white rounded-lg" style="background-color: #3D548D;"
        @mouseover="(e) => e.target.style.backgroundColor = '#2A4A6A'"
        @mouseout="(e) => e.target.style.backgroundColor = '#3D548D'">
        Create
      </button>
    </div>
  </div>
</template>
