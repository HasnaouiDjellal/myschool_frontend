<script setup>
import { ref } from 'vue';
const openudategroupe = ref(false);
</script>
<template>
    <div>
        <h2 id="modal-title" class="text-xl font-bold text-white p-4">Groups Hub</h2>
        <div class="w-full h-[100vh] bg-[#F0F2F7] rounded-lg">
            <div>
                <!-- Tabs -->
                <div class="p-2 bg-gray-100 rounded-lg">
                    <div class="relative flex justify-between overflow-x-auto rounded whitespace-nowrap">
                        <table class="min-w-full table-auto">
                            <tbody class="text-[#22305C] font-bold text-md">
                                <tr v-for="(row, index) in paginatedData2" :key="index"
                                    :class="getRowClass(row.students)" class="relative bg-white">
                                    <!-- Table Data -->
                                    <td class="px-4 py-2 text-center text-sm">{{ row.gid }}</td>
                                    <td class="px-4 py-2 text-center text-sm">{{ row.class }}</td>
                                    <td class="px-4 py-2 text-center text-sm">{{ row.teacher }}</td>
                                    <td class="px-4 py-2 text-center text-sm">{{ row.sn }}</td>
                                    <td class="px-4 py-2 text-center text-sm">{{ row.day }}</td>
                                    <td class="px-4 py-2 text-center text-sm">{{ row.time }}</td>
                                    <td class="px-4 py-2 text-center text-sm">{{ row.sessionno }}</td>
                                    <td class="px-4 py-2 text-center text-sm">{{ row.progress }}</td>
                                    <td class="px-4 py-2 text-gray-500 text-center text-sm">{{ row.room }}</td>
                                    <td class="px-4 py-2 text-center text-sm">
                                        <input id="status" type="text" :value="row.status" :class="[
                                            'py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D]',
                                            row.status === 'Stopped' ? 'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]' : '',
                                            row.status === 'Reactive' ? 'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]' : '',
                                            row.status === 'Active' ? 'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]' : '',
                                            row.status === 'Freeze' ? 'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]' : ''
                                        ]" disabled />
                                    </td>
                                    <td class="px-4 py-2 text-center text-sm relative">
                                        <button class="p-1" @click="openudategroupe = true">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path fill-rule="evenodd" clip-rule="evenodd"
                                                    d="M11.9426 1.25H13.5C13.9142 1.25 14.25 1.58579 14.25 2C14.25 2.41421 13.9142 2.75 13.5 2.75H12C9.62178 2.75 7.91356 2.75159 6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62178 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12V10.5C21.25 10.0858 21.5858 9.75 22 9.75C22.4142 9.75 22.75 10.0858 22.75 10.5V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM16.7705 2.27592C18.1384 0.908029 20.3562 0.908029 21.7241 2.27592C23.092 3.6438 23.092 5.86158 21.7241 7.22947L15.076 13.8776C14.7047 14.2489 14.4721 14.4815 14.2126 14.684C13.9069 14.9224 13.5761 15.1268 13.2261 15.2936C12.929 15.4352 12.6169 15.5392 12.1188 15.7052L9.21426 16.6734C8.67801 16.8521 8.0868 16.7126 7.68711 16.3129C7.28742 15.9132 7.14785 15.322 7.3266 14.7857L8.29477 11.8812C8.46079 11.3831 8.56479 11.071 8.7064 10.7739C8.87319 10.4239 9.07761 10.0931 9.31605 9.78742C9.51849 9.52787 9.7511 9.29529 10.1224 8.924L16.7705 2.27592ZM20.6634 3.33658C19.8813 2.55448 18.6133 2.55448 17.8312 3.33658L17.4546 3.7132C17.4773 3.80906 17.509 3.92327 17.5532 4.05066C17.6965 4.46372 17.9677 5.00771 18.48 5.51999C18.9923 6.03227 19.5363 6.30346 19.9493 6.44677C20.0767 6.49097 20.1909 6.52273 20.2868 6.54543L20.6634 6.16881C21.4455 5.38671 21.4455 4.11867 20.6634 3.33658ZM19.1051 7.72709C18.5892 7.50519 17.9882 7.14946 17.4193 6.58065C16.8505 6.01185 16.4948 5.41082 16.2729 4.89486L11.2175 9.95026C10.801 10.3668 10.6376 10.532 10.4988 10.7099C10.3274 10.9297 10.1804 11.1676 10.0605 11.4192C9.96337 11.623 9.88868 11.8429 9.7024 12.4017L9.27051 13.6974L10.3026 14.7295L11.5983 14.2976C12.1571 14.1113 12.377 14.0366 12.5808 13.9395C12.8324 13.8196 13.0703 13.6726 13.2901 13.5012C13.468 13.3624 13.6332 13.199 14.0497 12.7825L19.1051 7.72709Z"
                                                    fill="#1C274C" />
                                            </svg>
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div class="p-4 bg-gray-100 rounded-lg">
                    <div class="relative flex justify-between py-2 overflow-x-auto rounded whitespace-nowrap">
                        <div class="inline-flex max-w-md overflow-hidden rounded min-w-max">
                            <input type="text" placeholder="Search"
                                class="border rounded-lg text-sm focus:ring-2 focus:ring-blue-500 focus:outline-none text-black"></input>
                        </div>
                        <div class="inline-flex ml-3 overflow-hidden rounded-lg min-w-max">
                            <button class="bg-[#3D548D] text-white text-sm  px-4 py-2 rounded-lg hover:bg-blue-800"
                                @click="opennewregistration = true">
                                New Student</button>
                            <button class="bg-[#3D548D] text-white text-sm ml-4 px-4 py-2 rounded-lg hover:bg-blue-800"
                                @click="opennewclass = true">Attendance</button>
                        </div>
                        <div class="inline-flex max-w-md ml-3 text-[#22305C] overflow-hidden rounded-lg min-w-max">
                            <select
                                class="text-sm w-36 rounded-lg ml-4 px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
                                <option>All Ages</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                            <select
                                class="text-sm w-36 rounded-lg ml-4 px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
                                <option>All Teacherss</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                            <select
                                class="text-sm w-36 rounded-lg ml-4 px-4 py-2 bg-[#A0AEC9] focus:ring-0 focus:ring-[#3D548D]">
                                <option>All Status</option>
                                <option>Beginner</option>
                                <option>Intermediate</option>
                                <option>Advanced</option>
                            </select>
                            <button>
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 ml-3 text-gray-600" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <g clip-path="url(#clip0_429_11071)">
                                        <path
                                            d="M12 2.99982C16.9706 2.99982 21 7.02925 21 11.9998C21 16.9704 16.9706 20.9998 12 20.9998C7.02944 20.9998 3 16.9704 3 11.9998C3 9.17255 4.30367 6.64977 6.34267 4.99982"
                                            stroke="#292929" stroke-width="2.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path d="M3 4.49982H7V8.49982" stroke="#292929" stroke-width="2.5"
                                            stroke-linecap="round" stroke-linejoin="round" />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_429_11071">
                                            <rect width="24" height="24" fill="white" />
                                        </clipPath>
                                    </defs>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- Table -->
                    <div class="pt-4 ">
                        <div class="overflow-x-auto rounded-lg shadow-[0px_0px_3px_1px_rgba(0,0,0,0.1)]">
                            <table class="min-w-full table-auto">
                                <thead>
                                    <tr class="bg-[#F0F2F7] text-center">
                                        <th class="px-2 py-2 text-[#22305C] font-medium">n</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Student Name</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Date of Birth</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Phone Number</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Course Fee</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Discount</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Balance</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Status</th>
                                        <th class="px-2 py-2 text-[#22305C] font-medium">Action</th>
                                    </tr>
                                </thead>
                                <tbody class="text-[#22305C]">
                                    <tr v-for="(row, index) in paginatedData" :key="index"
                                        :class="getRowClass(row.students)" class="relative">
                                        <td class="px-4 py-2 text-center text-sm">{{ row.n }}</td>
                                        <td class="px-4 py-2 text-center text-sm">{{ row.studentname }}</td>
                                        <td class="px-4 py-2 text-center text-sm">{{ row.dateofbirth }}</td>
                                        <td class="px-4 py-2 text-center text-sm">{{ row.phonenumber }}</td>
                                        <td class="px-4 py-2 text-center text-sm">
                                            <input id="coursefee" type="text" :value="row.coursefee"
                                                :class="[
                                                    'py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D]',
                                                    row.coursefee === 'Not Paid' ? 'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]' : '',
                                                    row.coursefee === 'Exempt' ? 'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]' : '',
                                                    row.coursefee === 'Paid' ? 'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]' : '']" disabled />
                                        </td>
                                        <td class="px-4 py-2 text-center text-sm">{{ row.discount }} %</td>
                                        <td class="px-4 py-2 text-center text-sm">
                                            <input id="status" type="text" :value="row.balance" :class="[
                                                'py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D]',
                                                row.balance
                                            ]" disabled />
                                        </td>
                                        <td class="px-4 py-2 text-center text-sm">
                                            <input id="status" type="text" :value="row.status" :class="[
                                                'py-1 px-3 w-32 text-center rounded-lg focus:ring-[#3D548D]',
                                                row.status === 'Stopped' ? 'bg-[#FCE4EC] text-[#D32F2F] border-[#FCE4EC]' : '',
                                                row.status === 'Reactive' ? 'bg-[#FFEEE0] text-[#FF6F00] border-[#FFEEE0]' : '',
                                                row.status === 'Active' ? 'bg-[#E8F5E9] text-[#388E3C] border-[#E8F5E9]' : '',
                                                row.status === 'Freeze' ? 'bg-[#E4FCFF] text-[#3279B2] border-[#E4FCFF]' : ''
                                            ]" disabled />
                                        </td>
                                        <td class="px-4 py-2 text-center text-sm relative">
                                            <button class="p-1"
                                                @click="dropdownVisibleIndex = dropdownVisibleIndex === index ? null : index">
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"> -->
                                                    <path
                                                        d="M9 12C9 12.5523 8.55228 13 8 13C7.44772 13 7 12.5523 7 12C7 11.4477 7.44772 11 8 11C8.55228 11 9 11.4477 9 12Z"
                                                        fill="#1C274C" />
                                                    <path
                                                        d="M13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11C12.5523 11 13 11.4477 13 12Z"
                                                        fill="#1C274C" />
                                                    <path
                                                        d="M16 13C16.5523 13 17 12.5523 17 12C17 11.4477 16.5523 11 16 11C15.4477 11 15 11.4477 15 12C15 12.5523 15.4477 13 16 13Z"
                                                        fill="#1C274C" />
                                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                                        d="M12.0574 1.25H11.9426C9.63424 1.24999 7.82519 1.24998 6.41371 1.43975C4.96897 1.63399 3.82895 2.03933 2.93414 2.93414C2.03933 3.82895 1.63399 4.96897 1.43975 6.41371C1.24998 7.82519 1.24999 9.63422 1.25 11.9426V12.0574C1.24999 14.3658 1.24998 16.1748 1.43975 17.5863C1.63399 19.031 2.03933 20.1711 2.93414 21.0659C3.82895 21.9607 4.96897 22.366 6.41371 22.5603C7.82519 22.75 9.63423 22.75 11.9426 22.75H12.0574C14.3658 22.75 16.1748 22.75 17.5863 22.5603C19.031 22.366 20.1711 21.9607 21.0659 21.0659C21.9607 20.1711 22.366 19.031 22.5603 17.5863C22.75 16.1748 22.75 14.3658 22.75 12.0574V11.9426C22.75 9.63423 22.75 7.82519 22.5603 6.41371C22.366 4.96897 21.9607 3.82895 21.0659 2.93414C20.1711 2.03933 19.031 1.63399 17.5863 1.43975C16.1748 1.24998 14.3658 1.24999 12.0574 1.25ZM3.9948 3.9948C4.56445 3.42514 5.33517 3.09825 6.61358 2.92637C7.91356 2.75159 9.62177 2.75 12 2.75C14.3782 2.75 16.0864 2.75159 17.3864 2.92637C18.6648 3.09825 19.4355 3.42514 20.0052 3.9948C20.5749 4.56445 20.9018 5.33517 21.0736 6.61358C21.2484 7.91356 21.25 9.62177 21.25 12C21.25 14.3782 21.2484 16.0864 21.0736 17.3864C20.9018 18.6648 20.5749 19.4355 20.0052 20.0052C19.4355 20.5749 18.6648 20.9018 17.3864 21.0736C16.0864 21.2484 14.3782 21.25 12 21.25C9.62177 21.25 7.91356 21.2484 6.61358 21.0736C5.33517 20.9018 4.56445 20.5749 3.9948 20.0052C3.42514 19.4355 3.09825 18.6648 2.92637 17.3864C2.75159 16.0864 2.75 14.3782 2.75 12C2.75 9.62177 2.75159 7.91356 2.92637 6.61358C3.09825 5.33517 3.42514 4.56445 3.9948 3.9948Z"
                                                        fill="#1C274C" />
                                                </svg>
                                            </button>
                                            <div v-if="dropdownVisibleIndex === index"
                                                class="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
                                                <ul class="text-sm text-left">
                                                    <li
                                                        class="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M12.0002 1.25C9.37689 1.25 7.25024 3.37665 7.25024 6C7.25024 8.62335 9.37689 10.75 12.0002 10.75C14.6236 10.75 16.7502 8.62335 16.7502 6C16.7502 3.37665 14.6236 1.25 12.0002 1.25ZM8.75024 6C8.75024 4.20507 10.2053 2.75 12.0002 2.75C13.7952 2.75 15.2502 4.20507 15.2502 6C15.2502 7.79493 13.7952 9.25 12.0002 9.25C10.2053 9.25 8.75024 7.79493 8.75024 6Z"
                                                                fill="#22305C" />
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M12.0001 12.25C9.68658 12.25 7.55506 12.7759 5.97558 13.6643C4.41962 14.5396 3.25013 15.8661 3.25013 17.5L3.25007 17.602C3.24894 18.7638 3.24752 20.222 4.52655 21.2635C5.15602 21.7761 6.03661 22.1406 7.22634 22.3815C8.4194 22.6229 9.97436 22.75 12.0001 22.75C14.0259 22.75 15.5809 22.6229 16.7739 22.3815C17.9637 22.1406 18.8443 21.7761 19.4737 21.2635C20.7527 20.222 20.7513 18.7638 20.7502 17.602L20.7501 17.5C20.7501 15.8661 19.5807 14.5396 18.0247 13.6643C16.4452 12.7759 14.3137 12.25 12.0001 12.25ZM4.75013 17.5C4.75013 16.6487 5.37151 15.7251 6.71098 14.9717C8.02693 14.2315 9.89541 13.75 12.0001 13.75C14.1049 13.75 15.9733 14.2315 17.2893 14.9717C18.6288 15.7251 19.2501 16.6487 19.2501 17.5C19.2501 18.8078 19.2098 19.544 18.5265 20.1004C18.156 20.4022 17.5366 20.6967 16.4763 20.9113C15.4194 21.1252 13.9744 21.25 12.0001 21.25C10.0259 21.25 8.58087 21.1252 7.52393 20.9113C6.46366 20.6967 5.84425 20.4022 5.47372 20.1004C4.79045 19.544 4.75013 18.8078 4.75013 17.5Z"
                                                                fill="#22305C" />
                                                        </svg>
                                                        Profile
                                                    </li>
                                                    <li
                                                        class="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M7.94513 4.25H13.0549C14.4225 4.24998 15.5248 4.24996 16.3918 4.36652C17.2919 4.48754 18.0497 4.74643 18.6517 5.34835C19.2061 5.90277 19.4695 6.58951 19.6022 7.39783C20.4106 7.53047 21.0974 7.79391 21.6519 8.3484C22.2538 8.95032 22.5127 9.70819 22.6337 10.6083C22.7503 11.4753 22.7503 12.5776 22.7503 13.9452V14.0549C22.7503 15.4225 22.7503 16.5248 22.6337 17.3918C22.5127 18.2919 22.2538 19.0498 21.6519 19.6517C21.05 20.2536 20.2921 20.5125 19.392 20.6335C18.525 20.7501 17.4227 20.7501 16.0551 20.7501H10.9454C9.57779 20.7501 8.47547 20.7501 7.6085 20.6335C6.7084 20.5125 5.95052 20.2536 5.3486 19.6517C4.79417 19.0973 4.53072 18.4105 4.39807 17.6022C3.58964 17.4695 2.90283 17.2061 2.34835 16.6517C1.74643 16.0497 1.48754 15.2919 1.36652 14.3918C1.24996 13.5248 1.24998 12.4225 1.25 11.0549V10.9451C1.24998 9.57754 1.24996 8.47522 1.36652 7.60825C1.48754 6.70814 1.74643 5.95027 2.34835 5.34835C2.95027 4.74643 3.70814 4.48754 4.60825 4.36652C5.47522 4.24996 6.57754 4.24998 7.94513 4.25ZM5.95571 17.7316C6.0606 18.1345 6.20999 18.3918 6.40926 18.591C6.68603 18.8678 7.0746 19.0483 7.80837 19.1469C8.56373 19.2485 9.56484 19.2501 11.0003 19.2501H16.0003C17.4357 19.2501 18.4368 19.2485 19.1921 19.1469C19.9259 19.0483 20.3145 18.8678 20.5912 18.591C20.868 18.3143 21.0485 17.9257 21.1471 17.1919C21.2487 16.4366 21.2503 15.4355 21.2503 14.0001C21.2503 12.5646 21.2487 11.5635 21.1471 10.8082C21.0485 10.0744 20.868 9.68583 20.5912 9.40906C20.3919 9.20976 20.1346 9.06034 19.7316 8.95545C19.75 9.54434 19.75 10.206 19.75 10.9451V11.0549C19.75 12.4225 19.75 13.5248 19.6335 14.3918C19.5125 15.2919 19.2536 16.0497 18.6517 16.6517C18.0497 17.2536 17.2919 17.5125 16.3918 17.6335C15.5248 17.75 14.4225 17.75 13.0549 17.75H7.94513C7.2061 17.75 6.54453 17.75 5.95571 17.7316ZM4.80812 5.85315C4.07435 5.9518 3.68577 6.13225 3.40901 6.40901C3.13225 6.68577 2.9518 7.07435 2.85315 7.80812C2.75159 8.56347 2.75 9.56459 2.75 11C2.75 12.4354 2.75159 13.4365 2.85315 14.1919C2.9518 14.9257 3.13225 15.3142 3.40901 15.591C3.68577 15.8678 4.07435 16.0482 4.80812 16.1469C5.56347 16.2484 6.56458 16.25 8 16.25H13C14.4354 16.25 15.4365 16.2484 16.1919 16.1469C16.9257 16.0482 17.3142 15.8678 17.591 15.591C17.8678 15.3142 18.0482 14.9257 18.1469 14.1919C18.2484 13.4365 18.25 12.4354 18.25 11C18.25 9.56459 18.2484 8.56347 18.1469 7.80812C18.0482 7.07435 17.8678 6.68577 17.591 6.40901C17.3142 6.13225 16.9257 5.9518 16.1919 5.85315C15.4365 5.75159 14.4354 5.75 13 5.75H8C6.56458 5.75 5.56347 5.75159 4.80812 5.85315ZM10.5 9.25C9.5335 9.25 8.75 10.0335 8.75 11C8.75 11.9665 9.5335 12.75 10.5 12.75C11.4665 12.75 12.25 11.9665 12.25 11C12.25 10.0335 11.4665 9.25 10.5 9.25ZM7.25 11C7.25 9.20508 8.70508 7.75 10.5 7.75C12.2949 7.75 13.75 9.20508 13.75 11C13.75 12.7949 12.2949 14.25 10.5 14.25C8.70508 14.25 7.25 12.7949 7.25 11ZM5 8.25C5.41421 8.25 5.75 8.58579 5.75 9V13C5.75 13.4142 5.41421 13.75 5 13.75C4.58579 13.75 4.25 13.4142 4.25 13V9C4.25 8.58579 4.58579 8.25 5 8.25ZM16 8.25C16.4142 8.25 16.75 8.58579 16.75 9V13C16.75 13.4142 16.4142 13.75 16 13.75C15.5858 13.75 15.25 13.4142 15.25 13V9C15.25 8.58579 15.5858 8.25 16 8.25Z"
                                                                fill="#22305C" />
                                                        </svg>
                                                        Payement
                                                    </li>
                                                    <li
                                                        class="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M11.9426 1.25H12.0574C14.3658 1.24999 16.1748 1.24998 17.5863 1.43975C19.031 1.63399 20.1711 2.03933 21.0659 2.93414C21.9607 3.82895 22.366 4.96897 22.5603 6.41371C22.75 7.82519 22.75 9.63423 22.75 11.9426V12.0574C22.75 14.3658 22.75 16.1748 22.5603 17.5863C22.366 19.031 21.9607 20.1711 21.0659 21.0659C20.1711 21.9607 19.031 22.366 17.5863 22.5603C16.1748 22.75 14.3658 22.75 12.0574 22.75H11.9426C9.63423 22.75 7.82519 22.75 6.41371 22.5603C4.96897 22.366 3.82895 21.9607 2.93414 21.0659C2.03933 20.1711 1.63399 19.031 1.43975 17.5863C1.24998 16.1748 1.24999 14.3658 1.25 12.0574V11.9426C1.24999 9.63423 1.24998 7.82519 1.43975 6.41371C1.63399 4.96897 2.03933 3.82895 2.93414 2.93414C3.82895 2.03933 4.96897 1.63399 6.41371 1.43975C7.82519 1.24998 9.63423 1.24999 11.9426 1.25ZM6.61358 2.92637C5.33517 3.09825 4.56445 3.42514 3.9948 3.9948C3.42514 4.56445 3.09825 5.33517 2.92637 6.61358C2.75159 7.91356 2.75 9.62178 2.75 12C2.75 14.3782 2.75159 16.0864 2.92637 17.3864C3.09825 18.6648 3.42514 19.4355 3.9948 20.0052C4.56445 20.5749 5.33517 20.9018 6.61358 21.0736C7.91356 21.2484 9.62177 21.25 12 21.25C14.3782 21.25 16.0864 21.2484 17.3864 21.0736C18.6648 20.9018 19.4355 20.5749 20.0052 20.0052C20.5749 19.4355 20.9018 18.6648 21.0736 17.3864C21.2484 16.0864 21.25 14.3782 21.25 12C21.25 9.62178 21.2484 7.91356 21.0736 6.61358C20.9018 5.33517 20.5749 4.56445 20.0052 3.9948C19.4355 3.42514 18.6648 3.09825 17.3864 2.92637C16.0864 2.75159 14.3782 2.75 12 2.75C9.62177 2.75 7.91356 2.75159 6.61358 2.92637ZM11.0026 6.50685C11.2749 6.81893 11.2427 7.29271 10.9307 7.56507L9 9.25H17C17.4142 9.25 17.75 9.58579 17.75 10C17.75 10.4142 17.4142 10.75 17 10.75H7C6.68737 10.75 6.40753 10.5561 6.29775 10.2633C6.18798 9.97061 6.2713 9.6405 6.50685 9.43493L9.94435 6.43493C10.2564 6.16257 10.7302 6.19477 11.0026 6.50685ZM15 14.75H7C6.58579 14.75 6.25 14.4142 6.25 14C6.25 13.5858 6.58579 13.25 7 13.25H17C17.3126 13.25 17.5925 13.4439 17.7022 13.7367C17.812 14.0294 17.7287 14.3595 17.4932 14.5651L14.0557 17.5651C13.7436 17.8374 13.2698 17.8052 12.9974 17.4932C12.7251 17.1811 12.7573 16.7073 13.0693 16.4349L15 14.75Z"
                                                                fill="#22305C" />
                                                        </svg>
                                                        Change Grp
                                                    </li>
                                                    <li
                                                        class="px-4 py-2 hover:bg-gray-100 flex items-center gap-2 cursor-pointer">
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                                d="M10.3094 2.25002H13.6908C13.9072 2.24988 14.0957 2.24976 14.2737 2.27819C14.977 2.39049 15.5856 2.82915 15.9146 3.46084C15.9978 3.62073 16.0573 3.79961 16.1256 4.00494L16.2373 4.33984C16.2562 4.39653 16.2616 4.41258 16.2661 4.42522C16.4413 4.90933 16.8953 5.23659 17.4099 5.24964C17.4235 5.24998 17.44 5.25004 17.5001 5.25004H20.5001C20.9143 5.25004 21.2501 5.58582 21.2501 6.00004C21.2501 6.41425 20.9143 6.75004 20.5001 6.75004H3.5C3.08579 6.75004 2.75 6.41425 2.75 6.00004C2.75 5.58582 3.08579 5.25004 3.5 5.25004H6.50008C6.56013 5.25004 6.5767 5.24998 6.59023 5.24964C7.10488 5.23659 7.55891 4.90936 7.73402 4.42524C7.73863 4.41251 7.74392 4.39681 7.76291 4.33984L7.87452 4.00496C7.94281 3.79964 8.00233 3.62073 8.08559 3.46084C8.41453 2.82915 9.02313 2.39049 9.72643 2.27819C9.90445 2.24976 10.093 2.24988 10.3094 2.25002ZM9.00815 5.25004C9.05966 5.14902 9.10531 5.04404 9.14458 4.93548C9.1565 4.90251 9.1682 4.86742 9.18322 4.82234L9.28302 4.52292C9.37419 4.24941 9.39519 4.19363 9.41601 4.15364C9.52566 3.94307 9.72853 3.79686 9.96296 3.75942C10.0075 3.75231 10.067 3.75004 10.3553 3.75004H13.6448C13.9331 3.75004 13.9927 3.75231 14.0372 3.75942C14.2716 3.79686 14.4745 3.94307 14.5842 4.15364C14.605 4.19363 14.626 4.2494 14.7171 4.52292L14.8169 4.82216L14.8556 4.9355C14.8949 5.04405 14.9405 5.14902 14.992 5.25004H9.00815Z"
                                                                fill="#F98182" />
                                                            <path
                                                                d="M5.91512 8.45014C5.88757 8.03684 5.53019 7.72414 5.11689 7.75169C4.7036 7.77924 4.39089 8.13662 4.41844 8.54992L4.88189 15.5017C4.96739 16.7844 5.03645 17.8205 5.19842 18.6336C5.36682 19.4789 5.65324 20.185 6.24483 20.7385C6.83643 21.2919 7.55998 21.5308 8.41463 21.6425C9.23665 21.7501 10.275 21.7501 11.5606 21.75H12.4395C13.7251 21.7501 14.7635 21.7501 15.5856 21.6425C16.4402 21.5308 17.1638 21.2919 17.7554 20.7385C18.347 20.185 18.6334 19.4789 18.8018 18.6336C18.9638 17.8206 19.0328 16.7844 19.1183 15.5017L19.5818 8.54992C19.6093 8.13662 19.2966 7.77924 18.8833 7.75169C18.47 7.72414 18.1126 8.03684 18.0851 8.45014L17.6251 15.3493C17.5353 16.6971 17.4713 17.6349 17.3307 18.3406C17.1943 19.025 17.004 19.3873 16.7306 19.6431C16.4572 19.8989 16.083 20.0647 15.391 20.1552C14.6776 20.2485 13.7376 20.25 12.3868 20.25H11.6134C10.2626 20.25 9.32258 20.2485 8.60918 20.1552C7.91718 20.0647 7.54302 19.8989 7.26961 19.6431C6.9962 19.3873 6.80586 19.025 6.66951 18.3406C6.52895 17.6349 6.46492 16.6971 6.37506 15.3493L5.91512 8.45014Z"
                                                                fill="#F98182" />
                                                            <path
                                                                d="M9.42543 10.2538C9.83759 10.2125 10.2052 10.5133 10.2464 10.9254L10.7464 15.9254C10.7876 16.3376 10.4869 16.7051 10.0747 16.7463C9.66253 16.7875 9.295 16.4868 9.25378 16.0747L8.75378 11.0747C8.71257 10.6625 9.01328 10.295 9.42543 10.2538Z"
                                                                fill="#F98182" />
                                                            <path
                                                                d="M14.5747 10.2538C14.9869 10.295 15.2876 10.6625 15.2464 11.0747L14.7464 16.0747C14.7052 16.4868 14.3376 16.7875 13.9255 16.7463C13.5133 16.7051 13.2126 16.3376 13.2538 15.9254L13.7538 10.9254C13.795 10.5133 14.1626 10.2125 14.5747 10.2538Z"
                                                                fill="#F98182" />
                                                        </svg>
                                                        Delete
                                                    </li>
                                                </ul>
                                            </div>
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
                                    <option v-for="option in [5, 10, 20]" :key="option" :value="option">{{ option }}
                                    </option>
                                </select>
                            </div>

                            <!-- Pagination navigation -->
                            <div class="flex items-center gap-2">
                                <span class="text-[#22305C] text-sm">Go to:</span>
                                <input v-model="currentPage" @keyup.enter="goToPage()" type="number" min="1"
                                    max="totalPages"
                                    class="w-12 text-center text-sm text-black border rounded px-1 py-1" />
                                <button @click="prevPage()" :disabled="currentPage === 1"
                                    class="px-2 py-2 border-b bg-[#FFFFFF] rounded-lg text-[#22305C] text-sm">
                                    <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M10.6667 14.6666L4 7.99998L10.6667 1.33331L11.85 2.51665L6.36667 7.99998L11.85 13.4833L10.6667 14.6666Z"
                                            fill="#22305C" />
                                    </svg>

                                </button>
                                <span class="text-[#22305C] text-sm">{{ currentPage }} of {{ totalPages }}</span>
                                <button @click="nextPage()" :disabled="currentPage === totalPages"
                                    class="px-2 py-2 border-b bg-[#FFFFFF] rounded-lg text-[#22305C] text-sm">
                                    <svg class="h-4 w-4" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M5.33333 1.33335L12 8.00002L5.33333 14.6667L4.15 13.4834L9.63333 8.00002L4.15 2.51669L5.33333 1.33335Z"
                                            fill="#22305C" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Update Groupe Modal -->
    <div :class="['modal', { 'opacity-0 pointer-events-none': !openudategroupe }, 'z-50 fixed w-full h-full top-0 left-0 flex items-center justify-center']"
        role="dialog" aria-labelledby="modal-title">
        <!-- Overlay -->
        <div class="absolute w-full h-full filter backdrop-blur-xl " @click="openudategroupe = false"
            aria-hidden="true">
        </div>
        <UpdateGroupeModalRVO />
    </div>
