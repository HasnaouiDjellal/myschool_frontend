<script setup>
import { ref } from 'vue';

// Modal and Form State
const open = ref(false);
const open2 = ref(false);
const activeForm = ref('form1');
const selectedComponent = ref("");

// Set Active Form Function
const setActiveForm = (form) => {
  activeForm.value = form;
};

// Dropdown State
const dropdownOpen = ref(false);

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
    <!-- Heading and Open Modal Button -->
    <h3 class="text-3xl font-medium text-gray-700">Modal </h3>
    <button
      class="px-6 py-3 mt-3 font-medium tracking-wide text-white bg-[#3D548D] rounded-md hover:bg-indigo-500 focus:outline-none"
      @click="openModal"
    >
      Open Modal
    </button>

    <!-- Modal -->
    <div
      :class="['modal', { 'opacity-0 pointer-events-none': !open }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
      role="dialog"
      aria-labelledby="modal-title"
    >
      <!-- Overlay -->
      <div
        class="absolute w-full h-full filter backdrop-blur-xl opacity-70 animate-blob"
        @click="open = false"
        aria-hidden="true"
      ></div>

      <!-- Modal Content -->
      <div class="relative w-11/12 h-screen max-w-4xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
          <h2 id="modal-title" class="text-xl font-bold text-black">
            Registration Hub
          </h2>

          <!-- Form Switcher -->
          <div class="inline-flex bg-[#FFFFFF] p-1 rounded-lg">
            <button
              @click="setActiveForm('form1')"
              :class="['px-4 py-1.5 w-32 text-sm font-medium rounded-lg', activeForm === 'form1' ? 'bg-[#3D548D] text-white' : 'bg-[#FFFFFF] text-[#22305C]']"
            >
              New Student
            </button>
            <button
              @click="setActiveForm('form2')"
              :class="['px-4 py-1.5 w-32 text-sm font-medium rounded-lg', activeForm === 'form2' ? 'bg-[#3D548D] text-white' : 'bg-[#FFFFFF] text-[#22305C]']"
            >
              Enrolled
            </button>
          </div>

          <!-- Dropdown -->
          <div class="relative">
            <select class="text-sm text-[#22305C] font-medium w-36 rounded-lg px-4 py-1.5 bg-[#F7F8FA] border-[#22305C] focus:ring-0 focus:ring-[#939BAD]"
                    id="dropdown"
                    v-model="selectedComponent">
            <option value="">Select</option>
              <option value="regular">Regular</option>
              <option value="vip">VIP</option>
              <option value="tutoring">Tutoring</option>
              <option value="online">Online</option>
            </select>
          </div>

          <!-- Close Button -->
          <button
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
            @click="open = false"
          >
          <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z" fill="#22305C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z" fill="#22305C"/>
          </svg>
          </button>
        </div>

  <div class="max-w-4xl mx-auto bg-[#E8EBF2] border rounded-lg">
  <!-- Form 1 -->
 
  <form v-if="activeForm === 'form1'" class="space-y-4">
    <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
          <RegularComponent v-if="selectedComponent === 'regular'" />
          <TutoringComponent v-if="selectedComponent === 'tutoring'" />
          <OnlineComponent v-if="selectedComponent === 'online'" />
          <VIPComponent v-if="selectedComponent === 'vip'" />
    </div>



  </form>

  <!-- Form 2 -->
  <form v-else class="space-y-4">
    <div class="space-y-4 shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)] text-[#22305C] rounded-lg">
          <EnrolledRegularComponent v-if="selectedComponent === 'regular'" />
          <EnrolledVIPComponent v-if="selectedComponent === 'vip'" />
          <EnrolledTutoringComponent v-if="selectedComponent === 'tutoring'" />
    </div>

  </form>
</div>

      </div>
    </div>
  </div>
</template>
<script>
import RegularComponent from "./RegistrationHub/RegularComponent.vue";
import OnlineComponent from "./RegistrationHub/OnlineComponent.vue";
import VIPComponent from "./RegistrationHub/VIPComponent.vue";
import TutoringComponent from "./RegistrationHub/TutoringComponent.vue";
import EnrolledRegularComponent from "./RegistrationHub/EnrolledRegularComponent.vue";
import EnrolledVIPComponent from "./RegistrationHub/EnrolledVIPComponent.vue";
import EnrolledTutoringComponent from "./RegistrationHub/EnrolledTutoringComponent.vue";

export default {
  components: {
    RegularComponent,
    VIPComponent,
    TutoringComponent,
    OnlineComponent,
    EnrolledRegularComponent,
    EnrolledVIPComponent,
    EnrolledTutoringComponent,
  },
  data() {
    return {
      selectedComponent: "", // Tracks dropdown selection
    };
  },
};
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
  max-height: 400px; /* Limit the vertical height */
  overflow-y: auto; /* Enable vertical scrolling */
  overflow-x: auto; /* Enable horizontal scrolling */
  width: 100%; /* Ensure the table stays within the container's width */
}
</style>