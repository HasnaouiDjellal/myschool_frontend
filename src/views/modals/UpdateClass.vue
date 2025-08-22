<script setup>
import { defineProps, defineEmits, ref, onMounted } from 'vue'
import axios from 'axios'

const props = defineProps({
  id: { type: Number, required: true }
})
const emit = defineEmits(['updated', 'close'])

// Store all class info in one object
const classData = ref({})

// Option lists
const languages = ref([])
const levels = ref([])
const ages = ref([
  { value: 'Kids', label: 'Kids' },
  { value: 'Teens', label: 'Teens' },
  { value: 'Adults', label: 'Adults' }
])

// Selected values for form controls
const selectedLanguageId = ref('')
const selectedLevelId = ref('')
const selectedAgeGroup = ref('')

const token = localStorage.getItem('access_token')
const headers = { Authorization: `Bearer ${token}` }

onMounted(async () => {
  if (!token) {
    console.error('No token found, redirecting to login...')
    return
  }

  try {
    const [langsRes, levelsRes, classRes] = await Promise.all([
      axios.get('http://127.0.0.1:8000/api/languages/', { headers }),
      axios.get('http://127.0.0.1:8000/api/levels/', { headers }),
      axios.get(`http://127.0.0.1:8000/api/classes/${props.id}/`, { headers })
    ])

    languages.value = langsRes.data
    levels.value = levelsRes.data
    classData.value = classRes.data

    // Initialize selected fields based on fetched class
    selectedLanguageId.value = classRes.data?.language?.id ?? classRes.data?.language ?? ''
    selectedLevelId.value = classRes.data?.level?.id ?? classRes.data?.level ?? ''
    selectedAgeGroup.value = classRes.data?.age_group ?? ''
  } catch (err) {
    console.error('Error fetching class details:', err)
  }
})

async function updateClass() {
  try {
    const payload = {
      language: selectedLanguageId.value,
      level: selectedLevelId.value,
      age_group: selectedAgeGroup.value,
      price: classData.value?.price
    }

    await axios.patch(
      `http://127.0.0.1:8000/api/classes/${props.id}/`,
      payload,
      { headers }
    )
    emit('updated')
    emit('close')
  } catch (err) {
    console.error('Error updating class:', err)
  }
}
</script>
<template>
  <!-- Modal Content -->
  <div
    class="relative w-11/12 max-w-[400px] mt-4 rounded-2xl overflow-auto h-auto flex flex-col pb-4 bg-slate-200 shadow-[0px_0px_4px_rgba(0,0,0,0.25)] max-md:max-w-full">
    <div
      class="flex gap-10 justify-between items-center self-stretch px-4 py-3 w-full text-xl font-medium rounded-t-2xl rounded-b-none bg-slate-300 min-h-[62px] text-blue-950">

      <h2 id="newClassTitle" class="self-stretch my-auto">Update Class</h2>
      <!-- Close Button -->
      <button class="text-gray-500 hover:text-gray-700 focus:outline-none" @click="emit('close')">
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
    <!-- Language Select -->
    <div class="flex gap-2 items-center pl-4 mt-4 w-full max-w-sm">
      <label for="language" class="sr-only">Select Language</label>
      <select id="language" name="language" v-model="selectedLanguageId"
        class="px-3 py-2 bg-white rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 min-w-[240px] w-[368px]"
        required>
        <option value="" disabled class="text-gray-500">Select Language</option>
        <option v-for="lang in languages" :key="lang.id" :value="lang.id" class="text-gray-700">{{ lang.language_name }}</option>
      </select>
    </div>

    <!-- Age Group Select -->
    <div class="flex gap-2 items-center pl-4 mt-4 w-full max-w-sm">
      <label for="age" class="sr-only">Select Age Group</label>
      <select id="age" name="age" v-model="selectedAgeGroup"
        class="px-3 py-2 bg-white rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 min-h-[40px] min-w-[240px] w-[368px]"
        required>
        <option value="" disabled class="text-gray-500">Select Age Group</option>
        <option v-for="age in ages" :key="age.value" :value="age.value" class="text-gray-700">{{ age.label }}</option>
      </select>
    </div>

    <!-- Level Select -->
    <div class="flex gap-2 items-center pl-4 mt-4 w-full max-w-sm">
      <label for="level" class="sr-only">Select Level</label>
      <select id="level" name="level" v-model="selectedLevelId"
        class="px-3 py-2 bg-white rounded-lg border border-gray-400 focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700 min-h-[40px] min-w-[240px] w-[368px]"
        required>
        <option value="" disabled class="text-gray-500">Select Level</option>
        <option v-for="lev in levels" :key="lev.id" :value="lev.id" class="text-gray-700">{{ lev.level_name }}</option>
      </select>
    </div>

    <!-- Price  -->

    <div class="flex gap-2 items-center pl-4 mt-4 w-full max-w-sm">

      <input v-model="classData.price" type="number" id="price" name="price" placeholder="Price (DA)"
        class=" placeholder-gray-500 gap-2 self-stretch px-2 my-auto bg-white rounded-lg border border-gray-400 border-solid min-h-[40px] min-w-[240px] w-[368px]"
        required />
    </div>
    <!-- Button -->
    <div class="flex gap-2 items-center pl-4 mt-4 w-full max-w-sm text-base text-white whitespace-nowrap">
      <!-- Push this div to the right -->
      <div class="flex gap-4 items-center ml-auto my-auto">
        <button type="button" @click="updateClass" class="gap-4 self-stretch px-4 py-2 my-auto rounded-lg bg-slate-600 min-h-[40px]"
          style="background-color: #3D548D;" onmouseover="this.style.backgroundColor='#2A4A6A'"
          onmouseout="this.style.backgroundColor='#3D548D'">
          Update
        </button>
      </div>
    </div>

  </div>
</template>