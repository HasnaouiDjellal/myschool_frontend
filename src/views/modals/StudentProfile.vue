<script setup>
import { ref } from 'vue';  
const isModalOpen = ref(false);
</script>
<template>
      <!-- Modal Content -->
      <div class="relative w-11/12 h-screen max-w-8xl mt-4 bg-[#E8EBF2] rounded-2xl shadow-xl p-2 pl-6 pr-6 overflow-auto">
        <!-- Modal Header -->
        <div class="flex justify-between items-center mb-2 border-b pb-2 overflow-x-auto">
          <h2 id="modal-title" class="text-xl font-bold text-black">
            Student Profile
          </h2>
          <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 ">Add tp new group</button>
          <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 ">New Payement</button>
          <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800 ">Print payment details</button>


          <!-- Dropdown -->
          <div class="relative">
            <select class="text-sm text-[#22305C] font-medium w-36 rounded-lg px-4 py-1.5 bg-[#F7F8FA] border-[#22305C] focus:ring-0 focus:ring-[#939BAD]"
                    id="dropdown"
                    v-model="selectedComponent">
            <option value="" disabled>Select</option>
              <option value="regular">Regular</option>
              <option value="vip">VIP</option>
              <option value="tutoring">Tutoring</option>
              <option value="online">Online</option>
              <option value="event">Event</option>
            </select>
          </div>

          <!-- Close Button -->
          <button
            class="text-gray-500 hover:text-gray-700 focus:outline-none"
            @click="isModalOpen = false"
          >
          <svg class="w-8 h-8" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.7171 14.9494C16.229 14.4612 15.4375 14.4612 14.9494 14.9494C14.4612 15.4375 14.4612 16.229 14.9494 16.7171L18.2321 19.9999L14.9494 23.2828C14.4612 23.7708 14.4612 24.5623 14.9494 25.0504C15.4375 25.5386 16.229 25.5386 16.7171 25.0504L20 21.7678L23.2826 25.0504C23.7708 25.5386 24.5623 25.5386 25.0505 25.0504C25.5386 24.5623 25.5386 23.7708 25.0505 23.2826L21.7676 19.9999L25.0505 16.7171C25.5386 16.229 25.5386 15.4376 25.0505 14.9494C24.5623 14.4612 23.7708 14.4612 23.2826 14.9494L20 18.2321L16.7171 14.9494Z" fill="#22305C"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 2.08337C10.1049 2.08337 2.08337 10.1049 2.08337 20C2.08337 29.8952 10.1049 37.9167 20 37.9167C29.8952 37.9167 37.9167 29.8952 37.9167 20C37.9167 10.1049 29.8952 2.08337 20 2.08337ZM4.58337 20C4.58337 11.4857 11.4857 4.58337 20 4.58337C28.5144 4.58337 35.4167 11.4857 35.4167 20C35.4167 28.5144 28.5144 35.4167 20 35.4167C11.4857 35.4167 4.58337 28.5144 4.58337 20Z" fill="#22305C"/>
          </svg>
          </button>
        </div>

  <!-- Modal -->
  <div class="max-w-8xl mx-auto bg-[#E8EBF2] rounded-lg">
    <RegularStudentProfile v-if="selectedComponent === 'regular'" />
    <VIPStudentProfile v-if="selectedComponent === 'vip'" />
    <EventsStudentProfile v-if="selectedComponent === 'event'" />
    <TutoringStudentProfile v-if="selectedComponent === 'tutoring'" />
    <OnlineStudentProfile v-if="selectedComponent === 'online'" />
  </div>

      </div>
</template>
<script>
  import RegularStudentProfile from "../profilecomponents/RegularStudentProfile.vue";
  import VIPStudentProfile from "../profilecomponents/VIPStudentProfile.vue";
  import TutoringStudentProfile from '../profilecomponents/TutoringStudentProfile.vue';
  import EventsStudentProfile from '../profilecomponents/EventsStudentProfile.vue';
  import OnlineStudentProfile from '../profilecomponents/OnlineStudentProfile.vue';
  import PeopleStudentCallLog from '../modals/PeopleStudentCallLog.vue';
  export default {
    components: {
    RegularStudentProfile,
    PeopleStudentCallLog,
    

  },
  data() {
  return {
    activeTab: "regular",
    tableData: [
      { sid: "SID", student_name: "مسعي أحمد محمد لعروسي", balance: -4500 , parent_number: "0666666666", phone_number :"0666666666", dateofbirth: "26/12/2024",address :"حي 19 مارس 1962 الوادي"},
      { sid: "SID", student_name: "مسعي أحمد محمد لعروسي", balance: -4500 , parent_number: "0666666666", phone_number :"0666666666", dateofbirth: "26/12/2024",address :"حي 19 مارس 1962 الوادي"},
      { sid: "SID", student_name: "مسعي أحمد محمد لعروسي", balance: -4500 , parent_number: "0666666666", phone_number :"0666666666", dateofbirth: "26/12/2024",address :"حي 19 مارس 1962 الوادي"},
      { sid: "SID", student_name: "مسعي أحمد محمد لعروسي", balance: -4500 , parent_number: "0666666666", phone_number :"0666666666", dateofbirth: "26/12/2024",address :"حي 19 مارس 1962 الوادي"},
      { sid: "SID", student_name: "مسعي أحمد محمد لعروسي", balance: -4500 , parent_number: "0666666666", phone_number :"0666666666", dateofbirth: "26/12/2024",address :"حي 19 مارس 1962 الوادي"},
      { sid: "SID", student_name: "مسعي أحمد محمد لعروسي", balance: -4500 , parent_number: "0666666666", phone_number :"0666666666", dateofbirth: "26/12/2024",address :"حي 19 مارس 1962 الوادي"},
      ],
      tableData1: [
        {
          id: 2354,
          level: "A1.1 - Fr - Teens",
          teacher: "Teacher",
          note: "Note",
          date: "DD/MM/YYYY",
          feedback: "feedback",
        },
        // Add more rows here as needed
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2354, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2356, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
        { id: 2356, level: "A1.1 - Fr - Teens", teacher: "Teacher", note: "Note", date: "DD/MM/YYYY", feedback: "feedback" },
      ],
      tableData2: [
        {
          id: 2354,
          group: "A1.1 - Fr - Teens",
          balance: 2000,
          classtype: "Not Paid",
          date: "DD/MM/YYYY",
          comment: "comment",
        },
        // Add more rows here as needed
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Paid", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Paid", date: "DD/MM/YYYY", comment: "comment" },
        { id: 2354, group: "A1.1 - Fr - Teens", balance: 3000, classtype: "Exempt", date: "DD/MM/YYYY", comment: "comment" },
      ],
      links: [
        { name: "John Doe", relation: "Father" },
        { name: "Jane Doe", relation: "Mother" },
        { name: "Sam Smith", relation: "Brother" },
        { name: "Sam Smith", relation: "Brother" },
        { name: "Sam Smith", relation: "Brother" },
        // Add more rows here
      ],
    rowsPerPage: 10,
    currentPage: 1,
    paginatedData: [],
    selectedComponent: "",
  };
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