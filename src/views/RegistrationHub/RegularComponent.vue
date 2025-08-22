<script setup>
import { ref, onMounted, computed, watch } from 'vue';
import axios from 'axios';

// Modal and Form State
const open = ref(false);
const open2 = ref(false);
const isSaving = ref(false);
const classes = ref([]);
const activeForm = ref('form1');
const setActiveForm = (form) => {
  activeForm.value = form;
};

// Dropdown State
const dropdownOpen = ref(false);

// Multi-Selected Rows State
const selectedRows = ref([]);

// Toggle row selection
const toggleRowSelection = (row) => {
  const index = selectedRows.value.findIndex(r => r.id === row.id);
  if (index >= 0) {
    selectedRows.value.splice(index, 1); // Deselect
  } else {
    selectedRows.value.push(row); // Select
  }
};

// Check if row is selected
const isRowSelected = (row) => {
  return selectedRows.value.some(r => r.id === row.id);
};

// Table search state
const searchTerm = ref('');

// Preferences State
const preferences = ref([{ timeId: '', dayId: '', languageId: '', levelId: '' }]);
const maxPreferences = 3;
const addPreference = () => {
  if (preferences.value.length < maxPreferences) {
    preferences.value.push({ timeId: '', dayId: '', languageId: '', levelId: '' });
  }
};

// Personal Info Form State
const firstName = ref('');
const lastName = ref('');
const birthDate = ref('');
const city = ref('');
const street = ref('');
const gender = ref('');
const phone1 = ref('');
const phone2 = ref('');
const parentName = ref('');

// Education Info State
const levels = ref([]);
const languages = ref([]);
const days = ref([]);
const times = ref([]);
const selectedLanguageId = ref('');
const selectedLevelId = ref('');
const selectedDayId = ref('');
const selectedTimeId = ref('');
const institution = ref('');
const average = ref('');

const token = localStorage.getItem('access_token');
const headers = { Authorization: `Bearer ${token}` };

// Relationship (Links) constants to match backend model
const RELATION_OPTIONS = [
  { value: 'sibling', label: 'Sibling' },
  { value: 'spouse', label: 'Spouse' },
  { value: 'parent_of', label: 'Parent Of' },
  { value: 'child_of', label: 'Child Of' },
  { value: 'guardian_of', label: 'Guardian Of' },
  { value: 'relative_of', label: 'Relative Of' },
];
const REL_API_URL = 'http://127.0.0.1:8000/api/relationships/';
// Adjust app labels/models if different in your backend
const CONTENT_TYPE_BY_TYPE = {
  student: 'students.student',
  teacher: 'teachers.teacher',
  staff: 'staffs.staff',
};

// Shared helpers
const toMoneyString = (val) => {
  const num = Number(val);
  if (Number.isFinite(num)) {
    return num.toFixed(2);
  }
  return '0.00';
};

// Fees & Discounts
const registrationFeeDue = ref('');
const registrationFeePaid = ref('');
const registrationFeeExempt = ref(false);
const registrationFeeReason = ref('');
const classFeeDue = ref('');
const discountPercentage = ref('');

const registrationFeeRemaining = computed(() => {
  if (registrationFeeExempt.value) return toMoneyString(0);
  const due = Number(registrationFeeDue.value) || 0;
  const paid = Number(registrationFeePaid.value) || 0;
  const remaining = Math.max(due - paid, 0);
  return toMoneyString(remaining);
});

watch([registrationFeeExempt, registrationFeeDue, registrationFeePaid], () => {
  if (registrationFeeExempt.value) {
    registrationFeeDue.value = '0';
    registrationFeePaid.value = '0';
    return;
  }
  const due = Number(registrationFeeDue.value);
  let paid = Number(registrationFeePaid.value);
  if (!Number.isFinite(paid) || paid < 0) paid = 0;
  if (!Number.isFinite(due) || due < 0) {
    registrationFeeDue.value = '0';
  } else if (paid > due) {
    registrationFeePaid.value = String(due);
  }
});

async function fetchClasses() {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/classes/', { headers });
    classes.value = res.data;
  } catch (err) {
    console.error('Error fetching classes:', err);
  }
}

