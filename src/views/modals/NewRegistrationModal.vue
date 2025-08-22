<script setup>
import { ref, watch, defineProps, defineEmits } from 'vue'

// Registration components
import RegularComponent from '../RegistrationHub/RegularComponent.vue'
import OnlineComponent from '../RegistrationHub/OnlineComponent.vue'
import VIPComponent from '../RegistrationHub/VIPComponent.vue'
import TutoringComponent from '../RegistrationHub/TutoringComponent.vue'
import EnrolledRegularComponent from '../RegistrationHub/EnrolledRegularComponent.vue'
import EnrolledVIPComponent from '../RegistrationHub/EnrolledVIPComponent.vue'
import EnrolledTutoringComponent from '../RegistrationHub/EnrolledTutoringComponent.vue'
import EnrolledOnlineComponent from '../RegistrationHub/EnrolledOnlineComponent.vue'

// Props & Emits
const props = defineProps({
  open: Boolean,
  selectedComponent: {
    type: String,
    default: 'regular'
  }
})
const emit = defineEmits(['close'])

// Reactive State
const activeForm = ref('form1')
const currentComponent = ref(props.selectedComponent)

watch(() => props.selectedComponent, (val) => {
  currentComponent.value = val
})

const setActiveForm = (form) => activeForm.value = form
const closeModal = () => emit('close')
// Table State
const rows = ref([
  {
    class: "A1.1 - Fr - Teens",
    price: "4500 DA",
    schedule: "WD",
    time: "Mornings",
    instructor: "Not Assigned",
  },
  {
    class: "A1.1 - Fr - Teens",
    price: "4500 DA",
    schedule: "WD",
    time: "Mornings",
    instructor: "Not Assigned",
  },
  {
    class: "A1.1 - En - Teens",
    price: "4500 DA",
    schedule: "WD",
    time: "Mornings",
    instructor: "Raouf Boukoucha",
  },
  {
    class: "A1.1 - Fr - Teens",
    price: "4500 DA",
    schedule: "Wend",
    time: "Afternoons",
    instructor: "Arouci Mesia",
  },
]);

// Selected Row State
const selectedRow = ref(null);

// Row Selection Function
const selectRow = (index) => {
  selectedRow.value = index;
};

// Open Modal Function
const openModal = () => {
  open.value = true;
  selectedComponent.value = "regular";
};
</script>

<template>
  <div>
    <!-- Modal -->
    <!-- Modal Content -->
    <div
      class="relative w-11/12 h-screen max-w-4xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
      <!-- Modal Header -->
      <div class="flex flex-wrap md:flex-nowrap justify-between items-center gap-4 mb-4 border-b pb-4">
        <!-- Title -->
        <h2 id="modal-title" class="text-lg md:text-xl font-bold text-black w-full md:w-auto">
          Registration Hub
        </h2>

        <!-- Form Switcher -->
        <div class="inline-flex bg-white p-1 rounded-lg w-full sm:w-auto">
          <button @click="setActiveForm('form1')"
            :class="[activeForm === 'form1' ? 'bg-[#3D548D] text-white' : 'text-[#22305C]', 'px-3 py-1 text-sm rounded-lg']">
            New Student
          </button>
          <button @click="setActiveForm('form2')"
            :class="[activeForm === 'form2' ? 'bg-[#3D548D] text-white' : 'text-[#22305C]', 'px-3 py-1 text-sm rounded-lg']">
            Enrolled
          </button>
        </div>

        <!-- Dropdown -->
        <div class="w-full sm:w-auto">
          <select v-model="currentComponent"
            class="w-full sm:w-36 text-sm text-[#22305C] font-medium rounded-lg px-4 py-2 bg-[#F7F8FA] border border-[#22305C] focus:ring-0">
            <option value="regular">Regular</option>
            <option value="vip">VIP</option>
            <option value="tutoring">Tutoring</option>
            <option value="online">Online</option>
          </select>
        </div>

        <!-- Close Button -->
        <button class="text-gray-500 hover:text-gray-700 focus:outline-none w-full sm:w-auto flex justify-end"
          @click="closeModal">
          <svg class="w-8 h-8 mx-auto sm:mx-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z"
              fill="#22305C" />
            <path fill-rule="evenodd" clip-rule="evenodd"
              d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z"
              fill="#22305C" />
          </svg>
        </button>
      </div>


      <div class="max-w-4xl mx-auto bg-[#E8EBF2] border rounded-lg">
        <!-- Form 1 -->

        <form class="space-y-4" v-if="activeForm === 'form1'">
          <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <component :is="getNewComponent(currentComponent)" />
          </div>
        </form>

        <form class="space-y-4" v-else>
          <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
            <component :is="getEnrolledComponent(currentComponent)" />
          </div>
        </form>
      </div>

    </div>
  </div>
</template>
<script>
// Utility to dynamically return components based on selection
function getNewComponent(type) {
  return {
    regular: RegularComponent,
    vip: VIPComponent,
    tutoring: TutoringComponent,
    online: OnlineComponent
  }[type] || RegularComponent
}

function getEnrolledComponent(type) {
  return {
    regular: EnrolledRegularComponent,
    vip: EnrolledVIPComponent,
    tutoring: EnrolledTutoringComponent,
    online: EnrolledOnlineComponent
  }[type] || EnrolledRegularComponent
}
</script>

<style>
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
</style>