</template>
<script>
import UpdateGroupeModalRVO from './UpdateGroupeModalRVO.vue';
export default {
    components: {
        UpdateGroupeModalRVO,
    },
    data() {
        return {
            tableData: [
                {
                    n: '12',
                    studentname: 'Hasnaoui Djellal',
                    dateofbirth: '23/07/1999',
                    phonenumber: '0699479248',
                    coursefee: 'Paid',
                    discount: 0,
                    balance: '1000',
                    status: 'Active',
                },
                {
                    n: '13',
                    studentname: 'Hasnaoui Djellal',
                    dateofbirth: '23/07/1999',
                    phonenumber: '0699479248',
                    coursefee: 'Exempt',
                    discount: 0,
                    balance: '1000',
                    status: 'Active',
                },
                {
                    n: '14',
                    studentname: 'Hasnaoui Djellal',
                    dateofbirth: '23/07/1999',
                    phonenumber: '0699479248',
                    coursefee: 'Not Paid',
                    discount: 0,
                    balance: '1000',
                    status: 'Active',
                },
                {
                    n: '15',
                    studentname: 'Hasnaoui Djellal',
                    dateofbirth: '23/07/1999',
                    phonenumber: '0699479248',
                    coursefee: 'Not Paid',
                    discount: 0,
                    balance: '1000',
                    status: 'Active',
                },
                {
                    n: '16',
                    studentname: 'Hasnaoui Djellal',
                    dateofbirth: '23/07/1999',
                    phonenumber: '0699479248',
                    coursefee: 'Paid',
                    discount: 0,
                    balance: '1000',
                    status: 'Active',
                },
            ],
            tableData2: [
                {
                    gid: 'G101',
                    class: 'Math - A1',
                    teacher: 'Mr. Ahmed',
                    sn: '12345',
                    day: 'Monday',
                    time: '8:00 - 10:00',
                    sessionno: 1,
                    progress: '1/4',
                    room: 'Room 201',
                    status: 'Active',
                    color: 'bg-[#14B5C7]',
                },
            ],
            dropdownVisibleIndex: null,
            rowsPerPage: 10,
            currentPage: 1,
            paginatedData: [],
            paginatedData2: [],

        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.tableData.length / this.rowsPerPage);
        },
    },
    methods: {
        getRowClass(students) {
            if (students > 10) return "bg-[#FCECEC]";
            if (students > 5) return "bg-[#E3F5EE]";
            if (students == 0) return "bg-[#D1D8E7]";
            return "bg-[#F0F2F7]";
        },
        getColor(row) {
            if (row.students > 10) return "bg-red-500";
            if (row.students > 5) return "bg-yellow-500";
            return "bg-green-500";
        },
        updatePagination() {
            this.currentPage = 1; // Reset to the first page
            this.paginateData();
        },
        paginateData() {
            const start = (this.currentPage - 1) * this.rowsPerPage;
            const end = start + this.rowsPerPage;
            this.paginatedData = this.tableData.slice(start, end);
            this.paginatedData2 = this.tableData2.slice(start, end);
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
    watch: {
        tableData: {
            handler() {
                this.paginateData();
            },
            immediate: true,
        },
    },
    mounted() {
        this.paginateData();
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
    color: #22305C;
}
</style>