// Filtered classes based on search term
const filteredClasses = computed(() => {
  const term = (searchTerm.value || '').toLowerCase().trim();
  if (!term) return classes.value;
  return classes.value.filter((row) => {
    try {
      return Object.values(row).some((val) =>
        val && String(val).toLowerCase().includes(term)
      );
    } catch (e) {
      return false;
    }
  });
});

async function fetchLevels() {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/levels/', { headers });
    levels.value = res.data;
  } catch (err) {
    console.error('Error fetching levels:', err);
  }
}
async function fetchLanguages() {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/languages/', { headers });
    languages.value = res.data;
  } catch (err) {
    console.error('Error fetching languages:', err);
  }
}
async function fetchDays() {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/days/', { headers });
    days.value = res.data;
  } catch (err) {
    console.error('Error fetching days:', err);
  }
}
async function fetchTimes() {
  try {
    const res = await axios.get('http://127.0.0.1:8000/api/times/', { headers });
    times.value = res.data;
  } catch (err) {
    console.error('Error fetching times:', err);
  }
}

async function postStudentInfo() {
  try {
    const payload = {
      first_name: firstName.value,
      last_name: lastName.value,
      date_of_birth: birthDate.value,
      city_town: city.value,
      street: street.value,
      gender: gender.value,
      phone_number1: phone1.value,
      phone_number2: phone2.value,
      parent_name: parentName.value
    };
    const res = await axios.post('http://127.0.0.1:8000/api/students/', payload, { headers });
    return res.data;
  } catch (err) {
    console.error('Error posting student info:', err?.response?.data || err?.message || err);
    throw err;
  }
}

async function postEducationInfo(studentId) {
  try {
    const payload = {
      level: selectedLevelId.value,
      institution: institution.value,
      average: average.value || null,
      student: studentId
    };
    const res = await axios.post('http://127.0.0.1:8000/api/education/', payload, { headers });
    return res.data;
  } catch (err) {
    console.error('Error posting education info:', err?.response?.data || err?.message || err);
    throw err;
  }
}

async function postPreferences(studentId) {
  try {
    const toNumber = (value) => (value === '' || value === null || value === undefined ? null : Number(value));

    const dayIds = preferences.value
      .map(p => toNumber(p.dayId))
      .filter(v => v !== null);
    const timeIds = preferences.value
      .map(p => toNumber(p.timeId))
      .filter(v => v !== null);
    const languageIds = preferences.value
      .map(p => toNumber(p.languageId))
      .filter(v => v !== null);
    const levelIds = preferences.value
      .map(p => toNumber(p.levelId))
      .filter(v => v !== null);

    const payload = {
      student: studentId,
      day_ids: dayIds,
      time_ids: timeIds,
      language_ids: languageIds,
      level_ids: levelIds
    };
    const res = await axios.post('http://127.0.0.1:8000/api/preferences/', payload, { headers });
    return res.data;
  } catch (err) {
    console.error('Error posting preferences:', err?.response?.data || err?.message || err);
    throw err;
  }
}

async function saveStudentAndEducation() {
  if (isSaving.value) return;
  isSaving.value = true;
  let createdStudentId = null;
  try {
    const student = await postStudentInfo();
    if (!student || !student.id) {
      throw new Error('Failed to create student');
    }
    createdStudentId = student.id;
    await postEducationInfo(createdStudentId);
    await postPreferences(createdStudentId);
    await postLinks(createdStudentId);
    await createOrUpdateRegistrationFee(createdStudentId);
    await bulkEnrollSelected(createdStudentId);
    alert('All data saved successfully');
  } catch (err) {
    // Roll back by deleting student, assuming cascading deletes on related models
    if (createdStudentId) {
      try {
        await axios.delete(`http://127.0.0.1:8000/api/students/${createdStudentId}/`, { headers });
      } catch (rollbackErr) {
        console.error('Rollback failed:', rollbackErr?.response?.data || rollbackErr?.message || rollbackErr);
      }
    }
    alert('Save failed. No data was saved.');
  } finally {
    isSaving.value = false;
  }
}

// Links State (integrated with backend EntityRelationship)
const createEmptyLink = () => ({ targetType: '', targetId: null, displayName: '', relation: '' });
const links = ref([createEmptyLink()]);
const linkResults = ref({ 0: [] }); // search suggestions per link index

const addLink = () => {
  if (links.value.length < 3) {
    links.value.push(createEmptyLink());
    linkResults.value[links.value.length - 1] = [];
  }
};

async function searchLinkCandidates(index, query) {
  if (!query || query.length < 2) {
    linkResults.value[index] = [];
    return;
  }
  try {
    const [studRes, teachRes, staffRes] = await Promise.all([
      axios.get(`http://127.0.0.1:8000/api/students/?search=${encodeURIComponent(query)}`, { headers }),
      axios.get(`http://127.0.0.1:8000/api/teachers/?search=${encodeURIComponent(query)}`, { headers }),
      axios.get(`http://127.0.0.1:8000/api/staffs/?search=${encodeURIComponent(query)}`, { headers }),
    ]);
    const toItems = (arr, type) => (arr || []).map(x => ({
      type,
      id: x.id,
      name: `${x.first_name || x.name || ''} ${x.last_name || ''}`.trim() || (x.full_name || '').trim() || `#${x.id}`,
    }));
    linkResults.value[index] = [
      ...toItems(studRes.data, 'student'),
      ...toItems(teachRes.data, 'teacher'),
      ...toItems(staffRes.data, 'staff'),
    ];
  } catch (e) {
    console.error('Search people failed', e);
    linkResults.value[index] = [];
  }
}

function selectLinkCandidate(index, item) {
  const link = links.value[index];
  link.targetType = item.type;
  link.targetId = item.id;
  link.displayName = item.name;
  linkResults.value[index] = [];
}

async function postLinks(sourceStudentId) {
  try {
    // Deduplicate by targetType-targetId-relation to avoid unique violations
    const seen = new Set();
    for (const link of links.value) {
      if (!link.relation || !link.targetType || !link.targetId) continue;
      const key = `${link.targetType}|${link.targetId}|${link.relation}`;
      if (seen.has(key)) continue;
      seen.add(key);
      const payloadsToTry = [
        // A) ContentType slug fields (common DRF pattern)
        {
          source_content_type: CONTENT_TYPE_BY_TYPE.student,
          source_object_id: sourceStudentId,
          target_content_type: CONTENT_TYPE_BY_TYPE[link.targetType],
          target_object_id: link.targetId,
          relation: link.relation,
        },
        // B) Simple type names (backend maps to content types server-side)
        {
          source_type: 'student',
          source_id: sourceStudentId,
          target_type: link.targetType,
          target_id: link.targetId,
          relation: link.relation,
        },
        // C) Original field names we used earlier
        {
          source_model: 'student',
          source_id: sourceStudentId,
          target_model: link.targetType,
          target_id: link.targetId,
          relation: link.relation,
        },
      ];

      let success = false;
      let lastErr = null;
      for (const p of payloadsToTry) {
        try {
          await axios.post(REL_API_URL, p, { headers });
          success = true;
          break;
        } catch (e) {
          lastErr = e;
          // If server says duplicate/validation error, stop trying other shapes for this link
          if (!e?.response) break;
          const status = e.response.status;
          if (status === 409) break;
          if (status >= 500) break;
        }
      }
      if (!success) throw lastErr || new Error('Unknown error creating relationship');
    }
  } catch (err) {
    const server = err?.response?.data;
    console.error('Error posting links:', server || err?.message || err);
    throw err;
  }
}

onMounted(() => {
  fetchClasses();
  fetchLevels();
  fetchLanguages();
  fetchDays();
  fetchTimes();
});

// Bulk enroll selected classes for a student
async function bulkEnrollSelected(studentId) {
  try {
    const classIds = selectedRows.value.map((c) => c.id);
    if (classIds.length === 0) return; // nothing selected

    const payload = {
      student: studentId,
      class_ids: classIds,
      registration_fee: toMoneyString(registrationFeeDue.value || 0),
      course_fee: toMoneyString(classFeeDue.value || 0),
      discount_percentage: Number(discountPercentage.value || 0)
    };

    await axios.post('http://127.0.0.1:8000/api/enrollments/bulk-enroll/', payload, { headers });
  } catch (err) {
    console.error('Error during bulk enrollment:', err?.response?.data || err?.message || err);
    throw err;
  }
}

// Create one-time registration fee for student
async function createOrUpdateRegistrationFee(studentId) {
  try {
    const payload = {
      student: studentId,
      amount_due: registrationFeeExempt.value ? toMoneyString(0) : toMoneyString(registrationFeeDue.value || 0),
      amount_paid: registrationFeeExempt.value ? toMoneyString(0) : toMoneyString(registrationFeePaid.value || 0),
      is_exempted: Boolean(registrationFeeExempt.value)
    };
    await axios.post('http://127.0.0.1:8000/api/registration-fees/', payload, { headers });
  } catch (err) {
    console.error('Error creating/updating registration fee:', err?.response?.data || err?.message || err);
    throw err;
  }
}
</script>


<template>
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Personal Info' : 'Send a Message' }}
      </h2>
      <!-- Row 1 -->
    </div>
    <div class="grid grid-cols-1 pr-3 pl-3 md:grid-cols-3 gap-4 ">
      <input id="First Name" type="text" v-model="firstName"
        class="w-full py-1.5 px-3 border border-b-1 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="First Name" required />
      <input id="Last Name" type="text" v-model="lastName"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Last Name"
        required />

      <input id="date" type="date" v-model="birthDate"
        class="w-full py-1.5 px-3 border text-gray-600 rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        required />
    </div>
    <!-- Row 2 -->
    <div class="grid grid-cols-1 pr-3 pl-3 md:grid-cols-3 gap-4">
      <input id="city" type="text" v-model="city"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="City/Town"
        required />
      <input id="street" type="text" v-model="street"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Street"
        required />
      <select id="gender" v-model="gender"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Gender</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
    <!-- Row 3 -->
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-3 gap-4">
      <input id="phone1" type="text" v-model="phone1"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Phone Number 1" required />
      <input id="phone2" type="text" v-model="phone2"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Phone Number 2" required />
      <input id="parentname" type="text" v-model="parentName"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Parent Name" required />
    </div>
  </div>

  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Education Info' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-3 gap-4">
      <!-- Row 1 -->
      <select id="level" v-model="selectedLevelId"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Level</option>
        <option v-for="lvl in levels" :key="lvl.id" :value="lvl.id">{{ lvl.level_name }}</option>
      </select>
      <input id="institution" type="text" v-model="institution"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Institution" required />
      <input id="average" type="text" v-model="average"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="Average"
        required />
    </div>
  </div>


  <!-- Wrapper -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <!-- Header -->
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Preferences' : 'Send a Message' }}
      </h2>
    </div>

    <!-- Dynamic Preference Blocks -->
    <div v-for="(preference, index) in preferences" :key="index"
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 pb-2">
      <select id="times" v-model="preference.timeId"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Time</option>
        <option v-for="tm in times" :key="tm.id" :value="tm.id">{{ tm.time_name }}</option>
      </select>

      <select id="days" v-model="preference.dayId"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Days</option>
        <option v-for="day in days" :key="day.id" :value="day.id">{{ day.day_name }}</option>
      </select>

      <select id="language" v-model="preference.languageId"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Language</option>
        <option v-for="lng in languages" :key="lng.id" :value="lng.id">{{ lng.language_name }}</option>
      </select>

      <select id="level" v-model="preference.levelId"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Level</option>
        <option v-for="lvl in levels" :key="lvl.id" :value="lvl.id">{{ lvl.level_name }}</option>
      </select>
    </div>
    <div class="flex justify-end px-4 pb-4">
      <button @click="addPreference" :disabled="preferences.length >= maxPreferences"
        class="hover:scale-110 transition disabled:opacity-40 disabled:cursor-not-allowed">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
          <path d="M15 12H9M12 9V15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
    </div>

  </div>
  <!-- Suggested Groups -->
  <div class="pb-2 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="flex max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Suggested Classes' : 'Send a Message' }}
      </h2>
      <div class="flex ml-auto">
        <label for="table-search" class="sr-only">Search</label>
        <div class="relative">
          <div class="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              fill="none" viewBox="0 0 20 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
            </svg>
          </div>
          <input v-model="searchTerm" type="text" id="table-search"
            class="py-[5px] block ps-10 text-sm text-[#22305C] border border-[#939BAD] rounded-lg w-80 bg-[#FFFFFF] focus:ring-[#3D548D] focus:border-[#D1D8E7]"
            placeholder="Search">
        </div>
      </div>
    </div>

    <div class="w-full rounded-lg p-2 overflow-x-auto">
      <!-- Table -->
      <table class="min-w-full border-separate" style="border-spacing: 0 10px;">
        <!-- Scrollable Table Body -->
        <tbody class="overflow-y-auto rounded-lg">
          <tr v-for="cls in filteredClasses" :key="cls.id" :class="{ 'bg-blue-100': isRowSelected(cls) }"
            @click="toggleRowSelection(cls)" class="bg-[#FFFFFF] hover:bg-[#939BAD] text-center text-md text-gray-800">
            <td class="py-3 px-3 border-l border-t border-b border-[#939BAD] rounded-l-lg">
              <input type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" :checked="isRowSelected(cls)"
                @click.stop="toggleRowSelection(cls)" />
            </td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ cls.class_name }}</td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ cls.price }}</td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ cls.days }}</td>
            <td class="py-2 px-4 border-t border-b border-[#939BAD]">{{ cls.time }}</td>
            <td class="py-2 px-4 border-r border-t border-b border-[#939BAD] rounded-r-lg">{{ cls.teacher_name }}</td>
          </tr>
        </tbody>
      </table>
    </div>


  </div>

  <!-- links -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <!-- Header -->
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Links' : 'Send a Message' }}
      </h2>
    </div>

    <!-- Dynamic Rows -->
    <div v-for="(link, index) in links" :key="index" class="grid grid-cols-1 md:grid-cols-2 gap-4 px-4">
      <div class="relative">
        <input
          type="text"
          v-model="link.displayName"
          @input="searchLinkCandidates(index, link.displayName)"
          class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
          placeholder="Search person (student/teacher/staff)"
        />
        <div v-if="linkResults[index] && linkResults[index].length" class="absolute z-10 mt-1 w-full bg-white border rounded shadow max-h-48 overflow-auto">
          <div
            v-for="item in linkResults[index]"
            :key="item.type + '-' + item.id"
            @click="selectLinkCandidate(index, item)"
            class="px-3 py-1 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
          >
            {{ item.name }} — {{ item.type }}
          </div>
        </div>
      </div>
      <select v-model="link.relation" class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled>Select Relation</option>
        <option v-for="opt in RELATION_OPTIONS" :key="opt.value" :value="opt.value">{{ opt.label }}</option>
      </select>
    </div>

    <!-- Add Button -->
    <div class="flex justify-end px-4 pb-4">
      <button @click="addLink" :disabled="links.length >= 3"
        class="hover:scale-110 transition disabled:opacity-40 disabled:cursor-not-allowed">
        <svg class="w-8 h-8" fill="none" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="#1C274C" stroke-width="1.5" />
          <path d="M15 12H9M12 9V15" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round" />
        </svg>
      </button>
    </div>
  </div>


  <!-- Registration Fee -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg overflow-x-auto">
    <!-- Header -->
    <div class="p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Registration Fee' : 'Send a Message' }}
      </h2>
    </div>

    <!-- Form Grid -->
    <div class="grid grid-cols-1 md:grid-cols-6 gap-4 px-4 pb-4">
      <div class="flex items-center md:col-span-1">
        <span class="text-md">Due Amount</span>
      </div>
      <div class="md:col-span-1">
        <input id="reg_due" type="number" v-model="registrationFeeDue" min="0"
          :disabled="registrationFeeExempt"
          class="w-full py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
          placeholder="500.00" required />
      </div>

      <div class="flex items-center md:col-span-1">
        <input class="h-5 w-5 border-2 border-[#3D548D] rounded focus:ring-0" type="checkbox"
          name="registration_exempt" id="registration_exempt" v-model="registrationFeeExempt" />
        <label for="registration_exempt" class="ml-2 text-[#22305C]">Exempt</label>
      </div>

      <div class="md:col-span-1">
        <input id="reg_paid" type="number" v-model="registrationFeePaid" min="0"
          :disabled="registrationFeeExempt"
          class="w-full py-1.5 px-3 text-center border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
          placeholder="Amount Paid" />
      </div>
      <div class="md:col-span-1">
        <input id="reg_remaining" type="text" :value="registrationFeeRemaining" disabled
          class="w-full py-1.5 px-3 text-center border rounded-lg bg-gray-100" placeholder="Remaining" />
      </div>
      <div class="md:col-span-1">
        <input id="reg_reason" type="text" v-model="registrationFeeReason"
          :disabled="!registrationFeeExempt"
          class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
          placeholder="Reason for exemption (optional)" />
      </div>
    </div>
  </div>


  <!-- Discount -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Discount' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-5 pr-3 pl-3 pb-3 md:grid-cols-5 gap-4">
      <!-- Row 1 -->
      <input id="discountpercentage" type="number" v-model="discountPercentage" min="0" max="100"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Enter Percentage" required />
      <select id="discountduration"
        class="w-full py-1.5 px-3 text-gray-600 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" required>
        <option value="" disabled selected>Select Duration</option>
        <option value="week">week</option>
        <option value="month">Month</option>
        <option value="year">Year</option>
      </select>
      <input id="notetoconsider" type="text"
        class="w-full py-1.5 px-3 col-start-3 col-end-6 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Note to Consider" required />
    </div>
  </div>

  <!-- Class Fee -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Class Fee' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-2 pr-3 pl-3 pb-3 md:grid-cols-6 gap-4">
      <!-- Row 1 -->
      <div class="py-1.5 px-3">
        <input
          class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio" name="regular" id="regular" />
        <label class="mt-px inline-block text-[#22305C] pl-2 hover:cursor-pointer" for="regular">
          Regular
        </label>
      </div>
      <div class="py-1.5 px-3">
        <input
          class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio" name="charity" id="charity" />
        <label class="mt-px inline-block text-[#22305C] pl-2 hover:cursor-pointer" for="charity">
          Charity
        </label>
      </div>
      <div class="py-1.5 px-3">
        <input
          class="relative h-5 w-5 appearance-none rounded-full border-2 border-solid border-secondary-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-checkbox before:shadow-transparent before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-[''] checked:border-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] checked:after:rounded-full checked:after:border-primary checked:after:bg-primary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-black/60 focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-black/60 focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:border-primary checked:focus:before:scale-100 checked:focus:before:shadow-checkbox checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] rtl:float-right dark:border-neutral-400 dark:checked:border-primary"
          type="radio" name="exempt2" id="exempt2" />
        <label class="mt-px inline-block text-[#22305C] pl-2 hover:cursor-pointer" for="exempt2">
          Exempt
        </label>
      </div>

      <span class="text-[#22305C] text-md py-1.5 px-2 col-start-1 col-end-2">Due Amount</span>

      <input id="amount2" type="number" v-model="classFeeDue" min="0"
        class="w-full py-1.5 px-2  border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]" placeholder="4500 DZD"
        required />
      <input id="amount paid" type="text"
        class="w-full py-1.5 px-2 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Amount Paid" required />
    </div>
  </div>

  <!-- Important notes -->
  <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
    <div class="max-w-4xl p-2 bg-[#D1D8E7] rounded-t-lg">
      <h2 class="text-lg font-semibold text-gray-800 mb-1">
        {{ activeForm === 'form1' ? 'Important Notes' : 'Send a Message' }}
      </h2>
    </div>
    <div class="grid grid-cols-1 pr-3 pl-3 pb-3 md:grid-cols-1 gap-4">
      <!-- Row 1 -->
      <input id="Important Notes" type="text"
        class="w-full py-1.5 px-3 border rounded-lg focus:ring-[#3D548D] focus:border-[#3D548D]"
        placeholder="Important Notes" required />
    </div>
  </div>

  <div class="flex px-4 py-4 space-x-4 overflow-x-auto bg-[#E8EBF2] rounded-md justify-end">
    <button
      class="px-4 py-2 bg-[#C5CDDF]
           font-medium tracking-wide text-[#3D548D] transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500"
      @click="open = false">
      Back
    </button>
    <button
      @click="saveStudentAndEducation"
      :disabled="isSaving"
      class="px-4 py-2 bg-[#3D548D] font-medium tracking-wide text-white transition-colors duration-200 transform rounded-lg hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed">
      {{ isSaving ? 'Saving...' : 'Save and Print' }}
    </button>

  </div>


</template>
